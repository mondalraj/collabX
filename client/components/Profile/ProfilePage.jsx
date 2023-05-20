import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineWallet,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillPlusCircle,
} from "react-icons/ai";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

const ProfilePage = () => {
  const [progress, setProgress] = useState(25);
  const [section, setSection] = useState("Bio");

  return (
    <div className="container1 h-[100vh] ">
      {/* upper section */}
      <div
        className="profileUpperSection bg-gradient-to-r from-[#36094e] to-[#280e55] pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
       >
        <Image
          src="/images/CollabXLogo.png"
          width="150"
          height="150"
          alt="CollabXLogo"
          className="invisible pt-5 m-auto sm:visible "
        />
        <div className="profileUpperMobile flex sm:hidden justify-between mt-[-3.5rem] pl-[1rem] pr-[1rem] pb-[1rem]">
          <Image
            src="/images/CollabX.png"
            width="30"
            height="30"
            alt="CollabXLogo"
            className="block md:hidden"
          />
          <AiOutlineWallet className="text-[#fff] mt-1 mr-3" />
        </div>
      </div>

      {/* middle section */}
      <div className="profileMiddleSection sm:flex justify-evenly w-[90%] text-center m-auto pt-10">
        <div className="connectWallet flex h-12 mt-[-5rem] sm:mt-0">
          <p
            className="cursor-pointer hidden sm:flex text-[#fff] border-2 border-slate-200 rounded-full p-3 "
            onClick={() => {
              console.log("hello");
            }}
          >
            Connect Wallet &nbsp;
            <AiOutlineWallet className="text-[#fff] mt-1 mr-3" />
          </p>
        </div>

        <div className="avatar flex-col mt-[-4rem] ">
          <div className="w-[50%] sm:w-[90%] m-auto">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="m-auto w-[50%] sm:w-[10%]"
            />
          </div>
          <h3 className="text-[#fff] m-auto">Rajib Mondal</h3>
        </div>

        <div className="h-12 p-2 socialIcons">
          <h3 className="text-[#fff] hidden sm:block">Social Media</h3>
          <div className="flex justify-center socialIcons2 sm:justify-around ">
            <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
            <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
            <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
          </div>
        </div>
      </div>

      {/* bottom section */}

      <div className="profileBottomSection m-auto mt-[0.2rem] sm:mt-[3rem] w-[90%]  ">
        <div className="justify-around hidden sm:flex profileFields">
          <a
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(25),
                setSection("Bio"),
                console.log(section);
            }}
          >
            Bio
          </a>
          <a
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(50),
                setSection("Skills");
            }}
          >
            Skills
          </a>
          <a
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(75),
                setSection("Project");
            }}
          >
            Project Details
          </a>
          <a
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(100),
                setSection("Experience");
            }}
          >
            Experience
          </a>
        </div>
        <progress
          className="hidden sm:block progress progress-secondary w-[90%] mt-2 m-auto"
          value={progress}
          max="100"
        ></progress>
        {/* mobile progress bar */}
        <div className="flex justify-center mt-6 mb-14 sm:hidden ">
          <div className="flex justify-between w-[90%] h-1 bg-white">
            {/* circles */}

            {/* first */}

            {section==="Bio" && (
              <>
                {" "}
                <div className="flex  w-[33%]">
                  <div className="flex w-full">
                    <div className="w-3 h-3 bg-pink-500 rounded-full -mt-[3.5px] "></div>
                    <div className="h-1 w-[50%] bg-pink-500"></div>
                  </div>

                  <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
                </div>
                <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
                <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
              </>
            )}
            {/* second */}
            {section==="Skills"&& (
              <>
                <div className="flex  w-[33%]">
                  <div className="flex w-full">
                    <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                      <div className="w-2 h-2 bg-white rounded-full "></div>
                    </div>
                    <div className="h-1 w-[100%] bg-pink-500"></div>
                  </div>

                  <div className="w-3 h-3 bg-pink-500 rounded-full -mt-[3.5px] "></div>
                </div>

                <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
                <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
              </>
            )}

            {/* third */}

            {section==="Project" && (
              <>
                <div className="flex w-[66%]">
                  <div className="flex  w-[50%]">
                    <div className="flex w-full">
                      <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                        <div className="w-2 h-2 bg-white rounded-full "></div>
                      </div>
                      <div className="h-1 w-[100%] bg-pink-500"></div>
                    </div>
                  </div>

                  <div className="flex  w-[50%]">
                    <div className="flex w-full">
                      <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                        <div className="w-2 h-2 bg-white rounded-full "></div>
                      </div>
                      <div className="h-1 w-[100%] bg-pink-500"></div>
                    </div>

                    <div className="w-3 h-3 bg-pink-500 rounded-full -mt-[3.5px] "></div>
                  </div>
                </div>

                <div className="w-3 h-3 bg-white rounded-full -mt-[3.5px] "></div>
              </>
            )}

            {/* fourth */}

            {section==="Experience" && (
              <>
                <div className="flex w-[100%]">
                  <div className="flex  w-[33%]">
                    <div className="flex w-full">
                      <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                        <div className="w-2 h-2 bg-white rounded-full "></div>
                      </div>
                      <div className="h-1 w-[100%] bg-pink-500"></div>
                    </div>
                  </div>

                  <div className="flex  w-[33%]">
                    <div className="flex w-full">
                      <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                        <div className="w-2 h-2 bg-white rounded-full "></div>
                      </div>
                      <div className="h-1 w-[100%] bg-pink-500"></div>
                    </div>
                  </div>

                  <div className="flex  w-[33%]">
                    <div className="flex w-full">
                      <div className="flex items-center justify-center w-4 h-4 -mt-[5px] -ml-1 bg-pink-500 rounded-full ">
                        <div className="w-2 h-2 bg-white rounded-full "></div>
                      </div>
                      <div className="h-1 w-[100%] bg-pink-500"></div>
                    </div>

                    <div className="w-3 h-3 bg-pink-500 rounded-full -mt-[3.5px] -mr-[5px] "></div>
                  </div>
                </div>
              </>
            )}

            {/* end  */}
          </div>
        </div>

        {section === "Bio" ? (
          <Bio section={section} setSection={setSection} progress={progress} setProgress={setProgress} />
        ) : (
          ""
        )}

        {section === "Skills" ? <Skills setSection={setSection} setProgress={setProgress} /> : ""}

        {section === "Project" ? <Projects setSection={setSection} setProgress={setProgress} /> : ""}

        {section === "Experience" ? <Experience setSection={setSection} setProgress={setProgress} /> : ""}
      </div>
    </div>
  );
};

export default ProfilePage;
