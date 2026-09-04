import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="w-full px-6 pt-4">
      <div className="flex h-28 w-full items-center justify-between rounded-b-[45px] border-2 border-white bg-gradient-to-r from-[#f7d7da] via-[#f2e7e1] to-[#e8eadf] px-16">

        <div className="flex flex-col justify-center">
          <h4 className="text-[22px] font-light text-[#555555]">
            Hello
          </h4>

          <h1 className="text-[38px] font-medium leading-tight text-[#333333]">
            {user?.name || "Employee"} 👋
          </h1>
        </div>

        <button
          onClick={logout}
          className="h-11 w-32 rounded-full border-2 border-white bg-[#ff003d] text-[18px] font-medium text-white transition hover:bg-[#e90037]"
        >
          Log Out
        </button>

      </div>
    </header>
  );
};