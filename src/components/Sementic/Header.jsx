// export const Header = function(){
//     return(
//         <div className=" bg-[#787A91] h-25 border w-screen flex justify-between items-center pl-25 pr-25 rounded-b-full">
//             <div className="text-white">
//                 <h4 className="font-light text-[25px]">Hello</h4>
//                 <h1 className="text-4xl">Employee 👋</h1>
//             </div>
//             <div>
//                 <button className="border border-white bg-[#DA0037] text-white w-30 h-10 rounded-full cursor-pointer text-[20px]">Log Out</button>
//             </div>
//         </div>
//     )
// }
// bg-[#525252]
export const Header = function () {
  return (
    <header className="w-full px-6 ">
      <div className="h-28 w-full rounded-b-[45px] bg-gradient-to-r from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf] flex items-center justify-between px-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h4 className="text-[22px] font-light text-[#555555]">Hello</h4>

          <h1 className="text-[38px] font-medium leading-tight text-[#333333]">
            Employee 👋
          </h1>
        </div>

        {/* Right Section */}
        <button
          className="
            h-11
            w-32
            rounded-full
            bg-[#ff003d]
            text-white
            text-[18px]
            font-medium
            border-2
            border-white
            cursor-pointer
            hover:bg-[#e90037]
            transition
          "
        >
          Log Out
        </button>
      </div>
    </header>
  );
};
