import React, { useState } from "react";

const header = (props) => {
  // const [Username,SetUsername] = useState('')
  // if(!data){
  //   SetUsername("Admin")
  // }
  // else{
  //   SetUsername(data.firstName)
  // }
  const logOutUser=()=>{
    localStorage.setItem('loggedInuser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl font-medium">
          Hi <br /><span>Username👋 </span>
        </h1>
        <button onClick={logOutUser}
          className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium"
          type="button"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default header;
