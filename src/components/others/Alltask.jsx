import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const Alltask = () => {

  const [UserData,SetUserData] = useContext(Authcontext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
       <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded '>
        <h2 className='text-lg front-medium W-1/5'>Employee Name</h2>
        <h3 className='text-lg front-medium W-1/5'>New Task</h3>
        <h5 className='text-lg front-medium W-1/5'>Active Task</h5>
        <h5 className='text-lg front-medium W-1/5'>Completed Task</h5>
        <h5 className='text-lg front-medium W-1/5'>Failed Task</h5>
      </div>
      <div className=''>
      {UserData.map((elem,idx)=>{
        return <div key={idx} className=' border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded '>
        <h2  className='text-lg front-medium W-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg front-medium W-1/5 text-blue-400'>{elem.taskCount.newTask}</h3>
        <h5 className='text-lg front-medium W-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
        <h5 className='text-lg front-medium W-1/5 text--600'>{elem.taskCount.completed}</h5>
        <h5 className='text-lg front-medium W-1/5 text-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })} 
    </div>
    </div>
  )
}

export default Alltask

