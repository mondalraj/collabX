import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import {
  BsArrowRightSquareFill,
  BsPlusCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const daoRoom = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [option, setOption] = useState("tasks");
  const [taskOption, setTaskOption] = useState("To Do");
  const [clickHam, setClickHam] = useState(false);
  const changeHam = () => {
    setClickHam(!clickHam);
  };
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
    <div className="relative container1">
      <div className="navbar">
        <div className="mt-10 mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img sm:flex justify-start items-center sm:w-[35%]">
            <AiOutlineLeft className="text-[#fff] mt-2 text-2xl cursor-pointer" />
            <GiHamburgerMenu
              onClick={changeHam}
              size={25}
              className="mt-1 mr-1"
              color="white"
            />
            <p className="text-[#fff] text-2xl">Project Idea Name</p>
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
          <div className="flex p-3">
            <AiOutlineLeft
              onClick={changeHam}
              className="text-[#fff] mt-2 text-2xl cursor-pointer"
            />
            <Image
              height={48}
              width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
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
      {/* opennedNav in phn */}
      {phonenav && (
        <div className="relative z-10 w-full ">
          <ul className="absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]">
            <Link href="/allProfiles">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">
                Profiles
              </li>
            </Link>
            <Link href="/projectIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">Ideas</li>
            </Link>
            <Link href="/yourIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black">
                Showcases
              </li>
            </Link>
          </ul>
        </div>
      )}
      <div className=" h-fit">
        <div className="relative z-0 min-h-full">
          <div className=" roomDesktopView hidden md:flex flex-row w-[90%] m-auto justify-around">
            <div className="taskPortion w-[50%] flex-[0.6]">
              <div className="headingTasks flex justify-between text-[#fff]">
                <div className="heading1 w-[25%]">Todo</div>
                <div className="heading2 w-[25%]">In Progress</div>
                <div className="heading3 w-[25%]">Completed</div>
                <div className="heading4 w-[25%]">Abondoned</div>
              </div>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "white",
                  height: "5",
                }}
              />
              <div className="tasksBox"></div>
            </div>
            <div className="proposalPortion flex-[0.3] bg-[#01002A] p-6">
              <div className="heading4 text-[#06dbee] text-2xl font-semibold">
                All Proposals
              </div>
              <div className="mt-4 border-2 border-white border-solid proposal">
                <div className="proposalTop flex flex-row text-[#fff] p-3">
                  <div className="proposalLeft w-[20%] ">
                    <Image
                      height={48}
                      width={48}
                      src="/images/avatar.png"
                      alt="avatar"
                      className=""
                    />
                  </div>
                  <div className="pl-3 proposalRight">
                    <div className="proposalRightTop">Rajib Mondal</div>
                    <div className="proposalRightBottom">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit offic Amet minim mollit non
                        deserunt ullamco est sit aliqua{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="proposalOptions flex flex-row border-solid border-2 border-white text-[#fff] ">
                  <div className="option1 border-solid border-[1px] border-white w-[33%] text-center">
                    Yes
                  </div>
                  <div
                    className="option2 border-solid border-[1px] border-white w-[33%]
                        text-center"
                  >
                    No
                  </div>
                  <div
                    className="option3 border-solid border-[1px] border-white w-[34%]
                        text-center"
                  >
                    Abstain
                  </div>
                </div>
              </div>
              <div className="mt-4 border-2 border-white border-solid proposal">
                <div className="proposalTop flex flex-row text-[#fff] p-3">
                  <div className="proposalLeft w-[20%] ">
                    <Image
                      height={48}
                      width={48}
                      src="/images/avatar.png"
                      alt="avatar"
                      className=""
                    />
                  </div>
                  <div className="pl-3 proposalRight">
                    <div className="proposalRightTop">Rajib Mondal</div>
                    <div className="proposalRightBottom">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit offic Amet minim mollit non
                        deserunt ullamco est sit aliqua{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="proposalOptions flex flex-row border-solid border-2 border-white text-[#fff] ">
                  <div className="option1 border-solid border-[1px] border-white w-[33%] text-center">
                    Yes
                  </div>
                  <div
                    className="option2 border-solid border-[1px] border-white w-[33%]
                        text-center"
                  >
                    No
                  </div>
                  <div
                    className="option3 border-solid border-[1px] border-white w-[34%]
                        text-center"
                  >
                    Abstain
                  </div>
                </div>
              </div>
              <div className="mt-4 border-2 border-white border-solid proposal">
                <div className="proposalTop flex flex-row text-[#fff] p-3">
                  <div className="proposalLeft w-[20%] ">
                    <Image
                      height={48}
                      width={48}
                      src="/images/avatar.png"
                      alt="avatar"
                      className=""
                    />
                  </div>
                  <div className="pl-3 proposalRight">
                    <div className="proposalRightTop">Rajib Mondal</div>
                    <div className="proposalRightBottom">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit offic Amet minim mollit non
                        deserunt ullamco est sit aliqua{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="proposalOptions flex flex-row border-solid border-2 border-white text-[#fff] ">
                  <div className="option1 border-solid border-[1px] border-white w-[33%] text-center">
                    Yes
                  </div>
                  <div
                    className="option2 border-solid border-[1px] border-white w-[33%]
                        text-center"
                  >
                    No
                  </div>
                  <div
                    className="option3 border-solid border-[1px] border-white w-[34%]
                        text-center"
                  >
                    Abstain
                  </div>
                </div>
              </div>
              <div className="contibutorBoxPlusIcon w-[10%] absolute right-3 z-10">
                <BsPlusCircleFill
                  color="white"
                  size="50"
                  className="items-end"
                />
              </div>
            </div>
          </div>

          <div className="roomOptions flex m-auto w-[90%] text-[#fff] justify-around md:hidden">
            <div
              className="option1 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
              onClick={() => {
                setOption("tasks");
              }}
            >
              Tasks
            </div>
            <div
              className="option2 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
              onClick={() => {
                setOption("proposal");
              }}
            >
              All Proposals
            </div>
          </div>
          <div className="mobileViewRoom md:hidden">
            {option === "tasks" ? (
              <>
                <div className="optionName text-[#fff]  text-center">
                  {taskOption}
                </div>
                <div className="flex flex-col mt-5 tasksOptions">
                  <div className="flex flex-row justify-between taskOption">
                    <div
                      className="colorBox bg-[#fff] text-[#fff] w-[5%] rounded-r-lg"
                      onClick={() => {
                        setTaskOption("To Do");
                      }}
                    >
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("In Progress");
                    }}
                  >
                    <div className="colorBox bg-[#6ab6fc] text-[#6ab6fc] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("Completed");
                    }}
                  >
                    <div className="colorBox bg-[#94ffac] text-[#94ffac] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-between mt-3 taskOption"
                    onClick={() => {
                      setTaskOption("Abondoned");
                    }}
                  >
                    <div className="colorBox bg-[#fe7575] text-[#fe7575] w-[5%] rounded-r-lg">
                      jl
                    </div>
                    <div
                      className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)"
                    >
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="proposalList w-[90%] m-auto">
                  <div className="border-2 border-white border-solid proposal">
                    <div className="proposalTop flex flex-row text-[#fff] p-3">
                      <div className="proposalLeft w-[20%] ">
                        <Image
                          height={48}
                          width={48}
                          src="/images/avatar.png"
                          alt="avatar"
                          className=""
                        />
                      </div>
                      <div className="pl-3 proposalRight">
                        <div className="proposalRightTop">Rajib Mondal</div>
                        <div className="proposalRightBottom">
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit offic Amet minim
                            mollit non deserunt ullamco est sit aliqua{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="proposalOptions flex flex-row border-solid border-2 border-white text-[#fff] ">
                      <div className="option1 border-solid border-[1px] border-white w-[33%] text-center">
                        Yes
                      </div>
                      <div
                        className="option2 border-solid border-[1px] border-white w-[33%]
                        text-center"
                      >
                        No
                      </div>
                      <div
                        className="option3 border-solid border-[1px] border-white w-[34%]
                        text-center"
                      >
                        Abstain
                      </div>
                    </div>
                  </div>
                  <div className="contibutorBoxPlusIcon w-[10%] absolute right-3 z-10">
                    <BsPlusCircleFill
                      color="white"
                      size="50"
                      className="items-end"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* go back section  */}

        {clickHam && (
          <div className="z-10 h-screen absolute newProposal p-6 top-0 bg-[rgba(0,0,0,0.67)] backdrop-blur-md flex flex-col md:p-10">
            <div className="flex justify-between w-full p-2">
              <div className="flex items-center">
                {" "}
                <AiOutlineLeft
                  onClick={changeHam}
                  className="text-[#fff] mt-2 mr-2 text-2xl cursor-pointer"
                />{" "}
                <p className="text-xl text-white"> Go Back</p>
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
            <div className="projectIdeaDetails md:w-[20%]">
              <div className="heading4 text-[#06dbee] text-xl font-semibold">
                Project Idea Name
              </div>
              <div className="projectIdeaText text-[#fff] text-sm">
                <p className="mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
              <div className="contributorsBox border-solid border-[1px] border-white p-4 mt-3">
                <div className="heading4 text-[#06dbee] text-xl font-semibold">
                  Contributors
                </div>
                <div className="mt-3 contributorsList">
                  <div className="flex justify-between mt-3 contributor">
                    <div className="flex contributorDetails">
                      <div className="contributorImage w-[20%]">
                        <Image
                          height={48}
                          width={48}
                          src="/images/avatar.png"
                          alt="avatar"
                          className=""
                        />
                      </div>
                      <div className="contributorName text-[#fff] pl-3">
                        <p>Jack Sparrow</p>
                      </div>
                    </div>
                    <div className="threeDotIcon">
                      <BsThreeDotsVertical color="white" size={30} />
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 contributor">
                    <div className="flex contributorDetails">
                      <div className="contributorImage w-[20%]">
                        <Image
                          height={48}
                          width={48}
                          src="/images/avatar.png"
                          alt="avatar"
                          className=""
                        />
                      </div>
                      <div className="contributorName text-[#fff] pl-3">
                        <p>Jack Sparrow</p>
                      </div>
                    </div>
                    <div className="threeDotIcon">
                      <BsThreeDotsVertical color="white" size={30} />
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 contributor">
                    <div className="flex contributorDetails">
                      <div className="contributorImage w-[20%]">
                        <Image
                          height={48}
                          width={48}
                          src="/images/avatar.png"
                          alt="avatar"
                          className=""
                        />
                      </div>
                      <div className="contributorName text-[#fff] pl-3">
                        <p>Jack Sparrow</p>
                      </div>
                    </div>
                    <div className="threeDotIcon">
                      <BsThreeDotsVertical color="white" size={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="contibutorBoxPlusIcon absolute right-4 mt-[-10px] md:hidden">
                <BsPlusCircleFill color="white" size="50" />
              </div>

              <div className="mt-20 leaveAndComplete">
                <div className="leaveButtonContainer text-center bg-[#fff]">
                  <div className="leaveRoomButton flex bg-[#fff] p-2 w-[45%] m-auto">
                    <div className="font-bold leaveText">Leave Room</div>
                    <div className="leaveIcon">
                      <BsArrowRightSquareFill size={30} className="pl-3 " />
                    </div>
                  </div>
                </div>
                <div className="completeButtonContainer mt-3 text-center border-solid border-[1px] border-[#05ff00]">
                  <div className="p-2 m-auto leaveRoomButton">
                    <div className="leaveText font-semibold text-[#05ff00]">
                      Mark Project as Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newProposalBox">
              <div className="absolute justify-between hidden p-6 createProposalOption md:flex right-3 bottom-4 ">
                <div className="createProposalText text-[#fff] text-2xl p-2">
                  <p>Create New Proposal</p>
                </div>
                <div className="contibutorBoxPlusIcon">
                  <BsPlusCircleFill color="white" size="50" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default daoRoom;
