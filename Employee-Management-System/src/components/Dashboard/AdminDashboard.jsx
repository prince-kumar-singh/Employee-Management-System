import React from "react";
import Header from "../../other/header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

function AdminDashboard(props) {


  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
