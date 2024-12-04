import React, { useState } from "react";

function Login({handleLogin}) {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const SubmitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className="bg-black flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form 
        onSubmit={(e)=>{
          SubmitHandler(e)
        }}
        className="flex flex-col justify-center itmes-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          required
            className="border-2 outline-none bg-transparent border-emerald-600 text-xl text-white py-3 px-5 rounded-full my-3 placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          ></input>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
            className="border-2 outline-none bg-transparent border-emerald-600 text-xl text-white py-3 px-5 rounded-full placeholder:text-gray-400 "
            type="password"
            placeholder="Enter password"
          ></input>
          <button type="submit" className=" mt-5 border-2 outline-none bg-emerald-600 text-xl text-white py-3 px-5 rounded-full my-3">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login 
