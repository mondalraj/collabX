import Modal from "@/components/Modal";
import Navbar from "@/components/Nav/Navbar";
import ProposalCard from "@/components/ProposalCard/ProposalCard";
import {
  PROJECTIDEA_CONTRACT_ADDRESS,
  USERPROFILE_CONTRACT_ADDRESS,
} from "@/constants";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

const IndividualIdea = () => {
  const [owner, setOwner] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [room, setRoom] = useState(false);
  const [proposal, setProposal] = useState(true);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [desc, setDesc] = useState("");
  const [projectIdea, setProjectIdea] = useState({
    name: "",
    description: "",
    tags: [],
  });
  const router = useRouter();
  const address = useAddress();

  console.log("OWNER", owner, "PROPOSAL", proposal, "Room", room);

  const { contract, isLoading: isLoadingContract } = useContract(
    PROJECTIDEA_CONTRACT_ADDRESS
  );

  const {
    contract: useProfileContract,
    isLoading: userProfileContractLoading,
  } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  const { data: currentUserData, isLoading: currentUserLoading } =
    useContractRead(useProfileContract, "getProfileByAddress", [address]);

  console.log("CURRENT USER", currentUserData);

  const { data, isLoading } = useContractRead(contract, "getIdea", [
    router.query.id,
  ]);

  const { mutateAsync: createProposal, isLoading: isLoadingSubmitProposal } =
    useContractWrite(contract, "submitProposal");

  console.log("DATA", data);

  useEffect(() => {
    if (data && address) {
      if (data[0] === address) {
        setOwner(true);
      } else {
        const proposal = data[5].find((proposal) => proposal[0] === address);
        if (!proposal) {
          setProposal(false);
        } else {
          setDesc(proposal[1]);
          setProposalAccepted(proposal[4]);
        }
      }
    }
  }, [data, address]);

  const create = () => {
    console.log(projectIdea);
    setModalClick(!modalClick);
    setProjectIdea({
      name: "",
      description: "",
      tags: [],
    });
  };

  const submitProposal = async () => {
    if (desc.length === 0) {
      Notify.warning("Please Type your Proposal");
      return;
    }

    try {
      const data = await createProposal({
        args: [router.query.id, currentUserData.name, desc],
      });
      console.info("contract call successs", data);
      setProposal((prev) => !prev);
      Notify.success("Proposal Submitted Successfully");
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const openNav = () => {
    setPhonenav(!phonenav);
  };
  const openModal = () => {
    setModalClick(!modalClick);
  };
  return (
    <div className=" min-h-[100vh] sm:p-10  w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#23094E] from-0% to-black to-100%">
      {/* Nav  */}
      <Navbar phonenav={phonenav} openNav={openNav} />
      {/* search  */}
      <div className="flex items-center w-full mb-4 justify-evenly sm:hidden">
        <Input
          icon="search"
          placeholder="Search by project Ideas or by tags"
          className="w-[70%] m-4 ml-6"
        />
        <AiFillPlusCircle
          size={45}
          color="#E40E82"
          onClick={openModal}
          className="mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full "
        />
      </div>

      {/* Modal */}
      <Modal
        openModal={openModal}
        modalClick={modalClick}
        projectIdea={projectIdea}
        setProjectIdea={setProjectIdea}
        create={create}
      />
      <div className="flex justify-end mt-4 mb-6 mr-4">
        {/* owner  */}
        {owner ? (
          room ? (
            <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
              Enter Room{" "}
              <Image
                height={8}
                width={14}
                src="/images/enterArrow.png"
                alt="enter room"
                className="ml-3"
              />{" "}
            </button>
          ) : (
            <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
              Create Room{" "}
              <Image
                height={8}
                width={14}
                src="/images/plus.png"
                alt="enter room"
                className="ml-3"
              />{" "}
            </button>
          )
        ) : (
          // user and proposal sent
          proposal &&
          proposalAccepted &&
          (!room ? (
            // part of it
            <div className="flex items-center justify-end mx-6 -mb-4 text-white">
              {" "}
              <MdCelebration className="mr-2" size={20} />
              You are part of this project.
              <br /> Please wait for the owner to create a room.
            </div>
          ) : (
            // enter room
            <div className="flex justify-end mx-6 mb-1 mr-4">
              <button className="flex items-center bg-white text-[#0D0B37] font-medium p-2 rounded-xl">
                Enter Room{" "}
                <Image
                  height={8}
                  width={14}
                  src="/images/enterArrow.png"
                  alt="enter room"
                  className="ml-3"
                />{" "}
              </button>
            </div>
          ))
        )}
      </div>
      <div className="max-w-screen-xl m-auto text-lg">
        <div className="flex flex-col sm:flex sm:flex-row text-white m-6 rounded-md  bg-[#01002A] sm:bg-inherit px-6 py-8">
          <div className="flex flex-col sm:w-[60%] sm:m-4">
            <h1 className="flex text-2xl ">
              {data?.[1]}
              <Image
                height={6}
                width={14}
                src="/images/blockChainSymbol.png"
                alt="blockchain"
                className="ml-4 rotate-12"
              />
            </h1>
            <p>{data?.[2]}</p>
          </div>
          <div className="flex flex-col mt-6 sm:w-[40%] sm:m-6 sm:mt-14">
            <p className="text-[#05EAFA]">Skills Required</p>
            <div className="grid grid-cols-4 text-xs sm:grid-cols-3 md:grid-cols-4 gap-y-2">
              {data?.[4]?.map((ele) => (
                <div className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide">
                  {ele}
                </div>
              ))}
            </div>
          </div>
        </div>

        {owner ? (
          //Accept Proposals
          <div className="bg-[#0C0634] flex flex-col text-white m-6 rounded-md sm:rounded-xl px-6 py-8 sm:mx-14 sm:my-10 ">
            <div>
              <p className="text-[#05EAFA]">List of Proposals</p>
              <div className="grid grid-cols-1 gap-4 mx-6 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
                {data?.[5]?.map((ele, idx) => (
                  <ProposalCard key={idx} prop={ele} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          //Send Proposal
          <div className="bg-[#0C0634] flex flex-col text-white m-6 rounded-md sm:rounded-xl px-6 py-8 sm:mx-14 sm:my-10 ">
            <div>
              <p className="text-[#05EAFA]">Your Proposal</p>
              <textarea
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
                name=""
                id=""
                cols="30"
                rows="4"
                className="w-full outline-none bg-inherit "
                placeholder="Type your proposal here..."
                disabled={proposal}
              ></textarea>
            </div>
            <div className="flex sm:justify-end justify-center sm:mt-[2rem] mt-[5rem] sm:-mb-3">
              {proposal ? (
                <button
                  className="bg-[#E40E82] opacity-20 flex items-center justify-between w-fit  rounded-2xl px-3 py-2 font-medium"
                  disabled
                >
                  Send Proposal{" "}
                  <BsFillArrowRightCircleFill size={20} className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={submitProposal}
                  className="bg-[#E40E82] flex items-center justify-between w-fit  rounded-2xl px-3 py-2 font-medium"
                >
                  Send Proposal{" "}
                  <BsFillArrowRightCircleFill size={20} className="ml-2" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualIdea;
