import React from "react";
import Header from "../../other/header";
import CreateTask from "../../other/CreateTask";
function AdminDashboard() {
  return (
    <div className="h-screen w-full  p-10">
      <Header />
      <CreateTask/>
    </div>
  );
}

export default AdminDashboard;
