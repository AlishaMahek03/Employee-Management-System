import React from 'react'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'
import Header1 from '../../others/Header-Admin'

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className='p-10 h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
      <Header1 handleLogout={handleLogout} />
      <div className="mt-6">
        <CreateTask />
      </div>
      <div className="mt-6">
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard;

