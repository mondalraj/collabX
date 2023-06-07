import { DAOROOM_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";

const RoomProposalCard = ({ ele }) => {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [takeAction, setTakeAction] = useState(false);
  const router = useRouter();
  const address = useAddress();

  const [voted, setVoted] = useState(
    localStorage.getItem(
      JSON.stringify({
        roomId: router.query.id,
        proposalId: Number(ele.id),
        address: address,
      })
    )
  );

  const { contract } = useContract(DAOROOM_CONTRACT_ADDRESS);
  const { mutateAsync: voteOnProposal } = useContractWrite(
    contract,
    "voteOnProposal"
  );

  const { mutateAsync: performActionOnProposalAfterVoting } = useContractWrite(
    contract,
    "performActionOnProposalAfterVoting"
  );

  useEffect(() => {
    setYes(Number(ele?.yesVoted));
    setNo(Number(ele?.noVoted));

    if (Number(ele?.endProposalVotingDate) < Math.floor(Date.now() / 1000)) {
      setTakeAction(true);
      console.log("takeAction", takeAction);
    }
  }, [ele]);

  const yesVote = async () => {
    try {
      const data = await voteOnProposal({
        args: [router.query.id, Number(ele.id), 1],
      });
      console.info("contract call successs", data);
      setYes(yes + 1);
      Notify.success("Voted Successfully");

      localStorage.setItem(
        JSON.stringify({
          roomId: router.query.id,
          proposalId: Number(ele.id),
          address: address,
        }),
        "voted"
      );
      setVoted("voted");
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Voting Failed");
    }
  };
  const noVote = async () => {
    try {
      const data = await voteOnProposal({
        args: [router.query.id, Number(ele.id), 2],
      });
      console.info("contract call successs", data);
      setYes(yes + 1);
      Notify.success("Voted Successfully");

      localStorage.setItem(
        "voted",
        JSON.stringify({
          roomId: router.query.id,
          proposalId: Number(ele.id),
          address: address,
        })
      );
      setVoted("voted");
    } catch (err) {
      console.error("contract call failure", err);
      Notify.failure("Voting Failed");
    }
  };

  const actionOnProposal = async () => {
    try {
      const data = await performActionOnProposalAfterVoting({
        args: [router.query.id, Number(ele.id)],
      });
      console.info("contract call successs", data);
      Notify.success("Action Performed Successfully");
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="m-4 border-2 border-white border-solid proposal">
      <div className="proposalTop flex flex-row text-[#fff] p-3">
        <div className="proposalLeft w-[20%] ">
          <Image
            height={48}
            width={48}
            src="/images/avatar.png"
            alt="avatar"
            className="mt-1"
          />
        </div>
        <div className="pl-3 proposalRight">
          <div className="text-sm font-semibold proposalRightTop">
            {ele?.name}
          </div>
          <div className="text-xs text-gray-300 proposalRightBottom">
            <p>{ele?.description}</p>
          </div>
        </div>
      </div>
      {takeAction ? (
        <div className="proposalAction flex flex-row border-solid border-2 border-white text-[#fff] ">
          <div
            onClick={actionOnProposal}
            className="option1 border-solid border-[1px]  w-full border-white text-center text-sm cursor-pointer py-1"
          >
            Trigger Action for proposal
          </div>
        </div>
      ) : voted === "voted" ? (
        <div className="proposalOptions flex w-full flex-row border-solid border-2 border-white text-[#fff] ">
          <div className="option1 border-solid border-[1px] w-[50%] border-white text-center text-sm cursor-not-allowed">
            Yes ({yes})
          </div>
          <div
            className="option2 text-sm border-solid border-[1px] w-[50%] border-white cursor-not-allowed
                        text-center"
          >
            No ({no})
          </div>
        </div>
      ) : (
        <div className="proposalOptions flex w-full flex-row border-solid border-2 border-white text-[#fff] ">
          <div
            onClick={yesVote}
            className="option1 border-solid border-[1px] w-[50%] border-white text-center text-sm cursor-pointer"
          >
            Yes ({yes})
          </div>
          <div
            onClick={noVote}
            className="option2 text-sm border-solid border-[1px] w-[50%] border-white cursor-pointer
                        text-center"
          >
            No ({no})
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomProposalCard;
