import React from 'react'

const Header1 = ({ handleLogout }) => {
  return (
    <div className='flex justify-between items-center text-xl bg-gray-800 px-8 py-4 rounded-lg shadow-lg shadow-gray-700'>
      <div>
        <h1 className='text-2xl font-semibold text-gray-300'>
          Hello! <br />
          <span className='ml-2 text-3xl font-bold text-white'>Alisha 👋🏻</span>
        </h1>
      </div>
      <button 
        onClick={handleLogout} 
        className='bg-red-600 text-2xl px-6 py-3 font-bold border border-red-500 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300'>
        Log Out
      </button>
    </div>
  )
}

export default Header1;

