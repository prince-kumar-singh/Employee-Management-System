import React, { useState, useContext, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser",'');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin', data: 'admin' }));
    } else if (AuthData) {
      const employee = AuthData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;