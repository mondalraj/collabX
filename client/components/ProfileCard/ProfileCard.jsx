import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Link from "next/link";
import { Notify } from "notiflix";
import {
  AiFillPhone,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlineRight,
} from "react-icons/ai";
import { TbTriangleFilled } from "react-icons/tb";
const ProfileCard = ({
  address,
  name,
  skills,
  id,
  twit,
  email,
  phn,
  bio,
  upvote,
}) => {
  const { contract } = useContract(USERPROFILE_CONTRACT_ADDRESS);
  const { mutateAsync: upvoteProfile, isLoading } = useContractWrite(
    contract,
    "upvoteProfile"
  );

  const incVote = async () => {
    try {
      const data = await upvoteProfile({ args: [address] });
      console.info("contract call successs", data);

      Notify.success("Upvoted Successfully");
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Upvote Failed");
    }
  };
  return (
    <div
      className="profileCard rounded-lg w-[90%]  mt-[1rem] mb-[2rem] pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]"
    >
      <div className="flex justify-around profileCardUpperSection">
        <div className="w-[20%]">
          <img src="/images/avatar.png" alt="avatar" />
        </div>
        <div className="h-12 socialIcons">
          <h3 className="text-[#fff] ">{name}</h3>
          <div className="flex justify-center socialIcons2 sm:justify-between ">
            <Link href={`mailto:${email}`}>
              {" "}
              <AiOutlineMail className="text-[#fff] text-lg sm:text-2xl mt-1 mr-3 cursor-pointer" />
            </Link>
            <Link href={`tel:+91${phn}`}>
              {" "}
              <AiFillPhone className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3 cursor-pointer" />
            </Link>
            <Link target="_blank" href={`${twit}`}>
              {" "}
              <AiFillTwitterSquare className="text-[#fff] text-lg sm:text-2xl mt-1 mr-3 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="upVoteCount bg-[#01002a] text-[#fff]  rounded-full text-center  flex-col justify-center sm:text-2xl p-3 px-5">
          <TbTriangleFilled
            onClick={incVote}
            className="text-[#e40e82] m-auto -mb-8 cursor-pointer"
          />
          <h3 className="text-2xl">{upvote}</h3>
        </div>
      </div>
      <div className="m-auto mt-3 profileCardLowerSection">
        <div className="personDetails flex-col sm:flex sm:flex-row pl-[1rem] pr-[1rem] sm:justify-around">
          <div className="about bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%] sm:min-h-[33vh] sm:max-h-[33vh] min-h-[15vh] max-h-[15vh] overflow-y-scroll">
            <h3 className="text-lg text-[#05eafa]">About</h3>
            <p className="text-[#fff] text-lg font-light">{bio}</p>
          </div>
          <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem] sm:w-[45%] min-h-[20vh] max-h-[20vh] sm:min-h-[33vh] sm:max-h-[33vh] overflow-y-scroll">
            <h3 className="text-lg text-[#05eafa]">Skills</h3>
            <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-1 gap-4 text-[#fff]">
              {skills?.map((ele) => (
                <div className="sm:w-[90%] p-1 px-2 border-2 border-[#e40e82] bg-[#311138] rounded-3xl">
                  {ele}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="viewProfile bg-[#01002A] ml-[1rem] mr-[1rem] sm:ml-[1.25rem] sm:mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
          <Link href={`profile/${id}`} className="flex justify-between w-full">
            <h3 className="text-lg text-[#05eafa]">View Profile</h3>
            <AiOutlineRight className="text-[#05eafa] mt-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
