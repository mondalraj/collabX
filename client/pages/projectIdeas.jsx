import Modal from "@/components/Modal";
import Navbar from "@/components/Nav/Navbar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
const ProjectIdeas = () => {
  const [phonenav, setPhonenav] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const [projectIdea, setProjectIdea] = useState({
    name: "",
    description: "",
    tags: [],
  });
  const create = () => {
    console.log(projectIdea);
    setModalClick(!modalClick);
    setProjectIdea({
      name: "",
      description: "",
      tags: [],
    });
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
      />

      <div className="relative cardsBackground w-[90%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
        <div className="z-0 grid grid-cols-1 gap-8 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeas;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]
