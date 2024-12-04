import { useState } from "react";
import { Authcontext } from "../../context/AuthProvider";
import { useContext } from "react";

const Creattask = () => {
  const [UserData,SetUserData] = useContext(Authcontext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setAssignto] = useState('')
  const [category, SetCategory] = useState('')
  const[task,setTask]=useState({})

  const SubmitHandler = (e) => {
    e.preventDefault();

    setTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,completed:false,failed:false})
    const data = UserData
    data.forEach(function(elem){
      // console.log(elem.fi)
      if(assignTo==elem.firstName){
        elem.tasks.push(task)
        elem.taskCount.newTask = elem.taskCount.newTask + 1
      }
    })
    SetUserData(data);
    console.log(data)

    setTaskTitle('')
    setAssignto('')
    settaskDate('')
    SetCategory('')
    settaskDescription('')
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-wrap w-ful items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] mb-4 border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignto(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employ name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">category</h3>
            <input
              value={category}
              onChange={(e) => {
                SetCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">
            Creat Task
          </button>
        </div>
      </form>
    </div>
  );
};
export default Creattask;
