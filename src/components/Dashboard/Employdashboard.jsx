import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'
function Employdashboard(props) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumber data={props.data}/>
    <Tasklist data={props.data}/>
    </div>
  )
}

export default Employdashboard
