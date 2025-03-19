import React from "react";
import { useState } from "react";

const Login = ({ handlelogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    console.log("email is", email);
    console.log("password is", password);
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="bg-[#1e1e1e] border-2 border-gray-700 shadow-lg shadow-gray-900 w-[30%] h-[80%] rounded-2xl p-8">
          <h3 className="text-4xl text-gray-300 font-extrabold text-center mb-8">
            Log in
          </h3>
          <div className="flex flex-col justify-center items-center w-full h-[70%]">
            <form
              onSubmit={(e) => submithandler(e)}
              className="flex flex-col justify-center items-center gap-6 w-full"
            >
              <input
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                className="w-72 h-12 bg-gray-800 text-white border border-gray-600 rounded-full text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                placeholder="Enter your email"
              />
              <input
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                className="w-72 h-12 bg-gray-800 text-white border border-gray-600 rounded-full text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                placeholder="Enter your password"
              />
              <button className="w-40 h-12 p-2 text-white text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 rounded-full hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-md shadow-gray-700">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
