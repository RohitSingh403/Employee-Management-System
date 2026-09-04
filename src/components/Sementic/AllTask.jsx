import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const statusStyles = {
  New: {
    badge: "bg-[#e8f8ff] text-[#2998c9]",
    dot: "bg-[#4CC9FE]",
  },

  Accepted: {
    badge: "bg-[#fff8df] text-[#a47c00]",
    dot: "bg-[#FFD369]",
  },

  Completed: {
    badge: "bg-[#edf9ec] text-[#5c9a59]",
    dot: "bg-[#9EDF9C]",
  },

  Failed: {
    badge: "bg-[#fff0f3] text-[#ff003d]",
    dot: "bg-[#ff003d]",
  },
};

export const AllTask = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) {
      return;
    }

    deleteTask(taskId);
  };

  if (tasks.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#ddd7d3] bg-[#faf9f8] px-6 py-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f1ef] text-xl">
          ✓
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[#333333]">
          No tasks yet
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#888888]">
          Create your first task using the form on the left.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop header */}
      <div className="hidden grid-cols-[1.5fr_1fr_0.9fr_0.9fr_0.8fr_auto] gap-4 border-b border-[#eeeae7] px-4 pb-4 text-xs font-semibold uppercase tracking-wider text-[#999999] lg:grid">
        <span>Task</span>
        <span>Assigned To</span>
        <span>Category</span>
        <span>Due Date</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      <div className="mt-3 space-y-3">
        {tasks.map((task) => {
          const style =
            statusStyles[task.status] || statusStyles.New;

          return (
            <div
              key={task.id}
              className="rounded-2xl border border-[#eeeae7] bg-[#faf9f8] p-4 transition duration-200 hover:border-[#e4deda] hover:bg-white hover:shadow-sm"
            >
              {/* Desktop */}
              <div className="hidden grid-cols-[1.5fr_1fr_0.9fr_0.9fr_0.8fr_auto] items-center gap-4 lg:grid">
                {/* Task */}
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold text-[#333333]">
                    {task.title}
                  </h4>

                  <p className="mt-1 truncate text-xs text-[#999999]">
                    {task.description}
                  </p>
                </div>

                {/* Employee */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f0e9e6] text-xs font-semibold text-[#555555]">
                    E
                  </div>

                  <span className="truncate text-sm text-[#555555]">
                    {task.assignTo === "employee@example.com"
                      ? "Employee"
                      : task.assignTo}
                  </span>
                </div>

                {/* Category */}
                <div>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#666666] shadow-sm">
                    {task.category}
                  </span>
                </div>

                {/* Date */}
                <span className="text-sm text-[#666666]">
                  {task.date}
                </span>

                {/* Status */}
                <div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${style.badge}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                    />

                    {task.status}
                  </span>
                </div>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => handleDelete(task.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#eee0e2] bg-white text-sm text-[#ff003d] transition hover:bg-[#fff0f3]"
                  title="Delete task"
                >
                  🗑
                </button>
              </div>

              {/* Mobile / Tablet */}
              <div className="lg:hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#333333]">
                      {task.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-[#999999]">
                      {task.description}
                    </p>
                  </div>

                  <span
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${style.badge}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                    />

                    {task.status}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#eeeae7] pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#aaaaaa]">
                      Assigned To
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.assignTo === "employee@example.com"
                        ? "Employee"
                        : task.assignTo}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#aaaaaa]">
                      Category
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#aaaaaa]">
                      Due Date
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#aaaaaa]">
                      Priority
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.priority}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(task.id)}
                  className="mt-5 h-10 w-full rounded-xl border border-[#eee0e2] bg-white text-xs font-semibold text-[#ff003d] transition hover:bg-[#fff0f3]"
                >
                  Delete Task
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};