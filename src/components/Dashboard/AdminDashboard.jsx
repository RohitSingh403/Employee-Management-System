import { AllTask } from "../Sementic/AllTask";
import { CreateTask } from "../Sementic/CreateTask";
import { Header } from "../Sementic/Header";
export const AdminDashboard = function () {
  return (
    <div className="h-screen w-full bg-black ">
      <Header></Header>
     <CreateTask></CreateTask>
     <AllTask></AllTask>
    </div>
  );
};
//  bg-gradient-to-r from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf]