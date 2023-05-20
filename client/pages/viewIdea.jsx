import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ViewIdea = () => {
  const [phonenav, setPhonenav] = useState(false);

  const openNav = () => {
    setPhonenav(!phonenav);
  }
  return (
    <div className=' min-h-[100vh] sm:p-10  w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#23094E] from-0% to-black to-100%'>
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
            <li>Profiles</li>
            <li>Ideas</li>
            <li>Showcases</li>
          </ul>
        </div>
        <div className='flex items-center'>
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
        <div className='flex items-center'>
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

          <button onClick={openNav}> <BsThreeDotsVertical color='white' size={30} /></button>
        </div>
      </div>
      {/* search  */}
      <div className='flex items-center w-full mb-4 justify-evenly sm:hidden'>
        <Input icon='search' placeholder='Search by project Ideas or by tags' className='w-[70%] m-4 ml-6' />
        <AiFillPlusCircle size={45} color='#E40E82' className='mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full ' />
      </div>
      {/* opennedNav in phn */}
      {phonenav && <div className='relative w-full' >
        <ul className='absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]'>
          <li className='p-3 border-b-2 border-black '>Profiles</li>
          <li className='p-3 border-b-2 border-black '>Ideas</li>
          <li className='p-3 border-b-2 border-black '>Showcases</li>
        </ul>
      </div>}

      {/* you are part  */}
      <div className='items-center justify-end hidden mx-6 -mb-4 text-white '> <MdCelebration className='mr-2' size={20} />You are part of this project</div>
      {/* entry room  */}
      <div className='flex justify-end mx-6 -mb-4 sm:hidden'>
        <button className='flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl'>Enter Room   <Image
          height={8}
          width={14}
          src="/images/enterArrow.png"
          alt="enter room"
          className="ml-3"
        /> </button>
      </div>

      <div className='flex flex-col sm:flex sm:flex-row text-white m-6 rounded-md  bg-[#01002A] sm:bg-inherit px-6 py-8'>
        <div className='flex flex-col sm:w-[60%] sm:m-4'>
          <h1 className='flex text-2xl '>Project Idea Name    <Image
            height={6}
            width={14}
            src="/images/blockChainSymbol.png"
            alt="blockchain"
            className="ml-4 rotate-12"
          /></h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            <br /><br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='flex flex-col mt-6 sm:w-[40%] sm:m-6 sm:mt-14'>
          {/* you are part  */}
          <div className='items-center hidden mb-6 -mt-10 text-white'> <MdCelebration className='mr-2' size={20} />You are part of this project</div>
          {/* entry room  */}
          <div className='justify-end hidden mb-6 -mt-10 sm:flex'>
            <button className='flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl'>Enter Room   <Image
              height={8}
              width={14}
              src="/images/enterArrow.png"
              alt="enter room"
              className="ml-3"
            /> </button>
          </div>
          <p className='text-[#05EAFA]'>Skills Required</p>
          <div className='grid grid-cols-4 text-xs sm:grid-cols-3 md:grid-cols-4 gap-y-2'>                        <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C++</div>
            <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#C</div>
            <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#JS</div>
            <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div>
            <div className='border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide'>#Java</div></div>
        </div>
      </div>

      <div className='bg-[#0C0634] flex flex-col text-white m-6 rounded-md sm:rounded-xl px-6 py-8 sm:mx-14 sm:my-10 '>
        <div>
          <p className='text-[#05EAFA]'>Your Proposal</p>
          <p className='text-[#cbcbcb]'  >Write a brief description about your proposal.</p>
        </div>
        <div className='flex sm:justify-end justify-center sm:mt-[3rem] mt-[5rem] sm:-mb-3'>
          <button className='bg-[#E40E82] opacity-20 flex items-center justify-between w-fit  rounded-2xl px-3 py-2 font-medium'>Send Proposal <BsFillArrowRightCircleFill size={20} className='ml-2' /></button>
        </div>
      </div>
    </div>
  )
}

export default ViewIdea;