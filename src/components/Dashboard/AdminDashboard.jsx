import React from "react";
import Header from "../others/header";
import Creattask from "../others/Creattask";
import Alltask from "../others/Alltask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser}  />
      <Creattask/>
      <Alltask/>
    </div>
  );
};

export default AdminDashboard;
