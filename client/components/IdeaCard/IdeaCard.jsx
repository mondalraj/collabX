import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const IdeaCard = ({ owner, member, idea }) => {
  return (
    <div className=" bg-gradient-to-b from-[#23094E] to-[#000000] p-2 pb-4 rounded-xl mb-8">
      <div className="flex justify-between p-2 mx-1">
        <p className="text-lg tracking-wider sm:text-xl">{idea?.[1]}</p>
        <Image
          height={10}
          width={12}
          src="/images/blockChainSymbol.png"
          alt="blockchain"
          className="mb-1 rotate-12"
        />
      </div>
      <div className="flex justify-between mx-1">
        <div className="w-[48%] bg-[#01002a] text-sm font-normal p-2 text-start rounded-xl tracking-wider">
          {idea?.[2]}
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#01002a] w-[48%] p-2 rounded-xl text-xs">
          {idea?.[4]?.map((ele, idx) => (
            <div
              key={idx + 1}
              className="border-[#E40E82] border rounded-lg lg:min-w-[70%] lg:max-w-fit h-fit py-1 px-2 lg:my-1 mx-2 lg:tracking-wide"
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
      {owner && !member && (
        <Link href={`/idea/${idea?.id}`}>
          <div className="flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2">
            {" "}
            Open Idea <BiChevronRight color="#05EAFA" />
          </div>
        </Link>
      )}
      {!owner && member && (
        <Link href={`/idea/${idea?.id}`}>
          {" "}
          <div className="flex items-center justify-center bg-[#01002a] text-[#05EAFA] mt-2 mx-1 rounded-xl text-sm p-2">
            {" "}
            View Idea <BiChevronRight color="#05EAFA" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default IdeaCard;
