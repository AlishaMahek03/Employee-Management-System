import React from 'react'

const AcceptTask = ({ data }) => {
  console.log(data)
  return (
    <div className='h-[79%] shrink-0 w-[360px] bg-gradient-to-r from-pink-500 via-red-400 to-red-600 border-2 border-gray-700 rounded-2xl p-7 font-bold shadow-lg shadow-gray-900'>
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
      <div className='flex justify-between mt-6'>
        <button className='bg-gradient-to-r from-green-500 to-green-600 py-2 px-4 text-sm text-white rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300'>
          Mark as Completed
        </button>
        <button className='bg-gradient-to-r from-red-500 to-red-600 py-2 px-4 text-sm text-white rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
