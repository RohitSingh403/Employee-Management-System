export const TaskListNumber = function () {
  return (
    <div className="flex mt-10 pl-8 pr-8 justify-between gap-5 screen">
      <div className="w-[45%] p-10 text-white rounded-3xl py-6 px-9 bg-[#4CC9FE] ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h1 className="text-4xl font-medium">New Task</h1>
      </div>
      <div className="w-[45%] p-10 text-white rounded-3xl py-6 px-9  bg-[#9EDF9C]">
        <h2 className="text-3xl font-semibold">3</h2>
        <h1 className="text-4xl font-medium">Completed</h1>
      </div>
      <div className="w-[45%] p-10 text-white rounded-3xl py-6 px-9  bg-[#FFD369]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h1 className="text-4xl font-medium">Accepted</h1>
      </div>
      <div className="w-[45%] p-10 text-white rounded-3xl py-6 px-9   bg-[#ff0000c4]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h1 className="text-4xl font-medium">Failed</h1>
      </div>
    </div>
  );
};

