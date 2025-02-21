import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is ",email)
    console.log("password is ",password)

    setEmail('')
    setPassword('')
  }




  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={
                (e) => {
                    submitHandler(e)
                }
              }
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={
                    (e) => {
                        setEmail(e.target.value)
                    } 
                }
                required className=' outline-none bg-transparent border-2 border-emerald-600 font-medium py-2 px-6 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={
                    (e) => {
                        setPassword(e.target.value)
                    } 
                }
                required className=' outline-none bg-transparent border-2 border-emerald-600 font-medium py-2 px-6 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                <button className='mt-5 text-white outline-none hover:bg-emerald-600 bg-emerald-600 font-semibold text-lg py-2 px-8 w-full  rounded-full placeholder:text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login