import IdeaCard from "@/components/IdeaCard/IdeaCard";
import Modal from "@/components/Modal";
import Navbar from "@/components/Nav/Navbar";
import { PROJECTIDEA_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

const YourIdeas = () => {
  const [showYours, setShowYours] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [loadingCreation, setLoadingCreation] = useState(false);
  const [projectIdea, setProjectIdea] = useState({
    name: "",
    description: "",
    tags: [],
  });
  const [allIdeas, setAllIdeas] = useState([]);

  const address = useAddress();

  const { contract, isLoading } = useContract(PROJECTIDEA_CONTRACT_ADDRESS);

  useEffect(() => {
    async function getAllIdeas() {
      const ideas = await contract?.call("getIdeasByCreatorAddress", [address]);

      return ideas;
    }

    getAllIdeas()
      .then((ideas) => {
        setAllIdeas(ideas);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [address, isLoading]);
  console.log("ALL IDEAS", allIdeas);

  const { mutateAsync: createIdea } = useContractWrite(contract, "createIdea");

  const create = async () => {
    if (!address) {
      Notify.warning("Please connect your wallet to create idea");
      return;
    }
    setLoadingCreation(true);
    try {
      const data = await createIdea({
        args: [projectIdea.name, projectIdea.description, projectIdea.tags],
      });
      console.info("contract call successs", data);
      setLoadingCreation(false);
      setModalClick(!modalClick);
      window.location.reload();
    } catch (err) {
      setLoadingCreation(false);
      console.error("contract call failure", err);
    }
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
  return (
    <div className=" min-h-[100vh] sm:p-10  w-full bg-gradient-to-b sm:bg-gradient-to-r from-[#2A064B] from-50% to-[#030C30] t0-50%">
      {/* Modal */}
      <Modal
        openModal={openModal}
        modalClick={modalClick}
        projectIdea={projectIdea}
        setProjectIdea={setProjectIdea}
        create={create}
        loadingCreation={loadingCreation}
      />
      {/* Nav  */}
      <Navbar phonenav={phonenav} openNav={openNav} />

      <div className="max-w-screen-xl m-auto text-lg">
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
            className="mr-4 border-4 border-[#ffffff] border-opacity-[0.16] rounded-full cursor-pointer"
          />
        </div>

        {/* second-section */}
        <div className="block h-full text-white sm:hidden ">
          {/* small  */}

          {/* created by you  */}
          <button onClick={changeYours} className="w-full">
            <div
              className="flex items-center justify-between px-5 py-3 rounded-2xl m-4   
          bg-[#01002A] text-xl font-medium"
            >
              <div>Created by you</div>
              {showYours ? (
                <IoMdArrowDropdown size={26} />
              ) : (
                <IoMdArrowDropright size={26} />
              )}
            </div>
          </button>

          <div className="sm:w-[90%] min-h-[80%] max-h-fit flex sm:hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-xl">
            {showYours && (
              <div className="sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6">
                <div className="flex justify-center">
                  <p className=" sm:block hidden mb-6 w-[90%]">
                    Created by you
                  </p>
                  <AiFillPlusCircle
                    size={40}
                    color="#E40E82"
                    className="sm:block hidden border-4 border-[#ffffff] border-opacity-[0.16]  rounded-full"
                  />
                </div>
                {allIdeas?.map((ele, idx) => {
                  if (ele[0] === address) {
                    return (
                      <IdeaCard
                        key={idx}
                        owner={true}
                        member={false}
                        idea={ele}
                        index={idx}
                      />
                    );
                  }
                })}
              </div>
            )}
          </div>

          {/* you are part of it  */}

          <button onClick={changeOthers} className="w-full">
            {" "}
            <div
              className="flex items-center justify-between px-5 py-3 rounded-2xl m-4  bg-[#01002A]
           text-xl font-medium"
            >
              <div>You are a part of it</div>
              {showOthers ? (
                <IoMdArrowDropdown size={26} />
              ) : (
                <IoMdArrowDropright size={26} />
              )}
            </div>
          </button>

          <div className="sm:w-[90%] min-h-[80%] max-h-fit flex sm:hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-xl">
            {showOthers && (
              <div className="sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6">
                <p className="hidden mb-6 sm:block"> You are a part of it</p>
                {allIdeas?.map((ele, idx) => {
                  if (ele[0] !== address) {
                    return (
                      <IdeaCard
                        key={idx}
                        owner={false}
                        member={true}
                        idea={ele}
                        index={idx}
                      />
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        {/* large  */}
        <div className="sm:w-[90%] min-h-[80%] max-h-full sm:flex hidden sm:flex-row flex-col sm:justify-between sm:m-auto mt-10 text-white text-center font-medium text-xl">
          <div className="sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6">
            <div className="flex justify-center">
              <p className=" sm:block hidden mb-6 w-[90%]">Created by you</p>
              <AiFillPlusCircle
                size={40}
                onClick={openModal}
                color="#E40E82"
                className="sm:block hidden border-4 border-[#ffffff] border-opacity-[0.16]  rounded-full cursor-pointer"
              />
            </div>
            {allIdeas?.map((ele, idx) => {
              if (ele?.[0] === address) {
                return (
                  <IdeaCard key={idx} owner={true} member={false} idea={ele} />
                );
              }
            })}
          </div>
          <div className="sm:w-[49%] sm:bg-[#01002a] rounded-2xl p-6">
            <p className="hidden mb-6 sm:block"> You are a part of it</p>

            {allIdeas?.map((ele, idx) => {
              if (ele?.[0] !== address) {
                // here we are checking if the address is not the owner of the idea then he is part of the project, call the component for you are part of it.
                return (
                  <IdeaCard key={idx} owner={false} member={true} idea={ele} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourIdeas;
