import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../other/header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

EmployeeDashboard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EmployeeDashboard