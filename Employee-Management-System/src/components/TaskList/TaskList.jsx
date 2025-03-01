import React from 'react'
import PropTypes from 'prop-types'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks && data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={index} data={elem} />
        }
        if (elem.completedTask) {
          return <CompleteTask key={index} data={elem} />
        }
        if (elem.failedTask) {
          return <FailedTask key={index} data={elem} />
        }
        return null;
      })}
    </div>
  )
}

TaskList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TaskList
