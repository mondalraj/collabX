import Image from "next/image";

const RoomProposalCard = () => {
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
            Rajib Mondal
          </div>
          <div className="text-xs text-gray-300 proposalRightBottom">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit offic Amet minim mollit non deserunt ullamco est
              sit aliqua{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="proposalOptions flex w-full flex-row border-solid border-2 border-white text-[#fff] ">
        <div className="option1 border-solid border-[1px] w-[50%] border-white text-center text-sm">
          Yes
        </div>
        <div
          className="option2 text-sm border-solid border-[1px] w-[50%] border-white
                        text-center"
        >
          No
        </div>
      </div>
    </div>
  );
};

export default RoomProposalCard;
