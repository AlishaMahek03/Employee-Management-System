import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 p-5">
      <div className="px-6 py-7 w-[22%] bg-gradient-to-r from-red-500 to-red-600 border-2 border-gray-600 rounded-2xl">
        <h1 className="text-5xl">{data.taskCounts.active}</h1>
        <h2 className="text-3xl font-medium text-white">Active</h2>
      </div>
      <div className="px-6 py-7 w-[22%] bg-gradient-to-r from-green-500 to-green-600 border-2 border-gray-600 rounded-2xl">
        <h1 className="text-5xl">{data.taskCounts.completed}</h1>
        <h2 className="text-3xl font-medium text-white">Completed</h2>
      </div>
      <div className="px-6 py-7 w-[22%] bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-gray-600 rounded-2xl">
        <h1 className="text-5xl">{data.taskCounts.failed}</h1>
        <h2 className="text-3xl font-medium text-white">Failed</h2>
      </div>
      <div className="px-6 py-7 w-[22%] bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-gray-600 rounded-2xl">
        <h1 className="text-5xl">{data.taskCounts.newTask}</h1>
        <h2 className="text-3xl font-medium text-white">New Task</h2>
      </div>
    </div>
  );
};

export default TaskNumber;
