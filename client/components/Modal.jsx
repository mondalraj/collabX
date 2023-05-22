import React from 'react'

const Modal = () => {
  return (
    <div className= ' text-white bg-black bg-opacity-60 w-[100%] h-[80vh] flex flex-col items-center'>
    <div className='flex justify-end w-full px-6 pt-4 text-xl font-semibold'>✕</div>
    <div className=' flex flex-col items-center justify-center w-[70%] text-sm font-semibold'>
        <h1 className='mb-2 text-xl font-semibold'>Create Project Idea</h1>
        <div className='w-full m-2'>
            <p>Project Name</p>
            <input className='w-full py-1 my-1 bg-black border-[0.05rem] rounded-md font-normal text-gray-300' type="text" />
        </div>
        <div className='w-full m-2'>
            <p>Description</p>
            <textarea className='w-full my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' name="" id="" cols="30" rows="6"></textarea>
        </div>
        <div className='w-full m-2'>
            <p>Skillset Required</p>
            <input className='w-full py-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' type="text" />
        </div>
        <div className='w-full m-2'>
           <div className='flex'><p className='pr-1'>Url </p><p className='font-normal text-gray-300'> (optional)</p></div> 
            <input className='w-full py-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300' type="text" />
        </div>
        </div>    
    </div>
  )
}

export default Modal