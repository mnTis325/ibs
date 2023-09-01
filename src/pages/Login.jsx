import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
        } = useStateContext();
  return (

    <div className='relative w-full h-screen bg-gray-300'>

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[500px] w-full mx-auto bg-white p-8 rounded-3xl'>
            <h2 className='text-3xl font-bold text-center py-4'>One Health Disease Surveillance Dashboard</h2>

            <div className='flex flex-col mb-4 rounded-xl'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' type="text " />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' type="password" />
            </div>
            <Link to={'/Home'}>
            <button className='w-full py-3 mt-8 bg-green-700 hover:bg-green-900 relative text-white rounded-md'>Sign In</button>
            </Link>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
    </div>


    /*
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        </div>

          
        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Pak One Health Alliance.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div> 
                <Link to ='/Home'>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                </Link>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
    */
  )
}