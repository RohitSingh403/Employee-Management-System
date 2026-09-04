import { useContext } from "react";
import "./App.css";

import { Login } from "./components/Auth/Login";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";

import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user && <Login />}

      {user?.role === "admin" && <AdminDashboard />}

      {user?.role === "employee" && <EmployeeDashboard />}
    </div>
  );
}

export default App;