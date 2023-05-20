import React, { useState } from "react";
import Image from "next/image";
import { Input } from 'semantic-ui-react'
import {
  AiOutlineWallet,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineRight,
  AiOutlineSearch
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  TbTriangleFilled,
  TbTriangleInvertedFilled
} from "react-icons/tb";
import Link from "next/link";
const ListView = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const changeYours = () => {
    setShowYours(!showYours);
  };
  const changeOthers = () => {
    setShowOthers(!showOthers);
  };
  const openNav = () => {
    setPhonenav(!phonenav);
  };
  return (
    <div className="container1 h-[100%]">
      <div
        className="listViewUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        {/* nav */}
        <div className="mt-10 mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto  bg-gradient-to-r from-[#030C30] from-50% to-[#43087A] t0-50% rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img">
            <Image
              src="/images/CollabXLogo.png"
              width="140"
              height="140"
              alt="CollabXLogo"
              className="hidden sm:block "
            />
          </div>
          <div className="w-[30%]">
            <ul className="flex justify-between font-medium text-white ">
              <li><Link href="/listView">Profile</Link></li>
              <li><Link href="/projectIdeas">Ideas</Link></li>
              <li>Showcases</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
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
        <div className="flex flex-row items-center justify-between m-5 sm:hidden">
          <div>
            <Image
              height={48}
              width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
          </div>
          <div className="w-[30%] hidden">
            <ul className="flex justify-between font-medium text-white ">
              <li>Profiles</li>
              <li>Ideas</li>
              <li>Showcases</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2">
              <Image
                height={26}
                width={26}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div>

            <button onClick={openNav}>
              {" "}
              <BsThreeDotsVertical color="white" size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className="cardsBackground w-[90%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
      <div className='flex items-center w-full  sm:w-[60%] mb-4 m-auto '>
        <Input icon='search' placeholder='Search Profile' className='w-[90%] m-4 ml-6 p-3' />
        <AiOutlineSearch size={30} color='#fff' className='mr-4 rounded-full ' />
        </div>
        <div className="grid grid-cols-1 gap-8 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
      <div className="profileCard rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-around profileCardUpperSection">
      <div className="w-[20%]">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="h-12 socialIcons">
        <h3 className="text-[#fff] ">Vansh Verma</h3>
        <div className="flex justify-center socialIcons2 sm:justify-between ">
          <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
        </div>
      </div>
      <div className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center w-[25%] sm:w-[20%] flex-col sm:text-2xl"
      >
        <TbTriangleFilled className="text-[#e40e82] m-auto" />
        <h3 className="">120</h3>
        <TbTriangleInvertedFilled className="m-auto" />
      </div>
    </div>
    <div className="m-auto profileCardLowerSection">
      <div className="personDetails flex-col sm:flex sm:flex-row pl-[1rem] pr-[1rem] sm:justify-around">
        <div className="about bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">About</h3>
          <p className="text-[#fff]">
            Amet minim mollit non deserunt ullamco est sit aliqua non
            deserunt ullamco est sit aliqua{" "}
          </p>
        </div>
        <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">Skills</h3>
          <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-1 gap-4 text-[#fff]">
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              #C++
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              Javascript
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              MongoDb
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              SQL
            </div>
          </div>
        </div>
      </div>
      <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
        <h3 className="text-lg text-[#05eafa]">View Profile</h3>
        <AiOutlineRight className="text-[#05eafa] mt-2" />
      </div>
    </div>
  </div>
      
      <div className="profileCard rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-around profileCardUpperSection">
      <div className="w-[20%]">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="h-12 socialIcons">
        <h3 className="text-[#fff] ">Vansh Verma</h3>
        <div className="flex justify-center socialIcons2 sm:justify-between ">
          <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
        </div>
      </div>
      <div className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center w-[25%] sm:w-[20%] flex-col sm:text-2xl"
      >
        <TbTriangleFilled className="text-[#e40e82] m-auto" />
        <h3 className="">120</h3>
        <TbTriangleInvertedFilled className="m-auto" />
      </div>
    </div>
    <div className="m-auto profileCardLowerSection">
      <div className="personDetails flex-col sm:flex sm:flex-row pl-[1rem] pr-[1rem] sm:justify-around">
        <div className="about bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">About</h3>
          <p className="text-[#fff]">
            Amet minim mollit non deserunt ullamco est sit aliqua non
            deserunt ullamco est sit aliqua{" "}
          </p>
        </div>
        <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">Skills</h3>
          <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-1 gap-4 text-[#fff]">
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              #C++
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              Javascript
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              MongoDb
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              SQL
            </div>
          </div>
        </div>
      </div>
      <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
        <h3 className="text-lg text-[#05eafa]">View Profile</h3>
        <AiOutlineRight className="text-[#05eafa] mt-2" />
      </div>
    </div>
  </div>
      <div className="profileCard rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]">
    <div className="flex justify-around profileCardUpperSection">
      <div className="w-[20%]">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="h-12 socialIcons">
        <h3 className="text-[#fff] ">Vansh Verma</h3>
        <div className="flex justify-center socialIcons2 sm:justify-between ">
          <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
          <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
        </div>
      </div>
      <div className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center w-[25%] sm:w-[20%] flex-col sm:text-2xl"
      >
        <TbTriangleFilled className="text-[#e40e82] m-auto" />
        <h3 className="">120</h3>
        <TbTriangleInvertedFilled className="m-auto" />
      </div>
    </div>
    <div className="m-auto profileCardLowerSection">
      <div className="personDetails flex-col sm:flex sm:flex-row pl-[1rem] pr-[1rem] sm:justify-around">
        <div className="about bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">About</h3>
          <p className="text-[#fff]">
            Amet minim mollit non deserunt ullamco est sit aliqua non
            deserunt ullamco est sit aliqua{" "}
          </p>
        </div>
        <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%]">
          <h3 className="text-lg text-[#05eafa]">Skills</h3>
          <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-1 gap-4 text-[#fff]">
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              #C++
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              Javascript
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              MongoDb
            </div>
            <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
              SQL
            </div>
          </div>
        </div>
      </div>
      <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
        <h3 className="text-lg text-[#05eafa]">View Profile</h3>
        <AiOutlineRight className="text-[#05eafa] mt-2" />
      </div>
    </div>
  </div>
  </div>
      </div>
    </div>
  );
};

export default ListView;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]

