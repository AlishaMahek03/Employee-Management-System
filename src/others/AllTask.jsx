import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userdata] = useContext(AuthContext);

  return (
    <>
      <h3 className="py-4 text-center text-4xl font-extrabold text-gray-200">
        All Task's Assigned!
      </h3>
      <div className="bg-gray-800 mb-4 py-3 px-6 flex justify-between rounded-lg shadow-md shadow-gray-700">
        <h2 className="text-lg font-semibold text-gray-300 w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold text-gray-300 w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold text-gray-300 w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold text-gray-300 w-1/5">Completed</h5>
        <h5 className="text-lg font-semibold text-gray-300 w-1/5">Failed</h5>
      </div>
      <div className="h-60 bg-gray-900 text-white text-lg overflow-auto rounded-lg p-4">
        {userdata.map((elem, idx) => (
          <div key={idx} className="border border-gray-700 mb-2 py-3 px-6 flex justify-between rounded-lg">
            <h2 className="w-1/5">{elem.firstName}</h2>
            <h3 className="w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 text-green-400">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-red-500">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTask;
