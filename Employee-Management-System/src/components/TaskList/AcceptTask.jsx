import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>22 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete the Project</h2>
            <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero tempora quidem itaque ipsa eos pariatur totam tempore veritatis consequuntur?
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Complete</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask