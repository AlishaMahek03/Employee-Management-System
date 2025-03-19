import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utilis/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const [user, setUser] = useState(null)
  const [loggeddata, setloggeddata] = useState(null) 
  const [user_auth_data, setuser_auth_data] = useContext(AuthContext)
   
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if(loggedInUser) {
      const userdata = loggedInUser;
      setUser(userdata.role);
      setloggeddata(userdata.data || null);
    }
  }, []);


  const handleLogout = () => {
    setUser(null);
    setloggeddata(null);
    localStorage.removeItem('loggedInUser'); // Clear user data on logout
  };
   
  
  
  const handlelogin = (email, password)=>{
    if(email=="admin@example.com" && password == "ad123"){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin"}))
    }
    else if(user_auth_data){
      const employee = user_auth_data.find((e)=> email === e.email && password === e.password)
      if(employee){
          setUser('employee')
          setloggeddata(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:"employee", data: employee}))
      }else{
        alert("Invalid Credentials!")
      }
      
    }
    else{
      alert("Invalid Credentials!")
    }
  }



  return (
    <>
    {!user ? <Login handlelogin={handlelogin}/> : ""}
    {user=='employee'? <EmployeeDashboard handleLogout={handleLogout} data={loggeddata}/> : ""}
    {user == 'admin' ? <AdminDashboard handleLogout={handleLogout}/> : ""}
    </>
  )
}

export default App
