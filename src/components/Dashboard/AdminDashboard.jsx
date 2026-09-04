import { useContext } from "react";
import { Header } from "../Sementic/Header";
import { CreateTask } from "../Sementic/CreateTask";
import { AllTask } from "../Sementic/AllTask";
import { TaskContext } from "../../context/TaskContext";

export const AdminDashboard = () => {
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;

  const newTasks = tasks.filter(
    (task) => task.status === "New"
  ).length;

  const acceptedTasks = tasks.filter(
    (task) => task.status === "Accepted"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const failedTasks = tasks.filter(
    (task) => task.status === "Failed"
  ).length;

  const stats = [
    {
      label: "Total Tasks",
      value: totalTasks,
      description: "All tasks",
      icon: "📋",
    },
    {
      label: "New Tasks",
      value: newTasks,
      description: "Waiting for action",
      icon: "🆕",
    },
    {
      label: "Accepted",
      value: acceptedTasks,
      description: "Currently in progress",
      icon: "⚡",
    },
    {
      label: "Completed",
      value: completedTasks,
      description: "Successfully completed",
      icon: "✅",
    },
    {
      label: "Failed",
      value: failedTasks,
      description: "Needs attention",
      icon: "❌",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf]">
      {/* Background decorations */}
      <div className="pointer-events-none fixed -left-40 top-40 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none fixed -bottom-40 right-0 h-96 w-96 rounded-full bg-[#ff003d]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Header />

        <section className="px-6 pb-12 pt-8 sm:px-8 lg:px-12">
          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff003d]">
                Admin Workspace
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#292929] sm:text-4xl">
                Dashboard Overview
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#6f6f6f]">
                Manage tasks, monitor employee activity and track overall
                workflow progress.
              </p>
            </div>

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
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/80 bg-white/75 p-6 shadow-[0_15px_40px_rgba(70,50,50,0.07)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(70,50,50,0.1)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#777777]">
                      {stat.label}
                    </p>

                    <h3 className="mt-3 text-4xl font-semibold tracking-tight text-[#292929]">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3f1ef] text-xl">
                    {stat.icon}
                  </div>
                </div>

                <p className="mt-4 text-xs text-[#999999]">
                  {stat.description}
                </p>
              </div>
            ))}
          </section>

          {/* Task Management */}
          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[380px_1fr]">
            {/* Create Task */}
            <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(70,50,50,0.08)] backdrop-blur-md">
              <div className="border-b border-[#eeeae7] px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Task Management
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#292929]">
                  Create Task
                </h3>

                <p className="mt-1 text-sm text-[#777777]">
                  Assign a new task to an employee.
                </p>
              </div>

              <div className="p-6">
                <CreateTask />
              </div>
            </div>

            {/* All Tasks */}
            <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(70,50,50,0.08)] backdrop-blur-md">
              <div className="border-b border-[#eeeae7] px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777777]">
                      Task Overview
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-[#292929]">
                      All Tasks
                    </h3>

                    <p className="mt-1 text-sm text-[#777777]">
                      Monitor and manage all assigned tasks.
                    </p>
                  </div>

                  <div className="flex w-fit items-center gap-2 rounded-full bg-[#f3f1ef] px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff003d]" />

                    <span className="text-xs font-medium text-[#666666]">
                      {totalTasks} {totalTasks === 1 ? "Task" : "Tasks"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <AllTask />
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};