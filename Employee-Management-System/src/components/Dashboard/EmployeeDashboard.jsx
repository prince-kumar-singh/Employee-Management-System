import React from 'react'
import Header from '../../other/header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard