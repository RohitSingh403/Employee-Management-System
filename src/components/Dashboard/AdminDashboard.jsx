import { CreateTask } from "../Sementic/CreateTask";
import { Header } from "../Sementic/Header";
export const AdminDashboard = function () {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf]">
      <Header></Header>
     <CreateTask></CreateTask>
    </div>
  );
};
