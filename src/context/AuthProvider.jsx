import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { employees } from "../utils/employees";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
    } catch (error) {
      console.error("Failed to restore login session:", error);
      localStorage.removeItem("loggedInUser");
    }
  }, []);

  const login = (email, password) => {
    let loggedInUser = null;

    if (
      email === "admin@example.com" &&
      password === "123"
    ) {
      loggedInUser = {
        id: "admin",
        role: "admin",
        email,
        name: "Admin",
      };
    }

    const employee = employees.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (employee) {
      loggedInUser = {
        id: employee.id,
        role: employee.role,
        email: employee.email,
        name: employee.name,
      };
    }

    if (!loggedInUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return {
      success: true,
      user: loggedInUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;