import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export const CreateTask = () => {
  const { createTask } = useContext(TaskContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title: taskTitle.trim(),
      description: description.trim(),
      date,
      assignTo,
      category,
      priority,
    });

    // Clear form
    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setPriority("");

    alert("Task created successfully!");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Task Title */}
        <div>
          <label
            htmlFor="taskTitle"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Task Title
          </label>

          <input
            id="taskTitle"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="e.g. Design landing page"
            className="h-12 w-full rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Description
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what needs to be done..."
            rows="4"
            className="w-full resize-none rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 py-3 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Due Date
          </label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-12 w-full rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 text-sm text-[#555555] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          />
        </div>

        {/* Assign To */}
        <div>
          <label
            htmlFor="assignTo"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Assign To
          </label>

          <select
            id="assignTo"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="h-12 w-full rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 text-sm text-[#555555] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          >
            <option value="">Select employee</option>

            <option value="employee@example.com">
              Employee
            </option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-12 w-full rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 text-sm text-[#555555] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          >
            <option value="">Select category</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Research">Research</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label
            htmlFor="priority"
            className="mb-2 block text-sm font-semibold text-[#444444]"
          >
            Priority
          </label>

          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="h-12 w-full rounded-2xl border border-[#e5e0dc] bg-[#faf9f8] px-4 text-sm text-[#555555] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
            required
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#ff003d] text-sm font-semibold text-white shadow-lg shadow-[#ff003d]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e90037] hover:shadow-xl active:translate-y-0"
          >
            <span className="text-lg">+</span>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};