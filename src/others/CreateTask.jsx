import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userdata, setuserdata] = useContext(AuthContext);

  const [taskTitle, setTitle] = useState("");
  const [taskDate, setDate] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      status,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Update the userdata by finding the assigned user and adding the task to their task list
    const updatedData = userdata.map((user) => {
      if (assign === user.firstName) {
        user.tasks.push(newTask); // Add new task to the user's task array
        user.taskCounts.newTask = user.taskCounts.newTask + 1; // Increment the task count
      }
      return user;
    });

    setuserdata(updatedData); // Update the userdata state
    console.log("Updated userdata:", updatedData); // Check if the data was updated correctly

    // Reset the form inputs
    setTitle("");
    setDate("");
    setCategory("");
    setAssign("");
    setDescription("");
    setStatus(""); // Reset the status
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg shadow-gray-800">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-6">
        Create Task
      </h1>
      <form onSubmit={submitHandler} className="flex justify-evenly">
        <div>
          <div className="m-2 mt-4 flex flex-col gap-3">
            <h3 className="text-lg text-gray-300">Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTitle(e.target.value)}
              className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="m-2 flex flex-col gap-3">
            <h3 className="text-lg text-gray-300">Date:</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setDate(e.target.value)}
              className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="m-2 flex flex-col gap-3">
            <h3 className="text-lg text-gray-300">Assign To</h3>
            <input
              type="text"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="m-2 flex flex-col gap-3">
            <h3 className="text-lg text-gray-300">Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-72 p-3 text-lg font-bold bg-blue-600 border border-blue-500 rounded-md hover:bg-blue-700 transition-all duration-300">
            Create Task
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg text-gray-300">Status:</h3>
            <select
              className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <h3 className="text-lg text-gray-300">Description:</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
            cols="50"
            rows="6"
            className="w-72 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
