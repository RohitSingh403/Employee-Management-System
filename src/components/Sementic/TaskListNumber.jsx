import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

export const TaskListNumber = () => {
  const { user } = useContext(AuthContext);
  const { tasks } = useContext(TaskContext);

  // Only count tasks assigned to this employee
  const assignedTasks = tasks.filter(
    (task) => task.assignTo === user?.email
  );

  const newTasks = assignedTasks.filter(
    (task) => task.status === "New"
  ).length;

  const acceptedTasks = assignedTasks.filter(
    (task) => task.status === "Accepted"
  ).length;

  const completedTasks = assignedTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const failedTasks = assignedTasks.filter(
    (task) => task.status === "Failed"
  ).length;

  const statistics = [
    {
      label: "New Tasks",
      value: newTasks,
      description: "Waiting for action",
      icon: "✦",
      iconBg: "bg-[#e8f8ff]",
      iconColor: "text-[#2998c9]",
    },
    {
      label: "Accepted",
      value: acceptedTasks,
      description: "Currently in progress",
      icon: "✓",
      iconBg: "bg-[#fff8df]",
      iconColor: "text-[#a47c00]",
    },
    {
      label: "Completed",
      value: completedTasks,
      description: "Successfully finished",
      icon: "✓",
      iconBg: "bg-[#edf9ec]",
      iconColor: "text-[#5c9a59]",
    },
    {
      label: "Failed",
      value: failedTasks,
      description: "Needs attention",
      icon: "!",
      iconBg: "bg-[#fff0f3]",
      iconColor: "text-[#ff003d]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statistics.map((item) => (
        <div
          key={item.label}
          className="rounded-[26px] border border-white/80 bg-white/75 p-5 shadow-[0_15px_40px_rgba(70,50,50,0.06)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(70,50,50,0.09)]"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#777777]">
                {item.label}
              </p>

              <h3 className="mt-2 text-4xl font-semibold tracking-tight text-[#292929]">
                {item.value}
              </h3>
            </div>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} text-lg font-semibold`}
            >
              {item.icon}
            </div>
          </div>

          <p className="mt-4 text-xs text-[#999999]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};