export const CreateTask = function () {
  return (
    <div className=" h-140 w-248 border-[2px] border-white rounded-3xl mt-5 pl-10 ml-10 flex flex-col mb-10  ">
      <h1 className="text-4xl mb-7 pt-6">Create Task 📝</h1>

      <form>
        <h3 className="text-2xl font-bold">Task Title</h3>
        <input
          className="mt-1 border rounded-xl p-2 w-[80%] "
          type="text"
          placeholder="Make a UI design"
        />
        <h3 className="text-2xl font-bold">Description</h3>
        <textarea
          className="border mt-1 border rounded-xl p-2 w-[80%]"
          name=""
          id=""
        ></textarea>
        <h3 className="text-2xl font-bold">Date</h3>
        <input className="mt-1 border rounded-xl p-2 w-[80%]" type="date" />
        <h3 className="text-2xl font-bold">Assign To</h3>
        <input
          className="mt-1 border rounded-xl p-2 w-[80%]"
          type="text"
          placeholder="employee name"
        />

        <h3 className="text-2xl font-bold">Category</h3>
        <input
          className="mt-1 border rounded-xl p-2 w-[80%]"
          type="text"
          placeholder="Design, Dev, etc"
        />
        <button className=" ml-10 cursor-pointer border p-2 text-white rounded-xl bg-[#ff003d]">
          Create Task
        </button>
      </form>
    </div>
  );
};
