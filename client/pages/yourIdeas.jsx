import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {BiChevronRight} from "react-icons/bi"
import {IoMdArrowDropdown} from "react-icons/io"
import {IoMdArrowDropright} from "react-icons/io"
import { BsThreeDotsVertical} from "react-icons/bs";
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link'

const YourIdeas = () => {
  const [showYours,setShowYours]=useState(false);
  const [showOthers,setShowOthers]=useState(false);
  const [phonenav,setPhonenav]=useState(false);
  const changeYours=()=>{
     setShowYours(!showYours);
  }
  const changeOthers=()=>{
    setShowOthers(!showOthers);
  }
  const openNav=()=>{
  setPhonenav(!phonenav);
  }
  return (
    <div
    className=' min-h-[100vh] sm:p-10  w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#23094E] from-0% to-black to-100%' >
       {/* nav */}
        <div className='mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto  bg-gradient-to-r from-[#030C30] from-50% to-[#43087A] t0-50% rounded-full p-2 pl-3'>
        <div className='ml-3 -mt-2 img'>
          <Image
            src="/images/CollabXLogo.png"
            width="140"
            height="140"
            alt="CollabXLogo"
            className="hidden sm:block "
          />
          </div>
          <div className='w-[30%]'>
            <ul className='flex justify-between font-medium text-white '>
            <li><Link href="/listView">Profile</Link></li>
              <li><Link href="/projectIdeas">Ideas</Link></li>
                <li>Showcases</li>
            </ul>
          </div>
          <div  className='flex items-center'>
            <div className='text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7'>
            <Image
            height={20}
            width={20}
              src="/images/symbol.png"
              alt="chain"
              className="mr-2 "
            />
                <p>120.00 CX</p>
            </div>
            <Image
            height={40}
            width={40}
              src="/images/avatar.png"
              alt="avatar"
              className="ml-auto mr-0 "
            />
          </div>
        </div>

        {/* mobile */}
          {/* nav */}
          <div className='flex flex-row items-center justify-between m-5 sm:hidden '>
            <div>
          <Image
            height={48}
            width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
            </div>
          <div className='w-[30%] hidden'>
            <ul className='flex justify-between font-medium text-white '>
                <li>Profiles</li>
                <li>Ideas</li>
                <li>Showcases</li>
            </ul>
          </div>
          <div  className='flex items-center'>
            <div className='text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2'>
            <Image
            height={26}
            width={26}
              src="/images/symbol.png"
              alt="chain"
              className="mr-2 "
            />
                <p>120.00 CX</p>
            </div>
           
          <button onClick={openNav}> <BsThreeDotsVertical color='white' size={30}/></button>
          </div> 
        </div>
     
          {/* search  */}
          <div className='flex items-center w-full mb-4 justify-evenly sm:hidden'>
        <Input icon='search' placeholder='Search by project Ideas or by tags' className='w-[70%] m-4 ml-6' />
        <AiFillPlusCircle size={45} color='#E40E82' className='mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full ' />
        </div>
         {/* opennedNav in phn */}
      {phonenav &&   <div className='relative w-full ' >
        <ul className='absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]'>
                <li className='p-3 border-b-2 border-black '>Profiles</li>
                <li className='p-3 border-b-2 border-black '>Ideas</li>
                <li className='p-3 border-b-2 border-black '>Showcases</li>
            </ul>
        </div>}
        {/* second-section */}
        <div className='block h-full text-white sm:hidden '>
          {/* if  */}
         {showYours && <button onClick={changeYours} className='w-full'><div className='flex items-center justify-between px-5 py-2 rounded-2xl m-4   
          bg-[#01002A] text-lg font-medium'><p>Created by you</p><IoMdArrowDropdown/></div></button> } 
   {/* else */}
  {!showYours && <button onClick={changeYours} className='w-full'><div className='flex items-center justify-between px-5 py-2 rounded-2xl m-4   
          bg-[#01002A] text-lg font-medium'><p>Created by you</p><IoMdArrowDropright/></div></button>}
{/* if  */}
 {/* small  */}
 <div className='sm:w-[90%] min-h-[80%] max-h-fit flex sm:hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-lg'>
          {showYours &&   <div className='sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6'>
                <div className='flex justify-center'>
               <p className=' sm:block hidden mb-6 w-[90%]'>Created by you</p> 
               <AiFillPlusCircle size={40} color='#E40E82' className='sm:block hidden border-4 border-[#ffffff] border-opacity-[0.16]  rounded-full' />
               </div>
               {/* card  */}
               <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
                   {/* card  */}
                   <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
            </div>}
        </div>
         {showOthers && <button onClick={changeOthers} className='w-full'> <div className='flex items-center justify-between px-5 py-2 rounded-2xl m-4  bg-[#01002A]
           text-lg font-medium'><p>You are a part of it</p><IoMdArrowDropdown/></div></button>} 
           {/* else  */}
            {!showOthers &&  <button onClick={changeOthers} className='w-full'> <div className='flex items-center justify-between px-5 py-2 rounded-2xl m-4  bg-[#01002A]
           text-lg font-medium'><p>You are a part of it</p><IoMdArrowDropright/></div> </button>}
            {/* small  */}
        <div className='sm:w-[90%] min-h-[80%] max-h-fit flex sm:hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-lg'>
          {showOthers &&  <div className='sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6'>
               <p className='hidden mb-6 sm:block'> You are a part of it</p>
                 {/* card  */}
                 <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
                 {/* card  */}
                 <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
            </div>}
        </div>
        </div>
        {/* large  */}
        <div className='sm:w-[90%] min-h-[80%] max-h-full sm:flex hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-lg'>
             <div className='sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6'>
                <div className='flex justify-center'>
               <p className=' sm:block hidden mb-6 w-[90%]'>Created by you</p> 
               <AiFillPlusCircle size={40} color='#E40E82' className='sm:block hidden border-4 border-[#ffffff] border-opacity-[0.16]  rounded-full ' />
               </div>
               {/* card  */}
               <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
                   {/* card  */}
                   <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
            </div>
            <div className='sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6'>
               <p className='hidden mb-6 sm:block'> You are a part of it</p>
                 {/* card  */}
                 <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
                 {/* card  */}
                 <div className=' bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8'> 
                <div className='flex justify-between p-2 mx-1'>
                    <p className='text-lg tracking-wider sm:text-2xl'>Project Idea Name</p>
                    <Image
            height={10}
            width={14}
              src="/images/blockChainSymbol.png"
              alt="blockchain"
              className="mb-1 rotate-12"
            />
                </div>
                <div className='flex justify-between mx-1'>
                    <div className='w-[48%] bg-[#01002a] text-xs font-normal p-2 text-start rounded-xl tracking-wider' >Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua ...</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs'>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
                     </div>
                   
                </div>
                <div className='flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2'> View Idea <BiChevronRight color='#05EAFA'/></div>
               </div>
            </div>
        </div>

       
    </div>
  )
}

export default YourIdeas