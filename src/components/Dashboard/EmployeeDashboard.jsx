import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import TaskList from '../../tasklist/TaskList'

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="bg-[#1e1e1e] border-2 border-gray-700 shadow-lg shadow-gray-900 w-[85%] h-[95%] rounded-2xl p-10">
        <Header data={data} handleLogout={handleLogout} />
        <TaskNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard

