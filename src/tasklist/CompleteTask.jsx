import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div
      className='h-[79%] shrink-0 w-[360px] bg-gradient-to-r from-green-400 to-green-600 border-2 border-gray-700 rounded-2xl p-7 font-bold shadow-lg shadow-gray-900'>
      <div className='flex justify-between items-center text-2xl'>
        <h3 className='bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 rounded-full text-white'>
          {data.status}
        </h3>
        <h4 className='text-white'>{data.taskDate}</h4>
      </div>
      <div className='mt-2 p-2 flex flex-col gap-5'>
        <h3 className='text-3xl text-yellow-400'>{data.taskTitle}</h3>
        <h5 className='text-xl text-blue-800'>{data.category}</h5>
        <p className='text-[#FAE3D9]'>{data.taskDescription}</p>
      </div>
      <div className='mt-6'>
        <button
          className='w-full py-2 text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border-2 border-blue-400 hover:from-gray-700 hover:to-gray-800 transition-all duration-300'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
