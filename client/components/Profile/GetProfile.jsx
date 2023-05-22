import Image from 'next/image'
import React,{useState} from 'react'
import { AiOutlineWallet , AiOutlineMail , AiFillLinkedin , AiFillTwitterSquare ,AiFillPlusCircle } from 'react-icons/ai'
import {IoIosShareAlt} from "react-icons/io"


const GetProfile = () => {
    const[progress,setProgress] = useState(25);
    const[section,setSection] = useState("Bio");
    const [bio,setBio]=useState(true)
    const [skills,setSkills]=useState(false)
    const [project,setProject]=useState(false)
    const [experience,setExperience]=useState(false)

     
    return (
    <div className='container1 bg-gradient-to-r from-[#2A064B] from-50% to-[#030C30] t0-50%'>
        {/* upper section */}
        <div className="profileUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]" style={{background: "linear-gradient(171deg, rgba(0, 0, 0, 0.1352) 57.31%, rgba(228, 14, 130, 0.1248) 95.07%)"}}>
        <Image src="/images/CollabXLogo.png" width="150" height="150" alt="CollabXLogo"
         className='invisible pt-5 m-auto sm:visible '/>
         <div className="profileUpperMobile flex sm:hidden justify-between mt-[-3.5rem] pl-[1rem] pr-[1rem] pb-[1rem]">
         <Image src="/images/CollabX.png" width="30" height="30" alt="CollabXLogo" className='block md:hidden'/>
         <AiOutlineWallet className='text-[#fff] mt-1 mr-3'/>
         </div>
       
        </div>

        {/* middle section */}
        <div className="profileMiddleSection w-[90%]  pt-10 
        mt-[-2rem] sm:pl-[3rem]">
            {/* <div className="connectWallet flex h-12 mt-[-5rem] sm:mt-0" >
                <p className='cursor-pointer hidden sm:flex text-[#fff] border-2 border-slate-200 rounded-full p-3 ' onClick={()=>{console.log("hello");}}>
                    Connect Wallet &nbsp;
                    <AiOutlineWallet className='text-[#fff] mt-1 mr-3'/>
                </p>      
            </div> */}

            <div className="avatar flex-col mt-[-4rem] ">
            <div className='w-[50%] sm:w-[90%] m-auto'>
            <img src="/images/avatar.png"  alt="avatar" className='m-auto w-[50%] sm:w-[10%]'/>
            </div>
            <h3 className='text-[#fff] m-auto'>Rajib Mondal</h3>
            </div>
            
            <div className="h-12 p-2 socialIcons sm:pl-[8px]">
            <h3 className='text-[#fff] pl-[5px] sm:pl-[1px]'>Social Media</h3>
            <div className="flex  socialIcons2  pl-[3px] sm:pl-[1px]">
            <AiOutlineMail className='text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3 cursor-pointer'/>
            <AiFillLinkedin className='text-[#fff]  text-lg sm:text-2xl mt-1 mr-3 cursor-pointer'/>
            <AiFillTwitterSquare className='text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3 cursor-pointer'/>
            <button class="inline-flex items-center rounded-3xl bg-[#E40E82] px-2 py-1  text-xs text-white hover:bg-indigo-500">
                Share Profile
                <IoIosShareAlt size={17} className='ml-1'/>
            </button>  
            </div>
            </div>
        </div>

        {/* bottom section */}
        <div className='flex flex-col items-center w-full '>
            {/* bio and skills  */}

            <div className="bioandSkills mt-[2rem] flex-col sm:flex sm:flex-row justify-between sm:px-[1rem] w-[90%] sm:w-[80%] sm:m-auto sm:mt-[4rem]">
                <div className="bioDetails projectDetails w-full sm:w-[47%] bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4 p-3">
                    <h3 className='font-semibold'>Bio</h3>
                    <p className='mt-[1rem]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="bioDetails projectDetails w-full sm:w-[47%]   bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4 p-3 mt-[1rem] sm:mt-[0]">
                    <h3 className='font-semibold'>Skills</h3>
                    <div className='mt-[1rem] grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                        <div className='w-full p-1 px-2 text-white border-2 border-white rounded-3xl'>#C++</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl text-[#fff]'>#JavaScript</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl text-[#fff]'>#MongoDB</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl text-[#fff]'>#Docker</div>
                    </div>
                </div>
            </div>

           {/* experience             */}
            <div className="Experience history mt-[2rem]  sm:px-[1rem] justify-around w-[90%] sm:w-[80%] sm:m-auto sm:mt-[2rem]">
                <div className="bioDetails projectDetails w-full sm:w-[100%] bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4 ">
                   <div className='pt-3 pl-3 font-semibold'>
                    Employment History
                    </div>
                    <div className="expDetails">
                        <div className='border-l-4 border-l-[#FF369B] pl-3 pr-3'>
                        <div className="flex justify-between mt-8 part1">
                            <div className="part1_left">
                                <h3 className='text-lg font-semibold'>Title Name</h3>
                                <h5 className='font-semibold'>Company Name, Dec 2019-Dec 2020</h5>
                                <div className="block font-semibold sm:hidden part1_right">
                                Maharashtra,India
                            </div>
                            </div>
                            <div className="hidden font-semibold sm:block part1_right">
                                Maharashtra,India
                            </div>
                        </div>
                        <div className="mt-5 part2">
                            <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
                        </div>
                        </div>
                        <div className='border-l-4 border-l-[#FF369B] pl-3 pr-3'>
                        <div className="flex justify-between mt-8 part1">
                            <div className="part1_left">
                                <h3 className='text-lg font-semibold'>Title Name</h3>
                                <h5 className='font-semibold'>Company Name, Dec 2019-Dec 2020</h5>
                                <div className="block font-semibold sm:hidden part1_right">
                                Maharashtra,India
                            </div>
                            </div>
                            <div className="hidden font-semibold sm:block part1_right">
                                Maharashtra,India
                            </div>
                        </div>
                        <div className="mt-5 part2">
                            <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
 
 {/* projects */}
 <div className="Experience history mt-[2rem] sm:px-[1rem] justify-around w-[90%] sm:w-[80%] sm:m-auto sm:mt-[2rem] mb-[2rem] sm:mb-[2rem]">
                <div className="bioDetails projectDetails w-full sm:w-[100%] bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4  ">
                    <div className='pt-3 pl-3 font-semibold'>
                    Project Details
                    </div>
                    <div className="expDetails border-l-4 border-l-[#FF369B] pl-3 pr-3">
                        <div className="flex justify-between mt-8 part1">
                            <div className="part1_left">
                                <h3 className='text-lg font-semibold'>Project Name</h3>
                                <div className="block font-semibold sm:hidden part1_right">
                                Dec 2020 - March 2021 </div>
                                <h5 className='font-semibold'>Mongo DB, Flutter, Docker</h5>
                            </div>
                            <div className="hidden font-semibold sm:block part1_right">
                                Dec 2020 - March 2021 </div>

                        </div>
                        <div className="mt-5 part2">
                            <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
                        </div>
                     
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default GetProfile