import React, { useState, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);

  const AuthData = useContext(AuthContext);
  if (AuthData) {
    console.log();
  }

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin');
    } else if (AuthData && AuthData.employees.find((e)=>email==e.email && e.password==password)) {
      setUser('employee');
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;