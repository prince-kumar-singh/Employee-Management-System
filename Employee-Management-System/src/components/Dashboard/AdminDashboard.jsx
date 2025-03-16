import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

function AdminDashboard(props) {


  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={{ firstName: 'Admin' }} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
