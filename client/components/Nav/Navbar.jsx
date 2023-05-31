import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = ({ phonenav, openNav }) => {
  return (
    <div>
      {/* nav */}
      <div className="mt-10 mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto  bg-gradient-to-r from-[#030C30] from-50% to-[#43087A] t0-50% rounded-full p-2 pl-3">
        <div className="ml-3 -mt-2 img">
          <Image
            src="/images/CollabXLogo.png"
            width="140"
            height="140"
            alt="CollabXLogo"
            className="hidden sm:block "
          />
        </div>
        <div className="w-[30%]">
          <ul className="flex justify-between font-medium text-white ">
            <li>
              <Link className="text-white" href="/listView">
                Profile
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/projectIdeas">
                Ideas
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/yourIdeas">
                Showcases
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
            <Image
              height={20}
              width={20}
              src="/images/symbol.png"
              alt="chain"
              className="mr-2 "
            />
            <p>120.00 CX</p>
          </div>
          <Image
            height={40}
            width={40}
            src="/images/avatar.png"
            alt="avatar"
            className="ml-auto mr-0 "
          />
        </div>
      </div>

      {/* mobile */}
      {/* nav */}
      <div className="flex flex-row items-center justify-between m-5 sm:hidden">
        <div>
          <Image
            height={48}
            width={48}
            src="/images/avatar.png"
            alt="avatar"
            className=""
          />
        </div>
        <div className="flex items-center">
          <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2">
            <Image
              height={26}
              width={26}
              src="/images/symbol.png"
              alt="chain"
              className="mr-2 "
            />
            <p>120.00 CX</p>
          </div>

          <button onClick={openNav}>
            {" "}
            <BsThreeDotsVertical color="white" size={30} />
          </button>
        </div>
      </div>
      {/* opennedNav in phn */}
      {phonenav && (
        <div className="relative z-10 w-full ">
          <ul className="absolute flex-col items-center justify-between w-full bg-opacity-90  font-medium text-center text-white bg-[#E40E82]">
            <Link href="/listView">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">
                Profiles
              </li>
            </Link>
            <Link href="/projectIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black ">Ideas</li>
            </Link>
            <Link href="/yourIdeas">
              {" "}
              <li className="p-3 text-white border-b-2 border-black">
                Showcases
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
