import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Employdashboard from "./components/Dashboard/Employdashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Authcontext } from "./context/AuthProvider";

function App() {
  const [User, SetUser] = useState(null);
  const [loggedInUserData, SetloggedInUserData] = useState(null);
  const [ UserData, SetUserData ] = useContext(Authcontext);

  useEffect(() => {
    const loggedInuser = localStorage.getItem("loggedInuser");
    if (loggedInuser) {
      const userData = JSON.parse(loggedInuser);
      SetUser(userData.role);
      SetloggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "sayan@example.com" && password === "123") {
      SetUser("admin");
      localStorage.setItem("loggedInuser", JSON.stringify({ role: "admin" }));
    } else if (UserData) {
      const employee = UserData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        SetUser("employee");
        SetloggedInUserData(employee);
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credential");
      }
    } else {
      alert("Invalid Credential");
    }
  };
  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : null}
      {User === "admin" ? (
        <AdminDashboard changeUser={SetUser} />
      ) : User === "employee" ? (
        <Employdashboard changeUser={SetUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
