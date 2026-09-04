import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

const priorityStyles = {
  High: "bg-[#fff0f3] text-[#ff003d]",
  Medium: "bg-[#fff8df] text-[#a47c00]",
  Low: "bg-[#edf9ec] text-[#5c9a59]",
};

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

export const TaskList = () => {
  const { user } = useContext(AuthContext);
  const { tasks, updateTaskStatus } = useContext(TaskContext);

  const assignedTasks = tasks.filter(
    (task) => task.assignTo === user?.email
  );

  const handleAccept = (taskId) => {
    updateTaskStatus(taskId, "Accepted");
  };

  const handleComplete = (taskId) => {
    updateTaskStatus(taskId, "Completed");
  };

  const handleFail = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to mark this task as failed?"
    );

    if (!confirmed) {
      return;
    }

    updateTaskStatus(taskId, "Failed");
  };

  if (assignedTasks.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#ddd7d3] bg-[#faf9f8] px-6 py-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f1ef] text-xl">
          ✓
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[#333333]">
          No tasks assigned
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#888888]">
          You currently don't have any tasks assigned to you.
          New tasks will appear here when an admin assigns them.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="space-y-4">
        {assignedTasks.map((task) => {
          const statusStyle =
            statusStyles[task.status] || statusStyles.New;

          const priorityStyle =
            priorityStyles[task.priority] ||
            "bg-[#f3f1ef] text-[#666666]";

          return (
            <article
              key={task.id}
              className="rounded-[26px] border border-[#eeeae7] bg-[#faf9f8] p-5 transition duration-200 hover:border-[#e4deda] hover:bg-white hover:shadow-[0_12px_35px_rgba(70,50,50,0.06)] sm:p-6"
            >
              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${priorityStyle}`}
                    >
                      {task.priority || "Normal"} Priority
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#777777] shadow-sm">
                      {task.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#292929] sm:text-xl">
                    {task.title}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-[#777777]">
                    {task.description}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle.badge}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot}`}
                  />

                  {task.status}
                </span>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex flex-col gap-5 border-t border-[#eeeae7] pt-5">
                {/* Information */}
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaaaaa]">
                      Due Date
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#555555]">
                      {task.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaaaaa]">
                      Category
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#555555]">
                      {task.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#aaaaaa]">
                      Task ID
                    </p>

                    <p className="mt-1 max-w-[100px] truncate text-sm font-medium text-[#555555]">
                      #{String(task.id).slice(0, 8)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  {task.status === "New" && (
                    <button
                      type="button"
                      onClick={() => handleAccept(task.id)}
                      className="h-11 rounded-xl bg-[#ff003d] px-6 text-xs font-semibold text-white shadow-md shadow-[#ff003d]/15 transition hover:-translate-y-0.5 hover:bg-[#e90037] active:translate-y-0"
                    >
                      Accept Task
                    </button>
                  )}

                  {task.status === "Accepted" && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleFail(task.id)}
                        className="h-11 rounded-xl border border-[#f0dfe2] bg-white px-6 text-xs font-semibold text-[#ff003d] transition hover:bg-[#fff0f3]"
                      >
                        Mark Failed
                      </button>

                      <button
                        type="button"
                        onClick={() => handleComplete(task.id)}
                        className="h-11 rounded-xl bg-[#5c9a59] px-6 text-xs font-semibold text-white shadow-md shadow-[#5c9a59]/15 transition hover:-translate-y-0.5 hover:bg-[#4d894b] active:translate-y-0"
                      >
                        Mark Completed
                      </button>
                    </>
                  )}

                  {task.status === "Completed" && (
                    <div className="flex h-11 items-center rounded-xl bg-[#edf9ec] px-5 text-xs font-semibold text-[#5c9a59]">
                      ✓ Task completed
                    </div>
                  )}

                  {task.status === "Failed" && (
                    <div className="flex h-11 items-center rounded-xl bg-[#fff0f3] px-5 text-xs font-semibold text-[#ff003d]">
                      ! Task marked as failed
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};