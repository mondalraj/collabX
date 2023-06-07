import Image from "next/image";
import { useState } from "react";

const RoomTaskCard = ({ ele }) => {
  const [markedCompleted, setMarkedCompleted] = useState(false);
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const yesVote = () => {
    setYes(yes + 1);
  };
  const noVote = () => {
    setNo(no + 1);
  };
  return (
    <>
      {/* todo  */}
      {ele?.[6] === "todo" && (
        <div className="p-2 mx-1 mt-2 bg-white rounded-lg">
          <div className="proposalTop flex flex-row text-[#000] p-3 bg-white rounded-lg ">
            <div className="proposalLeft w-[20%] ">
              <Image
                height={30}
                width={30}
                src="/images/avatar.png"
                alt="avatar"
                className=""
              />
            </div>
            <div className="pl-3 proposalRight">
              <div className="text-sm font-medium proposalRightTop">
                {ele?.[2]}
              </div>
              <div className="text-xs proposalRightBottom">
                <p>{ele?.[3].substring(0, 15)}...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]">
              Assign it to yourself
            </button>
          </div>
        </div>
      )}
      {/* progress  */}
      {ele?.[6] === "in_progress" && (
        <div className="p-2 mt-2 mx-1 bg-[#A9D6FF] rounded-lg">
          <div className="proposalTop flex flex-row text-[#000] p-3 rounded-lg ">
            <div className="proposalLeft w-[20%] ">
              <Image
                height={30}
                width={30}
                src="/images/avatar.png"
                alt="avatar"
                className=""
              />
            </div>
            <div className="pl-3 proposalRight">
              <div className="text-sm font-medium proposalRightTop">
                {ele?.[2]}
              </div>
              <div className="text-xs proposalRightBottom">
                <p>{ele?.[3].substring(0, 15)}...</p>
              </div>
            </div>
          </div>
          {/* in progress  */}
          {!markedCompleted && (
            <div className="flex justify-end ">
              <button className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]">
                Mark as completed
              </button>
            </div>
          )}
          {/* when marked completed  */}
          {markedCompleted && (
            <div className=" w-full text-sm  hidden font-semibold text-[#E40E82]">
              <div
                onClick={yesVote}
                className="w-[50%] text-center  hover:text-green-500 cursor-pointer"
              >
                Yes
              </div>
              <div
                onClick={noVote}
                className="w-[50%] text-center  hover:text-green-500 cursor-pointer"
              >
                No
              </div>
            </div>
          )}
        </div>
      )}
      {/* completed  */}
      {ele?.[6] === "completed" && yes > no && (
        <div className="p-2 mt-2 mx-1 bg-[#C9FFD5] rounded-lg">
          <div className="proposalTop flex flex-row text-[#000] p-3 rounded-lg ">
            <div className="proposalLeft w-[20%] ">
              <Image
                height={30}
                width={30}
                src="/images/avatar.png"
                alt="avatar"
                className=""
              />
            </div>
            <div className="pl-3 proposalRight">
              <div className="text-sm font-medium proposalRightTop">
                {ele?.[2]}
              </div>
              <div className="text-xs proposalRightBottom">
                <p>{ele?.[3].substring(0, 15)}...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <p className=" text-sm font-semibold w-full text-center rounded-xl border-none text-[#E40E82]">
              Completed
            </p>
          </div>
        </div>
      )}
      {/* abandoned  */}
      {ele?.[6] === "abandoned" && no > yes && (
        <div className="p-2 mt-2 mx-1 bg-[#F9D7D7] rounded-lg">
          <div className="proposalTop flex flex-row text-[#000] p-3 rounded-lg ">
            <div className="proposalLeft w-[20%] ">
              <Image
                height={30}
                width={30}
                src="/images/avatar.png"
                alt="avatar"
                className=""
              />
            </div>
            <div className="pl-3 proposalRight">
              <div className="text-sm font-medium proposalRightTop">
                {ele?.[2]}
              </div>
              <div className="text-xs proposalRightBottom">
                <p>{ele?.[3].substring(0, 15)}...</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]">
              Assign it to yourself
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomTaskCard;
