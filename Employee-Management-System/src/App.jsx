import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashbord from './components/Dashboard/EmployeeDashbord';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin')
      console.log(user)
    }
    else if (email == 'user@me.com' && password == '123'){
      setUser('employee')
      console.log(user)
    }
    else{
      alert("invalid credentials")
    }
  }

  // handleLogin('admin@me.com',123);
  // handleLogin('user@me.com',123);
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : '' }
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashbord/>}
    </>
  )
}

export default App;