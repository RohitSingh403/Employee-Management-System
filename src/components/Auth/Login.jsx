import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      alert(result.message);
      return;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf] p-4 sm:p-6">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ff003d]/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-[36px] border border-white/70 bg-white/30 shadow-[0_30px_80px_rgba(80,60,60,0.15)] backdrop-blur-xl lg:grid-cols-2">

          {/* LEFT SIDE */}
          <section className="hidden min-h-[680px] flex-col justify-between p-12 lg:flex xl:p-16">

            {/* Brand */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff003d] text-xl text-white shadow-lg shadow-[#ff003d]/20">
                  E
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#333333]">
                    Employee
                  </h2>

                  <p className="text-xs text-[#777777]">
                    Management System
                  </p>
                </div>
              </div>

              {/* Hero Text */}
              <div className="max-w-lg">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#ff003d]">
                  Workspace
                </p>

                <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-[#292929] xl:text-6xl">
                  Manage your team.
                  <br />
                  <span className="text-[#ff003d]">
                    Get work done.
                  </span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-7 text-[#666666]">
                  A simple workspace to manage employees, assign tasks,
                  track progress, and keep your team moving forward.
                </p>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/40 p-4 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#333333] text-white">
                ✓
              </div>

              <div>
                <p className="text-sm font-medium text-[#333333]">
                  Everything in one place
                </p>

                <p className="mt-1 text-xs text-[#777777]">
                  Tasks, employees and progress.
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="flex min-h-[680px] items-center justify-center bg-white/80 p-6 sm:p-10 lg:p-12">

            <div className="w-full max-w-md">

              {/* Mobile Brand */}
              <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff003d] text-xl font-semibold text-white">
                  E
                </div>

                <div>
                  <h2 className="font-semibold text-[#333333]">
                    Employee
                  </h2>

                  <p className="text-xs text-[#777777]">
                    Management System
                  </p>
                </div>
              </div>

              {/* Login Icon */}
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#ff003d] text-2xl text-white shadow-xl shadow-[#ff003d]/20">
                👤
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-[#ff003d]">
                  Welcome back
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-[#292929]">
                  Sign in to your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#777777]">
                  Enter your credentials to access your workspace.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#444444]"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    autoComplete="email"
                    required
                    className="h-14 w-full rounded-2xl border border-[#e6e2df] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#444444]"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-[#ff003d] transition hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-14 w-full rounded-2xl border border-[#e6e2df] bg-[#faf9f8] px-4 text-sm text-[#333333] outline-none transition placeholder:text-[#aaa] focus:border-[#ff003d] focus:bg-white focus:ring-4 focus:ring-[#ff003d]/10"
                  />
                </div>

                {/* Remember */}
                <div className="flex items-center gap-3">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 accent-[#ff003d]"
                  />

                  <label
                    htmlFor="remember"
                    className="cursor-pointer text-sm text-[#666666]"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#ff003d] text-sm font-semibold text-white shadow-lg shadow-[#ff003d]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e90037] hover:shadow-xl hover:shadow-[#ff003d]/25 active:translate-y-0"
                >
                  Sign in

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </form>

              {/* Demo Credentials */}
              <div className="mt-7 rounded-2xl border border-[#eeeae7] bg-[#faf9f8] p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999999]">
                  Demo access
                </p>

                <div className="space-y-1 text-xs text-[#666666]">
                  <p>
                    <span className="font-medium text-[#333333]">
                      Admin:
                    </span>{" "}
                    admin@example.com / 123
                  </p>

                  <p>
                    <span className="font-medium text-[#333333]">
                      Employee:
                    </span>{" "}
                    employee@example.com / 123
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
};