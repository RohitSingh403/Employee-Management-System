export const TaskList = function () {
  return (
    <div
      id="tasklist"
      className=" h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5   m-10 "
    >
      <div className="h-full shrink-0 w-120 p-7 bg-[#787A91] rounded-2xl">
        <div className="flex  justify-between items-center  text-[25px]">
            <h3 className="bg-red-600 px-4 py-2 rounded-lg text-white"> High</h3>
            <h4 className="text-yellow-300">DD/MM/YYYY</h4>
        </div>
        <h2 className=" mt-5 text-[2rem] font-semibold text-white">Make Project for resume</h2>
        <p className="text-[1.25rem] text-white mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure quae laboriosam vero error provident dolorum? Porro nemo alias ullam!</p>
      </div>
    </div>
  );
};
//  bg-[#141E61]
