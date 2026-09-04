import { Header } from "../Sementic/Header";
import { CreateTask } from "../Sementic/CreateTask";
import { AllTask } from "../Sementic/AllTask";

export const AdminDashboard = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf]">

      {/* Background decoration */}
      <div className="pointer-events-none fixed -left-40 top-40 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none fixed -bottom-40 right-0 h-96 w-96 rounded-full bg-[#ff003d]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px]">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <section className="px-6 pb-10 pt-8 sm:px-8 lg:px-12">

          {/* Page Heading */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff003d]">
                Admin Workspace
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#292929] sm:text-4xl">
                Dashboard Overview
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#6f6f6f]">
                Manage your team, create tasks and keep track of
                everything happening across your workspace.
              </p>
            </div>

            {/* Date */}
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
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total */}
            <div className="group rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_15px_40px_rgba(70,50,50,0.07)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,50,50,0.11)]">

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#333333] text-lg text-white">
                  #
                </div>

                <span className="rounded-full bg-[#f3f1ef] px-3 py-1 text-xs font-medium text-[#777777]">
                  All tasks
                </span>
              </div>

              <p className="text-sm font-medium text-[#777777]">
                Total Tasks
              </p>

              <h3 className="mt-1 text-4xl font-semibold tracking-tight text-[#292929]">
                0
              </h3>

            </div>

            {/* New */}
            <div className="group rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_15px_40px_rgba(70,50,50,0.07)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,50,50,0.11)]">

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4CC9FE] text-lg text-white">
                  +
                </div>

                <span className="rounded-full bg-[#e8f8ff] px-3 py-1 text-xs font-medium text-[#2998c9]">
                  New
                </span>
              </div>

              <p className="text-sm font-medium text-[#777777]">
                New Tasks
              </p>

              <h3 className="mt-1 text-4xl font-semibold tracking-tight text-[#292929]">
                0
              </h3>

            </div>

            {/* Completed */}
            <div className="group rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_15px_40px_rgba(70,50,50,0.07)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,50,50,0.11)]">

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#9EDF9C] text-lg text-white">
                  ✓
                </div>

                <span className="rounded-full bg-[#edf9ec] px-3 py-1 text-xs font-medium text-[#5c9a59]">
                  Done
                </span>
              </div>

              <p className="text-sm font-medium text-[#777777]">
                Completed
              </p>

              <h3 className="mt-1 text-4xl font-semibold tracking-tight text-[#292929]">
                0
              </h3>

            </div>

            {/* Failed */}
            <div className="group rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_15px_40px_rgba(70,50,50,0.07)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(70,50,50,0.11)]">

              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff003d] text-lg text-white">
                  !
                </div>

                <span className="rounded-full bg-[#fff0f3] px-3 py-1 text-xs font-medium text-[#ff003d]">
                  Attention
                </span>
              </div>

              <p className="text-sm font-medium text-[#777777]">
                Failed
              </p>

              <h3 className="mt-1 text-4xl font-semibold tracking-tight text-[#292929]">
                0
              </h3>

            </div>

          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">

            {/* Create Task */}
            <section className="overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(70,50,50,0.08)] backdrop-blur-md">

              <div className="border-b border-[#eeeae7] px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff003d]">
                      Quick Action
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-[#292929]">
                      Create a Task
                    </h3>

                    <p className="mt-1 text-sm text-[#777777]">
                      Assign work to a team member.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0f3] text-xl text-[#ff003d]">
                    +
                  </div>

                </div>
              </div>

              <div className="p-6 sm:p-8">
                <CreateTask />
              </div>

            </section>

            {/* All Tasks */}
            <section className="overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(70,50,50,0.08)] backdrop-blur-md">

              <div className="border-b border-[#eeeae7] px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777777]">
                      Workspace
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-[#292929]">
                      All Tasks
                    </h3>

                    <p className="mt-1 text-sm text-[#777777]">
                      Monitor tasks across your team.
                    </p>
                  </div>

                  <div className="hidden rounded-full bg-[#f3f1ef] px-4 py-2 text-xs font-medium text-[#666666] sm:block">
                    Task Overview
                  </div>

                </div>
              </div>

              <div className="p-6 sm:p-8">
                <AllTask />
              </div>

            </section>

          </div>

        </section>

      </div>
    </main>
  );
};