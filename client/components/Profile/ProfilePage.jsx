"use client";

import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractWrite,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlineWallet,
} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import AuthenticatedUser from "../Auth/AuthenticatedUser";
import Bio from "./Bio";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const initialState = {
  name: "",
  bio: "",
  twitterHandle: "",
  phone: "",
  gmail: "",
  skills: [],
  projects: [],
  workExperience: [],
};
const ProfilePage = () => {
  const [progress, setProgress] = useState(25);
  const [section, setSection] = useState("Bio");
  const [modalClick, setModalClick] = useState(false);
  const [modalClickName, setModalClickName] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [userProfileExist, setUserProfileExist] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "",
      description: "",
      duration: "",
      link: "",
      techStack: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: 1,
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const address = useAddress();

  const { contract, isLoading } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  const { mutateAsync: createProfile } = useContractWrite(
    contract,
    "createProfile"
  );

  useEffect(() => {
    async function isProfileAlreadyExist() {
      const profile = await contract?.call("getProfileByAddress", [address]);

      console.log("profile", profile);

      if (!profile) {
        return false;
      }

      if (profile?.name !== "") {
        return true;
      }

      return false;
    }

    isProfileAlreadyExist(address)
      .then((doesProfileExist) => {
        setUserProfileExist(doesProfileExist);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [address, isLoading]);

  const openModal = () => {
    setModalClick(!modalClick);
  };
  const openModalName = () => {
    setModalClickName(!modalClickName);
  };
  const formSubmit = async () => {
    if (!address) {
      Notify.warning("Please connect your wallet to create profile");
      return;
    }

    if (!formData.name) {
      Notify.warning("Please enter your name");
      return;
    }

    if (!formData.gmail || !formData.phone || !formData.twitterHandle) {
      Notify.warning(
        "Please enter your email, phone number and twitter handle"
      );
      return;
    }

    try {
      const data = await createProfile({
        args: [
          formData.name,
          formData.bio,
          formData.gmail,
          formData.phone,
          formData.twitterHandle,
          formData.skills,
          formData.projects.map((project) => ({
            name: project.name,
            description: project.description,
            duration: project.duration,
            link: project.link,
            techStack: project.techStack,
          })),
          formData.workExperience.map((exp) => ({
            companyName: exp.companyName,
            role: exp.role,
            duration: `${exp.startDate} - ${exp.endDate}`,
            description: exp.description,
          })),
        ],
      });
      console.info("contract call successs", data);
      setProjects([
        {
          id: 1,
          name: "",
          description: "",
          duration: "",
          link: "",
          techStack: [],
        },
      ]);
      setExperience([
        {
          id: 1,
          companyName: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ]);
      window.location.href = "/myProfile";
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }

  if (userProfileExist) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
        <div>User Profile Already Exists</div>

        <button className="btn btn-active btn-secondary btn-sm">
          <a href="/myProfile">Go to Profile</a>
        </button>
      </div>
    );
  }
  return (
    <div className="container1 h-[100vh] ">
      <AuthenticatedUser />
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
        {/* <div className="connectWallet flex h-12 mt-[-5rem] sm:mt-0">
          <p
            className="cursor-pointer hidden sm:flex text-[#fff] border-2 border-slate-200 rounded-full p-3 "
            onClick={() => {
              console.log("hello");
            }}
          >
            Connect Wallet &nbsp;
            <AiOutlineWallet className="text-[#fff] mt-1 mr-3" />
          </p>
        </div> */}
        <ConnectWallet theme="light" btnTitle="Connect Wallet" />

        <div className="avatar flex-col mt-[-4rem] ">
          <div className="w-[50%] sm:w-[90%] m-auto">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="m-auto w-[50%] sm:w-[10%]"
            />
          </div>
          <h1 onClick={openModalName} className="mt-2 text-white">
            {formData.name ? formData.name : "Your Name"}
          </h1>
        </div>
        {/* ModalName */}
        {modalClickName && (
          <div className="absolute w-[100%] flex justify-center z-10 ">
            {" "}
            <div className="flex flex-col items-center text-white bg-black bg-opacity-60 h-fit">
              <div
                onClick={openModalName}
                className="flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer"
              >
                ✕
              </div>
              <div className="flex flex-col items-center justify-center text-sm font-semibold  w-[80%]">
                <div className="w-full m-2">
                  <p>Enter your name here</p>
                  <input
                    value={formData.name}
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-1 my-1 bg-black border-[0.05rem] rounded-md font-normal text-gray-300"
                    type="text"
                  />
                </div>

                <div className="flex justify-end w-full m-2 mb-4 ">
                  <button
                    onClick={openModalName}
                    className="bg-[#E40E82] py-1 px-4 rounded-xl font-semibold"
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="h-12 p-2 socialIcons">
          <h3 className="text-[#fff] hidden sm:flex sm:items-center">
            Social Media{" "}
            <MdArrowDropDown
              className="cursor-pointer"
              onClick={openModal}
              size={22}
            />
          </h3>
          <div className="flex justify-center socialIcons2 sm:justify-around ">
            <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
            <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
            <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
            <MdArrowDropDown
              className="cursor-pointer sm:hidden "
              onClick={openModal}
              color="white"
              size={22}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalClick && (
        <div className="absolute w-[100%] flex justify-center z-10 ">
          {" "}
          <div className=" text-white bg-black bg-opacity-60  w-[50%] h-fit flex flex-col items-center">
            <div
              onClick={openModal}
              className="flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer"
            >
              ✕
            </div>
            <div className="flex flex-col items-center justify-center text-sm font-semibold  w-[80%]">
              <div className="w-full m-2">
                <p>Phone Number</p>
                <input
                  value={formData.phone}
                  placeholder="Enter your phone number"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-1 my-1 bg-black border-[0.05rem] rounded-md font-normal text-gray-300"
                  type="text"
                />
              </div>
              <div className="w-full m-2">
                <p>Gmail</p>
                <input
                  value={formData.gmail}
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, gmail: e.target.value })
                  }
                  className="w-full p-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  type="email"
                />
              </div>
              <div className="w-full m-2">
                <div className="flex">
                  <p className="pr-1">Twitter</p>
                </div>
                <input
                  value={formData.twitterHandle}
                  placeholder="Enter your twitter profile link"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      twitterHandle: e.target.value,
                    })
                  }
                  className="w-full p-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  type="text"
                />
              </div>
              <div className="flex justify-end w-full m-2 mb-4 ">
                <button
                  onClick={openModal}
                  className="bg-[#E40E82] py-1 px-4 rounded-xl font-semibold"
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* bottom section */}

      <div className="profileBottomSection m-auto mt-[0.2rem] sm:mt-[3rem] w-[90%]  ">
        <div className="justify-around hidden sm:flex profileFields">
          <button
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(25), setSection("Bio"), console.log(section);
            }}
          >
            Bio
          </button>
          <button
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(50), setSection("Skills");
            }}
          >
            Skills
          </button>
          <button
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(75), setSection("Project");
            }}
          >
            Project Details
          </button>
          <button
            className="text-[#fff] font-semibold cursor-pointer"
            onClick={() => {
              setProgress(100), setSection("Experience");
            }}
          >
            Experience
          </button>
        </div>
        <div className="flex justify-between ">
          <progress
            className="hidden sm:block progress progress-secondary w-[90%] mt-2 m-auto"
            value={progress}
            max="100"
          ></progress>
          {progress === 100 && (
            <button
              onClick={() => formSubmit()}
              className="  text-white font-semibold bg-[#E40E82] hidden sm:flex sm:items-center px-3 py-1 rounded-xl -ml-6 -mt-1"
            >
              Submit{" "}
              <Image
                src="/images/submitIcon.png"
                width="15"
                height="15"
                alt="submit"
                className="mt-1 ml-1"
              />
            </button>
          )}
        </div>
        {/* mobile progress bar */}
        <div className="flex justify-center mt-6 mb-14 sm:hidden ">
          <div className="flex justify-between w-[90%] h-1 bg-white">
            {/* circles */}

            {/* first */}

            {section === "Bio" && (
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
            {section === "Skills" && (
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

            {section === "Project" && (
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

            {section === "Experience" && (
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

        {section === "Bio" && (
          <Bio
            section={section}
            setSection={setSection}
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {section === "Skills" && (
          <Skills
            setSection={setSection}
            setProgress={setProgress}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {section === "Project" && (
          <Projects
            setSection={setSection}
            setProgress={setProgress}
            formData={formData}
            setFormData={setFormData}
            projects={projects}
            setProjects={setProjects}
          />
        )}

        {section === "Experience" && (
          <Experience
            setSection={setSection}
            setProgress={setProgress}
            formData={formData}
            setFormData={setFormData}
            experience={experience}
            setExperience={setExperience}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
