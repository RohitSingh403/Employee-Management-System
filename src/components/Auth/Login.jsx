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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf] px-4">

      <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-xl">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff003d] text-3xl text-white shadow-lg">
          👤
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-[#333333]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#ff003d] focus:ring-2 focus:ring-[#ff003d]/10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#ff003d] focus:ring-2 focus:ring-[#ff003d]/10"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#ff003d] py-3 font-medium text-white transition hover:bg-[#e90037] active:scale-[0.98]"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};