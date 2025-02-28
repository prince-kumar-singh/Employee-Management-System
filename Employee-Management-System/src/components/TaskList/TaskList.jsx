import React from 'react'
import PropTypes from 'prop-types'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  )
}

TaskList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TaskList
