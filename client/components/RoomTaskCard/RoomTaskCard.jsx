import { DAOROOM_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";

const RoomTaskCard = ({ ele }) => {
  const [markedCompleted, setMarkedCompleted] = useState(false);
  const [takeAction, setTakeAction] = useState(false);
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  const address = useAddress();
  const router = useRouter();

  const [voted, setVoted] = useState(
    localStorage.getItem(
      JSON.stringify({
        roomId: router.query.id,
        taskId: Number(ele.id),
        address: address,
      })
    )
  );

  useEffect(() => {
    if (ele?.isCompletedRequested) {
      setMarkedCompleted(true);
    }
    setYes(Number(ele?.yesVoted));
    setNo(Number(ele?.noVoted));

    if (Number(ele?.votingStartedAt + 86400) < Math.floor(Date.now() / 1000)) {
      setTakeAction(true);
    }
  }, [ele]);

  const { contract } = useContract(DAOROOM_CONTRACT_ADDRESS);
  const { mutateAsync: assignTaskToParticipant } = useContractWrite(
    contract,
    "assignTaskToParticipant"
  );
  const { mutateAsync: changeTaskStatus } = useContractWrite(
    contract,
    "changeTaskStatus"
  );
  const { mutateAsync: voteOnTask } = useContractWrite(contract, "voteOnTask");

  const { mutateAsync: performActionOnTaskAfterVoting } = useContractWrite(
    contract,
    "performActionOnTaskAfterVoting"
  );

  const yesVote = async () => {
    try {
      const data = await voteOnTask({
        args: [router.query.id, Number(ele.id), 0],
      });
      console.info("contract call successs", data);
      Notify.success("Vote submitted");
      setYes((yes) => yes + 1);
      localStorage.setItem(
        JSON.stringify({
          roomId: router.query.id,
          taskId: Number(ele.id),
          address: address,
        }),
        "voted"
      );
      setVoted("voted");
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Vote not submitted");
    }
  };
  const noVote = async () => {
    try {
      const data = await voteOnTask({
        args: [router.query.id, Number(ele.id), 1],
      });
      console.info("contract call successs", data);
      Notify.success("Vote submitted");
      setNo((no) => no + 1);
      localStorage.setItem(
        JSON.stringify({
          roomId: router.query.id,
          taskId: Number(ele.id),
          address: address,
        }),
        "voted"
      );
      setVoted("voted");
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Vote not submitted");
    }
  };

  const assignTaskToYourself = async () => {
    if (!address) {
      Notify.failure("Please connect your wallet");
      return;
    }
    try {
      const data = await assignTaskToParticipant({
        args: [router.query.id, Number(ele.id)],
      });
      console.info("contract call successs", data);
      Notify.success("Task assigned to you");
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Task not assigned to you");
    }
  };

  const markTaskAsCompleted = async () => {
    if (!address) {
      Notify.failure("Please connect your wallet");
      return;
    }
    try {
      const data = await changeTaskStatus({
        args: [router.query.id, Number(ele.id), 0],
      });
      console.info("contract call successs", data);
      Notify.success("Task marked as completed");
      setMarkedCompleted(true);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Task not marked as completed");
    }
  };

  const triggerActionForTask = async () => {
    if (!address) {
      Notify.failure("Please connect your wallet");
      return;
    }
    try {
      const data = await performActionOnTaskAfterVoting({
        args: [router.query.id, Number(ele.id)],
      });
      console.info("contract call successs", data);
      Notify.success("Task marked as completed");
      setMarkedCompleted(true);
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Task not marked as completed");
    }
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
                {/* <p>{ele?.[3].substring(0, 15)}...</p> */}
                <p>{ele?.[3]}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]"
              onClick={assignTaskToYourself}
            >
              Assign it to yourself
            </button>
          </div>
        </div>
      )}
      {/* progress  */}
      {ele?.status === "in_progress" && (
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
                <p>{ele?.[3]}</p>
              </div>
            </div>
          </div>
          {/* in progress  */}
          {!markedCompleted && ele?.assignedTo === address && (
            <div className="flex justify-end ">
              <button
                className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]"
                onClick={markTaskAsCompleted}
              >
                Mark as completed
              </button>
            </div>
          )}
          {/* when marked completed  */}
          {markedCompleted &&
            ele?.autoTrigger &&
            !takeAction &&
            voted !== "voted" && (
              <div className="w-full text-sm flex font-semibold text-[#E40E82]">
                <div
                  onClick={yesVote}
                  className="w-[50%] text-center  hover:text-green-500 cursor-pointer"
                >
                  Yes ({yes})
                </div>
                <div
                  onClick={noVote}
                  className="w-[50%] text-center  hover:text-red-700 cursor-pointer"
                >
                  No ({no})
                </div>
              </div>
            )}

          {markedCompleted &&
            !takeAction &&
            ele?.autoTrigger &&
            voted === "voted" && (
              <div className="w-full text-sm flex font-semibold text-[#E40E82]">
                <div className="w-[50%] text-center  hover:text-green-500 cursor-not-allowed">
                  Yes ({yes})
                </div>
                <div className="w-[50%] text-center  hover:text-red-700 cursor-not-allowed">
                  No ({no})
                </div>
              </div>
            )}

          {markedCompleted && takeAction && ele?.autoTrigger && (
            <div className="flex justify-end ">
              <button
                className=" text-sm font-semibold hover:text-green-500 w-full text-center rounded-xl border-none text-[#E40E82]"
                onClick={triggerActionForTask}
              >
                Trigger Action for Task
              </button>
            </div>
          )}
        </div>
      )}
      {/* completed  */}
      {ele?.[6] === "completed" && (
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
                {/* <p>{ele?.[3].substring(0, 15)}...</p> */}
                <p>{ele?.[3]}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-end">
            <p className=" text-sm font-semibold w-full text-center rounded-xl border-none text-[#E40E82]">
              Completed
            </p>
          </div> */}
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
                <p>{ele?.[3]}</p>
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
