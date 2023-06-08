import Modal from "@/components/Modal";
import Navbar from "@/components/Nav/Navbar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { PROJECTIDEA_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
const ProjectIdeas = () => {
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
      const ideas = await contract?.call("getAllIdeas");

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
      window.location.reload();
    } catch (err) {
      setLoadingCreation(false);
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
    <div className="container1 min-h-[100vh] bg-gradient-to-b sm:bg-gradient-to-r from-[#2A064B] from-50% to-[#030C30] t0-50%">
      <div
        className="listViewUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        <Navbar phonenav={phonenav} openNav={openNav} />
      </div>
      {/* search  */}
      <div className="flex items-center justify-center w-full mb-4 ">
        <Input
          icon="search"
          placeholder="Search by project Ideas or by tags"
          className="sm:w-[40%] w-[70%] m-4 ml-6"
        />
        <AiFillPlusCircle
          size={50}
          color="#E40E82"
          className="mr-4 rounded-full border-4 border-[#ffffff] border-opacity-[0.16]  cursor-pointer "
          onClick={openModal}
        />
      </div>

      {/* Modal */}
      <Modal
        openModal={openModal}
        modalClick={modalClick}
        projectIdea={projectIdea}
        setProjectIdea={setProjectIdea}
        create={create}
        loadingCreation={loadingCreation}
      />

      <div className="relative cardsBackground max-w-[80%] min-w-[80%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
        <div className="z-0 grid grid-cols-1 lg:pl-6 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
          {allIdeas?.map((ele, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              name={ele[1]}
              about={ele[2]}
              skills={ele[4]}
              id={ele[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeas;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]
