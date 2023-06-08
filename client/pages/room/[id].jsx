import AuthenticatedUser from "@/components/Auth/AuthenticatedUser";
import RoomModal from "@/components/RoomModal";
import RoomProposalCard from "@/components/RoomProposalCard/RoomProposalCard";
import RoomTaskCard from "@/components/RoomTaskCard/RoomTaskCard";
import {
  DAOROOM_CONTRACT_ADDRESS,
  USERPROFILE_CONTRACT_ADDRESS,
} from "@/constants";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import {
  BsArrowRightSquareFill,
  BsPlusCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePersonRemove } from "react-icons/md";

const daoRoom = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [option, setOption] = useState("tasks");
  const [clickHam, setClickHam] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [isRoomMember, setIsRoomMember] = useState(false);

  const [createProposal, setCreateProposal] = useState({
    address: "",
    desc: "",
  });
  const router = useRouter();
  const address = useAddress();

  const { contract: DAOContract } = useContract(DAOROOM_CONTRACT_ADDRESS);
  const { data: roomData, isLoading: isLoadingRoom } = useContractRead(
    DAOContract,
    "getProjectRoom",
    [router.query.id]
  );

  useEffect(() => {
    if (address) {
      setCreateProposal({
        ...createProposal,
        address: address,
      });
    }
    // check if you are a member of the room
    if (address && roomData) {
      const isMember = roomData.participants.find(
        (participant) => participant.participant === address
      );
      if (isMember) {
        setIsRoomMember(true);
      }
      if (roomData.creator === address) {
        setIsRoomMember(true);
      }
    }
  }, [address, roomData]);

  const {
    contract: useProfileContract,
    isLoading: userProfileContractLoading,
  } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  const { data: currentUserData, isLoading: currentUserLoading } =
    useContractRead(useProfileContract, "getProfileByAddress", [address]);

  console.log("CURRENT USER", currentUserData);

  const { mutateAsync: addProposal } = useContractWrite(
    DAOContract,
    "addProposal"
  );

  const { mutateAsync: leaveOrKickParticipant } = useContractWrite(
    DAOContract,
    "leaveOrKickParticipant"
  );

  const { mutateAsync: completeProjectRoom } = useContractWrite(
    DAOContract,
    "completeProjectRoom"
  );

  console.log("ROOMDATA", roomData);

  const submitNewProposal = async () => {
    if (!createProposal.address || !createProposal.desc) {
      Notify.warning("Please Type your Proposal");
      return;
    }

    try {
      const data = await addProposal({
        args: [
          router.query.id,
          currentUserData.name,
          createProposal.desc,
          createProposal.address,
        ],
      });
      console.info("contract call successs", data);
      Notify.success("Proposal Submitted Successfully");
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Proposal Submission Failed");
    }
  };

  const leaveRoom = async () => {
    try {
      const data = await leaveOrKickParticipant({
        args: [router.query.id, address],
      });
      console.info("contract call successs", data);
      Notify.success("Left Room Successfully");
      router.push("/yourIdeas");
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const kickParticipantFromRoom = async (participantAddress) => {
    console.log("KICK PARTICIPANT", participantAddress);
    try {
      const data = await leaveOrKickParticipant({
        args: [router.query.id, participantAddress],
      });
      console.info("contract call successs", data);
      Notify.success("Kick Participant from Room Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const markProjectAsCompleted = async () => {
    try {
      const data = await completeProjectRoom({ args: [router.query.id] });
      console.info("contract call successs", data);
      Notify.success("Marked Project as Completed Successfully");
      router.push(`/idea/${router.query.id}`);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

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

  const openModal = () => {
    setModalClick(!modalClick);
  };

  if (isLoadingRoom) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 text-xl text-white">
        <AuthenticatedUser />
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }

  if (!isRoomMember) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 text-xl text-white">
        <AuthenticatedUser />
        <div>You are not authorized to access this room.</div>
        <div className="text-sm">
          Please wait for your proposal to get accepted by Idea owner.
        </div>
        <button
          className="px-5 py-2 text-sm text-white bg-pink-600 rounded-md"
          onClick={() => router.push(`/idea/${router.query.id}`)}
        >
          Go Back
        </button>
      </div>
    );
  }
  return (
    <div className="relative container1">
      <RoomModal
        openModal={openModal}
        modalClick={modalClick}
        createProposal={createProposal}
        setCreateProposal={setCreateProposal}
        submitNewProposal={submitNewProposal}
      />
      <div className="navbar">
        <div className="mt-2 mb-5 hidden sm:flex flex-row justify-between items-center w-[100%] mr-5  rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img sm:flex justify-start items-center sm:w-[35%]">
            <AiOutlineLeft
              className="text-[#fff] mt-2 mb-1 text-2xl cursor-pointer"
              onClick={() => router.back()}
            />
            <GiHamburgerMenu
              onClick={changeHam}
              size={25}
              className="mt-1 mr-1 cursor-pointer"
              color="white"
            />
            <p className="text-[#fff] text-2xl">{roomData?.[1]}</p>
          </div>
          <div className="flex items-center">
            <ConnectWallet
              style={{
                transform: "scale(0.8)",
              }}
              theme="light"
              btnTitle="Connect Wallet"
            />
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
        <div className="flex flex-row items-center justify-between w-full m-1 sm:hidden">
          <div className="flex p-3">
            <AiOutlineLeft
              onClick={changeHam}
              className="text-[#fff] mt-2 text-3xl cursor-pointer mr-2"
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
            {/* <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2">
              <Image
                height={26}
                width={26}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div> */}
            <ConnectWallet
              style={{
                transform: "scale(0.8)",
              }}
              theme="light"
              btnTitle="Connect Wallet"
            />

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
          {/* desktop view  */}
          <div className=" roomDesktopView hidden md:flex flex-row w-[95%] m-auto justify-around">
            <div className="flex taskPortion w-[75%] text-white pr-10">
              <div className="heading1 max-w-[25%] min-w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Todo
                </div>
                {roomData?.[9].map(
                  (ele, idx) =>
                    ele?.[6] === "todo" && <RoomTaskCard ele={ele} key={idx} />
                )}
              </div>
              <div className="heading1 max-w-[25%] min-w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  In Progress
                </div>
                <div className="">
                  {" "}
                  {roomData?.[9].map(
                    (ele, idx) =>
                      ele?.[6] === "in_progress" && (
                        <RoomTaskCard ele={ele} key={idx} />
                      )
                  )}
                </div>
              </div>
              <div className="heading1 max-w-[25%] min-w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Completed
                </div>
                <div className="">
                  {" "}
                  {roomData?.[9].map(
                    (ele, idx) =>
                      ele?.[6] === "completed" && (
                        <RoomTaskCard ele={ele} key={idx} />
                      )
                  )}
                </div>
              </div>
              <div className="heading1 max-w-[25%] min-w-[25%] flex-col">
                <div className="p-1 pb-2 border-b-[1px] border-white ">
                  Abondoned
                </div>
                <div className="">
                  {" "}
                  {roomData?.[9].map(
                    (ele, idx) =>
                      ele?.[6] === "abondened" && (
                        <RoomTaskCard ele={ele} key={idx} />
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="proposalPortion flex flex-col w-[30%] bg-[#01002A] p-4">
              <div className="heading4 text-[#06dbee] text-lg font-semibold">
                All Proposals
              </div>
              <div>
                {roomData?.proposals.map((ele, idx) => {
                  if (ele.description) {
                    return <RoomProposalCard key={idx} ele={ele} />;
                  }
                })}
              </div>

              <div className="z-10 flex justify-end mt-2 contibutorBoxPlusIcon">
                <BsPlusCircleFill
                  onClick={openModal}
                  color="white"
                  size="40"
                  className="items-end cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* phone view  */}
          <div className="roomOptions flex m-auto w-[90%] text-[#fff] justify-around md:hidden">
            <div
              className="option1 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634] cursor-pointer"
              onClick={() => {
                setOption("tasks");
              }}
            >
              Tasks
            </div>
            <div
              className="option2 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634] cursor-pointer"
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
                <div className="flex  md:hidden flex-row w-[95%] m-2">
                  <div className="flex w-[100%] carousel text-white taskPortion">
                    <div className="flex-col carousel-item w-[100%] heading1">
                      <div className="p-1 pb-2 text-center border-b-[1px] border-white ">
                        Todo
                      </div>
                      <div className="p-2">
                        {roomData?.[9].map(
                          (ele, idx) =>
                            ele?.[6] === "todo" && (
                              <RoomTaskCard ele={ele} key={idx} />
                            )
                        )}
                      </div>
                    </div>
                    <div className="flex-col carousel-item w-[100%] heading1">
                      <div className="p-1 pb-2 text-center border-b-[1px] border-white ">
                        In Progress
                      </div>
                      <div className="p-2">
                        {" "}
                        {roomData?.[9].map(
                          (ele, idx) =>
                            ele?.[6] === "in_progress" && (
                              <RoomTaskCard ele={ele} key={idx} />
                            )
                        )}
                      </div>
                    </div>
                    <div className="flex-col carousel-item w-[100%] heading1">
                      <div className="p-1 pb-2 text-center border-b-[1px] border-white ">
                        Completed
                      </div>
                      <div className="p-2 ">
                        {" "}
                        {roomData?.[9].map(
                          (ele, idx) =>
                            ele?.[6] === "completed" && (
                              <RoomTaskCard ele={ele} key={idx} />
                            )
                        )}
                      </div>
                    </div>
                    <div className="flex-col carousel-item w-[100%] heading1">
                      <div className="p-1 text-center pb-2 border-b-[1px] border-white ">
                        Abondoned
                      </div>
                      <div className="p-2">
                        {" "}
                        {roomData?.[9].map(
                          (ele, idx) =>
                            ele?.[6] === "abondened" && (
                              <RoomTaskCard ele={ele} key={idx} />
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // <>
              //   <div className="optionName text-[#fff]  text-center">
              //     {taskOption}
              //   </div>
              //   <div className="flex flex-col mt-5 tasksOptions">
              //     <div className="flex flex-row justify-between taskOption">
              //       <div
              //         className="colorBox bg-[#fff] text-[#fff] w-[5%] rounded-r-lg"
              //         onClick={() => {
              //           setTaskOption("To Do");
              //         }}
              //       >
              //         jl
              //       </div>
              //       <div
              //         className="textArea text-[#fff] w-[90%] p-2 text-sm
              //       bg-[rgba(217, 217, 217, 0.13)"
              //       >
              //         <p>
              //           Amet minim mollit non deserunt ullamco est sit aliqua
              //           dolor do amet sint. Velit officia consequat duis enim
              //           velit mollit. Exercitation veniam consequat sunt nostrud
              //           amet.
              //         </p>
              //       </div>
              //     </div>
              //     <div
              //       className="flex flex-row justify-between mt-3 taskOption"
              //       onClick={() => {
              //         setTaskOption("In Progress");
              //       }}
              //     >
              //       <div className="colorBox bg-[#6ab6fc] text-[#6ab6fc] w-[5%] rounded-r-lg">
              //         jl
              //       </div>
              //       <div
              //         className="textArea text-[#fff] w-[90%] p-2 text-sm
              //       bg-[rgba(217, 217, 217, 0.13)"
              //       >
              //         <p>
              //           Amet minim mollit non deserunt ullamco est sit aliqua
              //           dolor do amet sint. Velit officia consequat duis enim
              //           velit mollit. Exercitation veniam consequat sunt nostrud
              //           amet.
              //         </p>
              //       </div>
              //     </div>
              //     <div
              //       className="flex flex-row justify-between mt-3 taskOption"
              //       onClick={() => {
              //         setTaskOption("Completed");
              //       }}
              //     >
              //       <div className="colorBox bg-[#94ffac] text-[#94ffac] w-[5%] rounded-r-lg">
              //         jl
              //       </div>
              //       <div
              //         className="textArea text-[#fff] w-[90%] p-2 text-sm
              //       bg-[rgba(217, 217, 217, 0.13)"
              //       >
              //         <p>
              //           Amet minim mollit non deserunt ullamco est sit aliqua
              //           dolor do amet sint. Velit officia consequat duis enim
              //           velit mollit. Exercitation veniam consequat sunt nostrud
              //           amet.
              //         </p>
              //       </div>
              //     </div>
              //     <div
              //       className="flex flex-row justify-between mt-3 taskOption"
              //       onClick={() => {
              //         setTaskOption("Abondoned");
              //       }}
              //     >
              //       <div className="colorBox bg-[#fe7575] text-[#fe7575] w-[5%] rounded-r-lg">
              //         jl
              //       </div>
              //       <div
              //         className="textArea text-[#fff] w-[90%] p-2 text-sm
              //       bg-[rgba(217, 217, 217, 0.13)"
              //       >
              //         <p>
              //           Amet minim mollit non deserunt ullamco est sit aliqua
              //           dolor do amet sint. Velit officia consequat duis enim
              //           velit mollit. Exercitation veniam consequat sunt nostrud
              //           amet.
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </>
              <>
                <div className="w-full p-4 m-auto proposalList">
                  {roomData?.proposals.map((ele, idx) => {
                    if (ele.description) {
                      return <RoomProposalCard key={idx} ele={ele} />;
                    }
                  })}
                  <div className="z-10 flex justify-end mr-2 contibutorBoxPlusIcon">
                    <BsPlusCircleFill
                      onClick={openModal}
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
          <div className="z-10 w-full h-screen absolute newProposal p-6 top-0 bg-[rgba(0,0,0,0.67)] backdrop-blur-md flex flex-col md:p-6 md:pb-10">
            <div className="flex justify-between w-full p-2">
              <div className="flex items-center">
                {" "}
                <AiOutlineLeft
                  onClick={changeHam}
                  className="text-[#fff] mt-2 mr-2 text-2xl cursor-pointer mb-2"
                />{" "}
                <p className="hidden text-xl text-white sm:block"> Go Back</p>
              </div>
              <div className="flex items-center">
                {/* <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
                  <Image
                    height={20}
                    width={20}
                    src="/images/symbol.png"
                    alt="chain"
                    className="sm:mr-2 "
                  />
                  <p>120.00 CX</p>
                </div> */}
                <ConnectWallet
                  style={{
                    transform: "scale(0.8)",
                  }}
                  theme="light"
                  btnTitle="Connect Wallet"
                />
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
                {roomData?.[1]}
              </div>
              <div className="projectIdeaText text-[#fff] text-sm">
                <p className="mt-4">{roomData?.[2]}</p>
              </div>
              <div className="contributorsBox border-solid border-[1px] border-white p-4 mt-3">
                <div className="heading4 text-[#06dbee] text-xl font-semibold">
                  Contributors
                </div>
                <div className="mt-3 contributorsList">
                  {roomData?.[6]?.map((ele, idx) => {
                    if (ele.name) {
                      return (
                        <div
                          key={idx}
                          className="flex justify-between mt-3 contributor"
                        >
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
                              <p>{ele?.[0].substring(0, 6)}...</p>
                            </div>
                          </div>
                          <div className="threeDotIcon">
                            {address !== roomData?.[0] ? (
                              <BsThreeDotsVertical color="white" size={30} />
                            ) : (
                              <MdOutlinePersonRemove
                                color="white"
                                size={27}
                                className="cursor-pointer"
                                onClick={() =>
                                  kickParticipantFromRoom(ele?.participant)
                                }
                              />
                            )}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="mt-20 leaveAndComplete">
                {address !== roomData?.[0] ? (
                  <div
                    className="leaveButtonContainer text-center bg-[#fff]"
                    onClick={leaveRoom}
                  >
                    <div className="leaveRoomButton flex justify-center bg-[#fff] p-2 w-[95%] cursor-pointer m-auto">
                      <div className="font-bold text-black leaveText">
                        Leave Room
                      </div>
                      <div className="leaveIcon">
                        <BsArrowRightSquareFill size={30} className="pl-3 " />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="completeButtonContainer mt-3 text-center border-solid border-[1px] border-[#05ff00]">
                    <div
                      className="p-2 m-auto cursor-pointer leaveRoomButton"
                      onClick={markProjectAsCompleted}
                    >
                      <div className="leaveText font-semibold text-[#05ff00]">
                        Mark Project as Completed
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="newProposalBox">
              <div className="absolute justify-between hidden p-6 createProposalOption md:flex right-3 bottom-4 ">
                <div className="createProposalText text-[#fff] text-2xl p-2">
                  <p>Create New Proposal</p>
                </div>
                <div className="contibutorBoxPlusIcon">
                  <BsPlusCircleFill
                    onClick={openModal}
                    color="white"
                    size="50"
                    className="cursor-pointer"
                  />
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
