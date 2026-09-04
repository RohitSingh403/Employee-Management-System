import { useContext, useMemo, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export const AllTask = () => {
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [employeeFilter, setEmployeeFilter] = useState("All");

  const [editingTask, setEditingTask] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
    priority: "",
  });

  const employees = useMemo(() => {
    return [
      ...new Set(
        tasks
          .map((task) => task.assignTo)
          .filter(Boolean)
      ),
    ];
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        !query ||
        task.title?.toLowerCase().includes(query) ||
        task.description?.toLowerCase().includes(query) ||
        task.assignTo?.toLowerCase().includes(query) ||
        task.category?.toLowerCase().includes(query) ||
        task.priority?.toLowerCase().includes(query) ||
        task.status?.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;

      const matchesCategory =
        categoryFilter === "All" ||
        task.category === categoryFilter;

      const matchesEmployee =
        employeeFilter === "All" ||
        task.assignTo === employeeFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory &&
        matchesEmployee
      );
    });
  }, [
    tasks,
    searchTerm,
    statusFilter,
    priorityFilter,
    categoryFilter,
    employeeFilter,
  ]);

  const hasActiveFilters =
    searchTerm ||
    statusFilter !== "All" ||
    priorityFilter !== "All" ||
    categoryFilter !== "All" ||
    employeeFilter !== "All";

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setPriorityFilter("All");
    setCategoryFilter("All");
    setEmployeeFilter("All");
  };

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      deleteTask(taskId);
    }
  };

  const handleEditOpen = (task) => {
    setEditingTask(task);

    setEditForm({
      title: task.title || "",
      description: task.description || "",
      date: task.date || "",
      assignTo: task.assignTo || "",
      category: task.category || "",
      priority: task.priority || "",
    });
  };

  const handleEditClose = () => {
    setEditingTask(null);

    setEditForm({
      title: "",
      description: "",
      date: "",
      assignTo: "",
      category: "",
      priority: "",
    });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;

    setEditForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    if (!editForm.title.trim()) {
      alert("Task title is required.");
      return;
    }

    if (!editForm.assignTo) {
      alert("Please select an employee.");
      return;
    }

    if (!editForm.category) {
      alert("Please select a category.");
      return;
    }

    if (!editForm.priority) {
      alert("Please select a priority.");
      return;
    }

    updateTask(editingTask.id, {
      title: editForm.title.trim(),
      description: editForm.description.trim(),
      date: editForm.date,
      assignTo: editForm.assignTo,
      category: editForm.category,
      priority: editForm.priority,
    });

    handleEditClose();

    alert("Task updated successfully!");
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-[#fff4cc] text-[#9a7200]";

      case "Completed":
        return "bg-[#e3f6e8] text-[#27813e]";

      case "Failed":
        return "bg-[#ffe4e6] text-[#c92a3d]";

      default:
        return "bg-[#e5f0ff] text-[#3c6fa8]";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-[#ffe4e6] text-[#c92a3d]";

      case "Medium":
        return "bg-[#fff4cc] text-[#9a7200]";

      case "Low":
        return "bg-[#e3f6e8] text-[#27813e]";

      default:
        return "bg-[#f3f1ef] text-[#777777]";
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[#d9d3cf] bg-[#faf9f8] px-6 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
          📋
        </div>

        <h4 className="text-lg font-semibold text-[#333333]">
          No Tasks Yet
        </h4>

        <p className="mt-2 max-w-sm text-sm leading-6 text-[#888888]">
          Create your first task using the task creation form.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Search */}
      <div className="mb-5">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#999999]">
            🔎
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search tasks by title, employee, category, status..."
            className="h-12 w-full rounded-2xl border border-[#e4dfdb] bg-[#faf9f8] pl-11 pr-11 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa5a1] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#999999] transition hover:text-[#ff003d]"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-[24px] border border-[#eeeae7] bg-[#faf9f8] p-4 sm:p-5">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#888888]">
              Filters
            </p>

            <p className="mt-1 text-sm text-[#777777]">
              Narrow down tasks using multiple filters.
            </p>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="w-fit rounded-full border border-[#ffd4da] bg-white px-4 py-2 text-xs font-semibold text-[#d52d43] transition hover:border-[#ff003d] hover:bg-[#fff4f5]"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {/* Status */}
          <div>
            <label
              htmlFor="status-filter"
              className="mb-2 block text-xs font-semibold text-[#777777]"
            >
              Status
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="h-11 w-full rounded-xl border border-[#e4dfdb] bg-white px-3 text-sm text-[#444444] outline-none transition focus:border-[#ff003d] focus:ring-4 focus:ring-[#ff003d]/10"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Accepted">Accepted</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="priority-filter"
              className="mb-2 block text-xs font-semibold text-[#777777]"
            >
              Priority
            </label>

            <select
              id="priority-filter"
              value={priorityFilter}
              onChange={(event) =>
                setPriorityFilter(event.target.value)
              }
              className="h-11 w-full rounded-xl border border-[#e4dfdb] bg-white px-3 text-sm text-[#444444] outline-none transition focus:border-[#ff003d] focus:ring-4 focus:ring-[#ff003d]/10"
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category-filter"
              className="mb-2 block text-xs font-semibold text-[#777777]"
            >
              Category
            </label>

            <select
              id="category-filter"
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
              className="h-11 w-full rounded-xl border border-[#e4dfdb] bg-white px-3 text-sm text-[#444444] outline-none transition focus:border-[#ff003d] focus:ring-4 focus:ring-[#ff003d]/10"
            >
              <option value="All">All Categories</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
              <option value="Research">Research</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Employee */}
          <div>
            <label
              htmlFor="employee-filter"
              className="mb-2 block text-xs font-semibold text-[#777777]"
            >
              Employee
            </label>

            <select
              id="employee-filter"
              value={employeeFilter}
              onChange={(event) =>
                setEmployeeFilter(event.target.value)
              }
              className="h-11 w-full rounded-xl border border-[#e4dfdb] bg-white px-3 text-sm text-[#444444] outline-none transition focus:border-[#ff003d] focus:ring-4 focus:ring-[#ff003d]/10"
            >
              <option value="All">All Employees</option>

              {employees.map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-[#888888]">
          Showing{" "}
          <span className="font-semibold text-[#555555]">
            {filteredTasks.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[#555555]">
            {tasks.length}
          </span>{" "}
          {tasks.length === 1 ? "task" : "tasks"}
        </p>

        {hasActiveFilters && (
          <span className="rounded-full bg-[#f3f1ef] px-3 py-1 text-[11px] font-medium text-[#777777]">
            Filters active
          </span>
        )}
      </div>

      {/* Empty Filter Result */}
      {filteredTasks.length === 0 && (
        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[#d9d3cf] bg-[#faf9f8] px-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
            🔎
          </div>

          <h4 className="text-lg font-semibold text-[#333333]">
            No Matching Tasks
          </h4>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#888888]">
            No tasks match your current search and filter combination.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-full bg-[#ff003d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e90037]"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Task List */}
      {filteredTasks.length > 0 && (
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <article
              key={task.id}
              className="rounded-[24px] border border-[#eeeae7] bg-[#faf9f8] p-5 transition hover:border-white hover:bg-white hover:shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="break-words text-lg font-semibold text-[#292929]">
                      {task.title}
                    </h4>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${getStatusStyle(
                        task.status
                      )}`}
                    >
                      {task.status}
                    </span>
                  </div>

                  {task.description && (
                    <p className="mt-2 break-words text-sm leading-6 text-[#777777]">
                      {task.description}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex w-fit items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleEditOpen(task)}
                    className="rounded-full border border-[#e4dfdb] bg-white px-4 py-2 text-xs font-semibold text-[#555555] transition hover:border-[#ff003d] hover:bg-[#fff4f5] hover:text-[#d52d43]"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(task.id)}
                    className="rounded-full border border-[#ffd4da] bg-white px-4 py-2 text-xs font-semibold text-[#d52d43] transition hover:border-[#ff003d] hover:bg-[#fff4f5]"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Task Details */}
              <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#eeeae7] pt-5 sm:grid-cols-2 xl:grid-cols-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa5a1]">
                    Assigned To
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-[#444444]">
                    {task.assignTo || "Not assigned"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa5a1]">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#444444]">
                    {task.category || "Other"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa5a1]">
                    Due Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#444444]">
                    {task.date || "No date"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa5a1]">
                    Priority
                  </p>

                  <span
                    className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                      task.priority
                    )}`}
                  >
                    {task.priority || "Normal"}
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] text-[#aaa5a1]">
                  Task ID: {task.id}
                </p>

                {task.createdAt && (
                  <p className="text-[10px] text-[#aaa5a1]">
                    Created:{" "}
                    {new Date(task.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#292929]/40 px-4 py-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-white/80 bg-white p-6 shadow-[0_30px_80px_rgba(40,30,30,0.2)] sm:p-8">
            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff003d]">
                  Task Management
                </p>

                <h3 className="mt-1 text-2xl font-semibold text-[#292929]">
                  Edit Task
                </h3>

                <p className="mt-1 text-sm text-[#777777]">
                  Update the task details below.
                </p>
              </div>

              <button
                type="button"
                onClick={handleEditClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3f1ef] text-xl text-[#777777] transition hover:bg-[#ffe4e6] hover:text-[#d52d43]"
                aria-label="Close edit modal"
              >
                ×
              </button>
            </div>

            {/* Edit Form */}
            <form
              onSubmit={handleEditSubmit}
              className="space-y-5"
            >
              {/* Title */}
              <div>
                <label
                  htmlFor="edit-title"
                  className="mb-2 block text-sm font-semibold text-[#444444]"
                >
                  Task Title
                </label>

                <input
                  id="edit-title"
                  name="title"
                  type="text"
                  value={editForm.title}
                  onChange={handleEditChange}
                  placeholder="Enter task title"
                  className="h-12 w-full rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa5a1] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="edit-description"
                  className="mb-2 block text-sm font-semibold text-[#444444]"
                >
                  Description
                </label>

                <textarea
                  id="edit-description"
                  name="description"
                  rows="4"
                  value={editForm.description}
                  onChange={handleEditChange}
                  placeholder="Enter task description"
                  className="w-full resize-none rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 py-3 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa5a1] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                />
              </div>

              {/* Date + Employee */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="edit-date"
                    className="mb-2 block text-sm font-semibold text-[#444444]"
                  >
                    Due Date
                  </label>

                  <input
                    id="edit-date"
                    name="date"
                    type="date"
                    value={editForm.date}
                    onChange={handleEditChange}
                    className="h-12 w-full rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="edit-employee"
                    className="mb-2 block text-sm font-semibold text-[#444444]"
                  >
                    Assign To
                  </label>

                  <select
                    id="edit-employee"
                    name="assignTo"
                    value={editForm.assignTo}
                    onChange={handleEditChange}
                    className="h-12 w-full rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  >
                    <option value="">
                      Select Employee
                    </option>

                    <option value="employee@example.com">
                      employee@example.com
                    </option>

                    {employees
                      .filter(
                        (employee) =>
                          employee !== "employee@example.com"
                      )
                      .map((employee) => (
                        <option key={employee} value={employee}>
                          {employee}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Category + Priority */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="edit-category"
                    className="mb-2 block text-sm font-semibold text-[#444444]"
                  >
                    Category
                  </label>

                  <select
                    id="edit-category"
                    name="category"
                    value={editForm.category}
                    onChange={handleEditChange}
                    className="h-12 w-full rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  >
                    <option value="">
                      Select Category
                    </option>

                    <option value="Design">Design</option>
                    <option value="Development">
                      Development
                    </option>
                    <option value="Testing">Testing</option>
                    <option value="Research">Research</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="edit-priority"
                    className="mb-2 block text-sm font-semibold text-[#444444]"
                  >
                    Priority
                  </label>

                  <select
                    id="edit-priority"
                    name="priority"
                    value={editForm.priority}
                    onChange={handleEditChange}
                    className="h-12 w-full rounded-xl border border-[#e4dfdb] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  >
                    <option value="">
                      Select Priority
                    </option>

                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              {/* Current Status */}
              <div className="rounded-2xl bg-[#f7f5f3] px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999999]">
                      Current Status
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#444444]">
                      {editingTask.status}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                      editingTask.status
                    )}`}
                  >
                    {editingTask.status}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleEditClose}
                  className="h-11 rounded-full border border-[#e4dfdb] bg-white px-6 text-sm font-semibold text-[#555555] transition hover:bg-[#f7f5f3]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-11 rounded-full bg-[#ff003d] px-7 text-sm font-semibold text-white transition hover:bg-[#e90037]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};