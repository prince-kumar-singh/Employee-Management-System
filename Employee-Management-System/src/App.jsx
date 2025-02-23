import React, { useEffect } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashbord from './components/Dashboard/EmployeeDashbord';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

  useEffect(() => {
    //setLocalStorage();
    getLocalStorage()
  },);

  return (
    <>
      <Login />
      {/* <EmployeeDashbord /> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App;