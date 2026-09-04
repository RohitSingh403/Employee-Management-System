const tasks = [
  {
    id: 1,
    title: "Design Landing Page",
    employee: "Employee",
    category: "Design",
    date: "Sep 04, 2026",
    status: "New",
  },
  {
    id: 2,
    title: "Build Authentication",
    employee: "Employee",
    category: "Development",
    date: "Sep 05, 2026",
    status: "Accepted",
  },
  {
    id: 3,
    title: "API Integration",
    employee: "Employee",
    category: "Development",
    date: "Sep 06, 2026",
    status: "Completed",
  },
  {
    id: 4,
    title: "Test Dashboard",
    employee: "Employee",
    category: "Testing",
    date: "Sep 07, 2026",
    status: "Failed",
  },
];

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
  return (
    <div className="w-full">

      {/* Desktop Header */}
      <div className="hidden grid-cols-[1.5fr_1fr_0.9fr_0.9fr_0.8fr] gap-4 border-b border-[#eeeae7] px-4 pb-4 text-xs font-semibold uppercase tracking-wider text-[#999999] md:grid">
        <span>Task</span>
        <span>Assigned To</span>
        <span>Category</span>
        <span>Due Date</span>
        <span>Status</span>
      </div>

      {/* Task List */}
      <div className="mt-3 space-y-3">

        {tasks.map((task) => {
          const style = statusStyles[task.status];

          return (
            <div
              key={task.id}
              className="rounded-2xl border border-[#eeeae7] bg-[#faf9f8] p-4 transition duration-200 hover:border-[#e4deda] hover:bg-white hover:shadow-sm"
            >

              {/* Desktop */}
              <div className="hidden grid-cols-[1.5fr_1fr_0.9fr_0.9fr_0.8fr] items-center gap-4 md:grid">

                {/* Task */}
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold text-[#333333]">
                    {task.title}
                  </h4>

                  <p className="mt-1 text-xs text-[#999999]">
                    Task #{task.id}
                  </p>
                </div>

                {/* Employee */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f0e9e6] text-xs font-semibold text-[#555555]">
                    E
                  </div>

                  <span className="text-sm text-[#555555]">
                    {task.employee}
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

              </div>

              {/* Mobile */}
              <div className="md:hidden">

                <div className="mb-4 flex items-start justify-between gap-3">

                  <div>
                    <h4 className="text-sm font-semibold text-[#333333]">
                      {task.title}
                    </h4>

                    <p className="mt-1 text-xs text-[#999999]">
                      Task #{task.id}
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

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#aaa]">
                      Assigned To
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.employee}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#aaa]">
                      Category
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#aaa]">
                      Due Date
                    </p>

                    <p className="mt-1 text-sm text-[#555555]">
                      {task.date}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};