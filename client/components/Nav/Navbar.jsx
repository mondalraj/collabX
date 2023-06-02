import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AuthenticatedUser from "../Auth/AuthenticatedUser";

const Navbar = ({ phonenav, openNav }) => {
  const address = useAddress();

  const { contract, isLoading } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  const { data: currentUserData, isLoading: currentUserLoading } =
    useContractRead(contract, "getProfileByAddress", [address]);

  useEffect(() => {
    if (!isLoading && !currentUserLoading) {
      if (currentUserData?.name == "") {
        window.location.href = "/createProfile";
      }
    }
  }, [currentUserData]);

  if (isLoading || currentUserLoading) {
    return (
      <div
        className="h-screen w-screen flex flex-col
      justify-center items-center gap-5 text-white text-xl"
      >
        <AuthenticatedUser />
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }
  return (
    <div>
      <AuthenticatedUser />
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
              <Link className="text-white" href="/allProfiles">
                All Users
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/projectIdeas">
                All Ideas
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/yourIdeas">
                Your Projects
              </Link>
            </li>
            <li>
              <a className="text-white" href="/myProfile">
                Your Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {/* <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
            <Image
              height={20}
              width={20}
              src="/images/symbol.png"
              alt="chain"
              className="mr-2 "
            />
            <p>120.00 CX</p>
          </div> */}
          <ConnectWallet
            style={{
              transform: "scale(0.8)",
            }}
            theme="light"
            btnTitle="Connect Wallet"
          />
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
            <Link href="/allProfiles">
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
