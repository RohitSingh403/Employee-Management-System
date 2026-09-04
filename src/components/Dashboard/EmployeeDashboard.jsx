import { Header } from "../Sementic/Header";
import { TaskListNumber } from "../Sementic/TaskListNumber";
import { TaskList } from "../TaskList/TaskList";

export const EmployeeDashboard = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf]">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -left-40 top-40 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none fixed -bottom-40 right-0 h-96 w-96 rounded-full bg-[#ff003d]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Header />

        <section className="px-6 pb-10 pt-8 sm:px-8 lg:px-12">
          {/* Page heading */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff003d]">
                Employee Workspace
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#292929] sm:text-4xl">
                My Tasks
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#6f6f6f]">
                View your assigned tasks, track your progress and keep your
                work moving forward.
              </p>
            </div>

            {/* Today */}
            <div className="rounded-2xl border border-white/80 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-wider text-[#999999]">
                Today
              </p>

              <p className="mt-1 text-sm font-semibold text-[#333333]">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <TaskListNumber />

          {/* Tasks */}
          <section className="mt-8 overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(70,50,50,0.08)] backdrop-blur-md">
            {/* Section header */}
            <div className="border-b border-[#eeeae7] px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777777]">
                    Assigned Work
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-[#292929]">
                    Task Board
                  </h3>

                  <p className="mt-1 text-sm text-[#777777]">
                    Review your assigned tasks and their current status.
                  </p>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full bg-[#f3f1ef] px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff003d]" />

                  <span className="text-xs font-medium text-[#666666]">
                    Your Workspace
                  </span>
                </div>
              </div>
            </div>

            {/* Task list */}
            <div className="p-6 sm:p-8">
              <TaskList />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};