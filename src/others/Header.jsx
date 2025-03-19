import React from 'react'

const Header = ({ data, handleLogout }) => {
  return (
    <div className='flex justify-between items-end text-xl mb-8'>
      <div>
        <h1 className='text-3xl text-white font-bold'>
          Hello! <br />
          <span className='ml-2 text-4xl text-indigo-500'>{data.firstName }👋🏻</span>
        </h1>
      </div>
      <button
        onClick={handleLogout}
        className='bg-gradient-to-r from-red-600 to-red-700 text-2xl px-6 py-3 font-bold border border-gray-600 rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300'>
        Log Out
      </button>
    </div>
  )
}

export default Header

