// export const Login = function () {
//   return (
//     <div className="bg-gray-50 h-screen w-screen flex justify-center items-center ">
//       <div className="border-2 border-red-500">
//         <form className="flex flex-col items-center justify-center">
//           <input
//             className="text-black outline-none bg-transparent border-2 border-white  text-xl py-4 px-5 rounded-full "
//             type="email"
//             placeholder="Enter your email"
//           />
//           <input
//             className=" border-2 border-white  text-xl py-4 px-5 rounded-full "
//             type="password"
//             placeholder="Enter your password"
//           />
//           <button
//            className=" border-2 border-emerald-500  text-xl py-4 px-5 rounded-full "
//           >Log in</button>
//         </form>
//       </div>
//     </div>
//   );
// };

export const Login = function () {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf] relative overflow-hidden">
      <div className="relative w-[380px] h-[315px] bg-white rounded-[48px] shadow-[0_15px_35px_rgba(0,0,0,0.12)] flex items-center justify-center">
        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-[#ff003d] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
          <img
            src="/src/assets/icons8-user.svg"
            alt="User"
            className="w-[55px] h-[55px]"
          />
        </div>

        <form className="w-[320px] flex flex-col gap-3 pt-8">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              👤
            </span>

            <input
              id="Email"
              type="email"
              placeholder="Username"
              className="
                h-11
                w-full
                rounded-full
                bg-[#e5e5e5]
                border-none
                outline-none
                px-12
                text-sm
                text-gray-700
                placeholder:text-gray-400
              "
            />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              🔒
            </span>

            <input
              id="password"
              type="password"
              placeholder="***********"
              className="
                h-11
                w-full
                rounded-full
                bg-[#e5e5e5]
                border-none
                outline-none
                px-12
                text-sm
                text-gray-700
                placeholder:text-gray-400
              "
            />
          </div>

          <div className="flex items-center justify-between px-3 mt-1">
            <label className="flex items-center gap-2 text-[11px] text-gray-400">
              <input
                type="checkbox"
                defaultChecked
                className="w-3 h-3 accent-gray-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-[11px] italic text-gray-300 hover:text-gray-400"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="
              mt-2
              h-11
              w-full
              rounded-full
              bg-[#ff003d]
              text-white
              text-sm
              font-medium
              tracking-[1px]
              hover:bg-[#e90037]
              transition-colors
              duration-200
            "
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
