import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillLinkedin, AiFillPlusCircle, AiFillTwitterSquare, AiOutlineMail, AiOutlineRight } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link';
import {HiCheckCircle} from "react-icons/hi"
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

const ViewIdea = () => {
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick,setModalClick]=useState(false)
  const openNav = () => {
    setPhonenav(!phonenav);
  }
  const openModal=()=>{
    setModalClick(!modalClick)
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
          <li ><Link className="text-white" href="/listView" >Profile</Link></li>
              <li ><Link className="text-white" href="/projectIdeas">Ideas</Link></li>
              <li ><Link className="text-white" href="/yourIdeas">Showcases</Link></li>
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
        <AiFillPlusCircle size={45} color='#E40E82' onClick={openModal} className='mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full ' />
      </div>
      {/* opennedNav in phn */}
      {phonenav && <div className='relative z-10 w-full' >
        <ul className='absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]'>
        <Link href="/listView"> <li className='p-3 text-white border-b-2 border-black '>Profiles</li></Link>
               <Link href="/projectIdeas"> <li className='p-3 text-white border-b-2 border-black '>Ideas</li></Link>
               <Link href="/yourIdeas">  <li className='p-3 text-white border-b-2 border-black'>Showcases</li></Link>
        </ul>
      </div>}

          {/* Modal */}
          {modalClick && <div className="absolute z-10 w-[97%]">   <div className= ' text-white bg-black bg-opacity-60 w-[100%] h-[80vh] flex flex-col items-center'>
    <div onClick={openModal} className='flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer'>✕</div>
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
        <div className='flex justify-end w-full m-2 mb-4 '><button className="bg-[#E40E82] py-1 px-4 rounded-xl font-semibold">CREATE</button></div>
        </div>    
    </div></div> }

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
          <h1 className='flex text-2xl '>Project Idea Name <Image
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
          <p className='text-[#05EAFA]'>List of Proposals</p>
          <div className="grid grid-cols-1 gap-4 mx-6 cardsCollection sm:grid-cols-2 lg:grid-cols-3">

            {/* card  */}
      <div className="profileCard h-fit rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-between m-3 profileCardUpperSection">
        <div className='flex justify-start'>
      <div className="w-[20%] mr-3">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className=" socialIcons">
        <h3 className="text-[#fff] mb-0 text-base ">Vansh Verma</h3>
        <div className="flex justify-start ">
          <AiOutlineMail size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillLinkedin size={18} className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillTwitterSquare size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
        </div>
      </div>
      </div>
      <div><HiCheckCircle size={25} color='#06DBEE'/></div>
    </div>
    <div className='m-4'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.


    </div>
  </div>
      
           {/* card  */}
           <div className="profileCard h-fit rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-between m-3 profileCardUpperSection">
        <div className='flex justify-start'>
      <div className="w-[20%] mr-3">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className=" socialIcons">
        <h3 className="text-[#fff] mb-0 text-base ">Vansh Verma</h3>
        <div className="flex justify-start ">
          <AiOutlineMail size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillLinkedin size={18} className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillTwitterSquare size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
        </div>
      </div>
      </div>
      <div><HiCheckCircle size={25} color='#06DBEE'/></div>
    </div>
    <div className='m-4'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.


    </div>
  </div>
          {/* card  */}
          <div className="profileCard h-fit rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-between m-3 profileCardUpperSection">
        <div className='flex justify-start'>
      <div className="w-[20%] mr-3">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className=" socialIcons">
        <h3 className="text-[#fff] mb-0 text-base ">Vansh Verma</h3>
        <div className="flex justify-start ">
          <AiOutlineMail size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillLinkedin size={18} className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillTwitterSquare size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
        </div>
      </div>
      </div>
      <div><HiCheckCircle size={25} color='#06DBEE'/></div>
    </div>
    <div className='m-4'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.


    </div>
  </div>
          {/* card  */}
          <div className="profileCard h-fit rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-between m-3 profileCardUpperSection">
        <div className='flex justify-start'>
      <div className="w-[20%] mr-3">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className=" socialIcons">
        <h3 className="text-[#fff] mb-0 text-base ">Vansh Verma</h3>
        <div className="flex justify-start ">
          <AiOutlineMail size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillLinkedin size={18} className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-1" />
          <AiFillTwitterSquare size={18} className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1" />
        </div>
      </div>
      </div>
      <div><HiCheckCircle size={25} color='#06DBEE'/></div>
    </div>
    <div className='m-4'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.


    </div>
  </div>
  </div>
        </div>
      
      </div>
    </div>
  )
}

export default ViewIdea;