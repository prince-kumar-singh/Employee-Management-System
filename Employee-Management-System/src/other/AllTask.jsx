import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    
    const authData = useContext(AuthContext)
    console.log(authData)
    console.log(authData.employees)
  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 rounded mt-5 '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between items-center rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name </h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
        <div >
            {authData.employees && authData.employees.map((elem, index) => {
                return (
                    <div key={index} className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded'>
                        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 '>{elem.taskCount.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5'>{elem.taskCount.active}</h5>
                        <h5 className='text-lg font-medium w-1/5'>{elem.taskCount.completedTask}</h5>
                        <h5 className='text-lg font-medium w-1/5'>{elem.taskCount.failed}</h5>
                    </div>
                )
             })}
        </div>
        
    </div>

  )
}

export default AllTask