import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
const ProposalCard = ({ prop }) => {
  const [acceptProposal, setAcceptProposal] = useState(false);
  const handleTick = () => {
    setAcceptProposal(!acceptProposal);
  };
  return (
    <div>
      <div
        className="profileCard h-fit rounded-lg w-[100%] md:w-[90%] lg:w-[80%] mt-[1rem] mb-4rem pb-[1rem] pt-[1rem] text-sm
                bg-[#ffffff21] opacity-[0.87]
                hover:bg-gradient-to-b from-[#870049] to-[#340362]"
      >
        <div className="flex justify-between m-3 profileCardUpperSection">
          <div className="flex justify-start">
            <div className="w-[20%] mr-3">
              <img src="/images/avatar.png" alt="avatar" />
            </div>
            <div className=" socialIcons">
              <h3 className="text-[#fff] mb-0 text-base ">{prop?.[2]}</h3>
              {/* <div className="flex justify-start ">
                <AiOutlineMail
                  size={18}
                  className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1"
                />
                <AiFillLinkedin
                  size={18}
                  className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-1"
                />
                <AiFillTwitterSquare
                  size={18}
                  className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-1"
                />
              </div> */}
            </div>
          </div>
          <div>
            {acceptProposal ? (
              <HiCheckCircle
                size={25}
                color="#06DBEE"
                className="cursor-pointer "
                onClick={handleTick}
              />
            ) : (
              <HiCheckCircle
                size={25}
                className="cursor-pointer "
                onClick={handleTick}
              />
            )}
          </div>
        </div>
        <div className="m-4">{prop?.[1]}</div>
      </div>
    </div>
  );
};

export default ProposalCard;
