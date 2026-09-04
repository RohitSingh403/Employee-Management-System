// import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
// import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { Login } from "./components/Auth/Login";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
// import { Header } from "./components/Sementic/Header";
// import { TaskListNumber } from "./components/Sementic/TaskListNumber";
function App() {
  // useEffect(function(){
  //   // setLocalStorage()
  //   getLocalStorage()
  // },[])

  const [user, setUser] = useState(null);

  const handleLogin = function (email, password) {
    if (email == "admin@example.com" && password == "123") {
      setUser('admin')
    } else if (email == "employee@example.com" && password == "123") {
      setUser('employee')
    } else {
      alert("Wrong Credentials");
    }
  };



  return (
    <div>
      {/* <Login></Login> */}
      {!user ? <Login handleLogin={handleLogin}></Login> : ""}
      {user == 'admin' ? <AdminDashboard></AdminDashboard> : <EmployeeDashboard></EmployeeDashboard> }
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
    </div>
  );
}

export default App;
