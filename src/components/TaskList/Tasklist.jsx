import React from "react";
import Accepted from "./Accepted";
import NewTask from "./NewTask";
import Failed from "./Failed";
import CompletTask from "./completTask";

const Tasklist = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-auto items-center justify-start gap-5 h-96 py-5 mt-10 px-5"
    >
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <Accepted key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompletTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <Failed key={idx} data={elem}/>
        }
      })}
    </div>
  );
};

export default Tasklist;
