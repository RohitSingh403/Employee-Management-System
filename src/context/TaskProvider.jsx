import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");

      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (taskData) => {
    const newTask = {
      id: crypto.randomUUID(),
      ...taskData,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    return newTask;
  };

  const updateTask = (taskId, updatedTaskData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              ...updatedTaskData,
              updatedAt: new Date().toISOString(),
            }
          : task
      )
    );
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status,
            }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;