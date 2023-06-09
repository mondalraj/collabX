import { NFT_CONTRACT_ADDRESS } from "@/constants";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useNFT,
  useNFTBalance,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { useRouter } from "next/router";
// import Carousel from 'react-elastic-carousel';
const tokenId = 0;

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const address = useAddress();
  const router = useRouter();

  const { contract: editionDrop } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: nft, isLoading, error } = useNFT(editionDrop, tokenId);

  const {
    data: NFTBalance,
    isLoading: isLoadingNFTBalance,
    error: NFTBalanceError,
  } = useNFTBalance(editionDrop, address, tokenId);

  if (isLoading) return <div>Fetching NFT…</div>;
  if (error) return <div>Error fetching NFT</div>;

  return (
    <>
      {/* <div>
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
        {Number(NFTBalance) > 0 ? (
          <Link href={"/myProfile"}>You owned NFT! Enter CollabX</Link>
        ) : (
          // "Claim your Free NFT to enter CollabX"
          <Web3Button
            contractAddress={editionDrop?.getAddress() || ""}
            action={(cntr) => cntr.erc1155.claim(tokenId, 1)}
            onError={(err) => {
              console.error(err);
              alert("Error claiming NFTs");
            }}
            onSuccess={() => {
              alert("Successfully claimed NFTs");
            }}
          >
            {isLoadingNFTBalance
              ? "Loading..."
              : "Claim your Free NFT to enter CollabX"}
          </Web3Button>
        )}
        {isLoading ? (
          <div>Fetching NFT…</div>
        ) : (
          <div>NFT: {nft.metadata.name}</div>
        )}
        {error && <div>Error fetching NFT</div>}
      </div> */}

      <div className="landingPageContainer bg-black  scroll-smooth">
        <div className="nav flex justify-between p-5 pl-[1rem] sm:pl-[3rem] pr-[1rem] sm:pr-[3rem]">
          <div className="collabXLogo">
            <Image
              src="/images/CollabXLogo.png"
              width="140"
              height="140"
              alt="CollabXLogo"
              className=""
            />
          </div>
          {/* <div className="connectWallet">
          <div className="text-[#E40E82] bg-[#191919] items-center p-2 rounded-xl mr-7 hidden sm:flex">
          <AiOutlineWallet className="text-[#fff] font-semibold  text-2xl" />
            <p className="pl-2">Connect Wallet</p>
          </div>
          <div className="walletLogo bg-[#191919] p-2 rounded-md block sm:hidden">
          <AiOutlineWallet className="text-[#fff]  text-2xl" />
          </div>
        </div> */}
          <div className="connectWallet z-10">
            <ConnectWallet theme="light" btnTitle="Connect Wallet" />
          </div>
        </div>
        <div className="headingCollabx mt-7 z-50">
          <div className="mainHeading text-[#fff] sm:w-[45%] m-auto text-center">
            <h2 className="text-[2.5rem] font-bold sm:text-[3rem]">
              Building Bridges, Igniting Ideas: Collaborate for Success!
            </h2>
          </div>
          <div className="subHeading text-[#fff] sm:w-[44%] m-auto text-center">
            <p className=" text-md sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con
            </p>
          </div>
          {/* <div className="enterCollabXButton m-auto w-[50%] sm:w-[20%] mt-6 pl-[1rem] sm:pl-[4rem]">
          <button className="bg-[#fff] text-black text-md sm:text-lg py-2 sm:py-3 px-4 sm:px-6 rounded-[2rem] font-semibold">
            Enter CollabX
          </button>
        </div> */}
          <div className="NFTButton absolute w-full flex justify-center">
            {Number(NFTBalance) > 0 ? (
              <div className="w-[50%] lg:w-[30%] xl:w-[20%] m-auto text-center mt-5">
                <button
                  className="bg-[#fff] text-black text-md sm:text-lg py-2 sm:py-3 px-4 sm:px-20 rounded-[2rem] font-semibold"
                  onClick={() => {
                    window.location.href = "/myProfile";
                  }}
                >
                  Enter CollabX
                </button>
              </div>
            ) : (
              // "Claim your Free NFT to enter CollabX"
              <div className="web3Button m-auto w-[80%] sm:w-[20%] flex justify-center mt-5 ">
                <Web3Button
                  contractAddress={editionDrop?.getAddress() || ""}
                  action={(cntr) => cntr.erc1155.claim(tokenId, 1)}
                  onError={(err) => {
                    console.error(err);
                    alert("Error claiming NFTs");
                  }}
                  onSuccess={() => {
                    alert("Successfully claimed NFTs");
                  }}
                >
                  {isLoadingNFTBalance
                    ? "Loading...Please Wait for a Moment"
                    : "Claim your Free NFT to enter CollabX"}
                </Web3Button>
              </div>
            )}
          </div>
        </div>
        <div className="PlanetSection m-auto">
          <Image
            height={200}
            width={1800}
            src="/images/Planet.png"
            alt="chain"
            className="m-auto sm:mt-[-10rem] lg:mt-[-18rem] xl:mt-[-22rem]  hidden sm:block"
          />
          <Image
            height={100}
            width={3000}
            src="/images/Planetcut.png"
            alt="chain"
            className="m-auto mt-[-6rem]   block sm:hidden z-[-100]"
          />
          <div className="PlanetCards absolute top-[92%] w-[100%] mt-[-9rem] sm:mt-[-2rem] lg:mt-[-5rem] xl:mt-[-18rem] cxl:mt-[-13rem]">
            <div className="carousel sm:bg-[rgba(0,0,0,0.5)] w-[100%]">
              {/* *********** Card -1  */}
              <div
                className="PlanetCard carousel-item m-auto w-[100%] sm:pl-[13rem] sm:pr-[13rem] items-center justify-items-center 
          ml-0 sm:ml-[-35rem]"
              >
                <div className="abovePart w-[15%] ml-auto mr-0 hidden sm:block">
                  <div className="whyCollabX justify-around">
                    <h2 className="text-[#fff] text-lg font-semibold">
                      Why CollabX ?
                    </h2>
                    <img
                      src="./images/pinkRectangle.png"
                      alt=""
                      className="h-[25px]"
                    />
                  </div>
                </div>
                <div className="belowPart flex flex-col-reverse sm:flex-row mt-8 items-center">
                  <div className="belowPartLeft p-1">
                    <img
                      src="./images/teamBuilding.png"
                      alt=""
                      className="m-auto sm:m-0"
                    />
                    <div className="leftPartAboveText text-[#fff] sm:w-[70%]">
                      <h2 className="text-[1.5rem] text-bold sm:text-[3rem] text-center sm:text-start">
                        Find your <br /> Co-Founder
                      </h2>
                    </div>
                    <div className="leftPartBelowText text-gray-400 sm:w-[70%]">
                      <p className="text-sm text-center sm:text-start">
                        Users can post their project ideas and skills to find
                        team members to collaborate with.
                      </p>
                    </div>
                  </div>
                  <div className="belowPartRight ml-auto mr-0">
                    <div className="imageRight">
                      <img
                        src="./images/findfounder.png"
                        className="w-[70%] sm:w-[84%] m-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* *********** Card -2  */}
              <div className="PlanetCard carousel-item m-auto w-[100%]  sm:pl-[13rem] sm:pr-[13rem] ml-0 sm:ml-[-35rem]">
                <div className="abovePart w-[15%] ml-auto mr-0 hidden sm:block sm:invisible">
                  <div className="whyCollabX flex justify-around">
                    <h2 className="text-[#fff] text-lg font-semibold">
                      Why CollabX ?
                    </h2>
                    <img
                      src="./images/pinkRectangle.png"
                      alt=""
                      className="h-[25px]"
                    />
                  </div>
                </div>
                <div className="belowPart flex flex-col-reverse sm:flex-row mt-8 items-center">
                  <div className="belowPartLeft p-5">
                    <img
                      src="./images/buildPublic.png"
                      alt=""
                      className="m-auto sm:m-0 "
                    />
                    <div className="leftPartAboveText text-[#fff] sm:w-[80%]">
                      <h2 className="text-[1.5rem] text-bold sm:text-[3rem] text-center sm:text-start">
                        Share ideas with community
                      </h2>
                    </div>
                    <div className="leftPartBelowText text-gray-400 sm:w-[70%]">
                      <p className="text-sm text-center sm:text-start">
                        Share your ideas and seek feedback from the community to
                        refine your ideas and create better projects.
                      </p>
                    </div>
                  </div>
                  <div className="belowPartRight">
                    <div className="imageRight">
                      <img
                        src="./images/IdeaGraph.png"
                        className="w-[70%] m-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* *********** Card -3  */}
              <div
                className="PlanetCard carousel-item m-auto w-[100%]
          sm:pl-[13rem] sm:pr-[13rem] ml-0 sm:ml-0"
              >
                <div className="abovePart w-[15%] ml-auto mr-0 hidden sm:block sm:invisible">
                  <div className="whyCollabX flex justify-around">
                    <h2 className="text-[#fff] text-lg font-semibold">
                      Why CollabX ?
                    </h2>
                    <img
                      src="./images/pinkRectangle.png"
                      alt=""
                      className="h-[25px]"
                    />
                  </div>
                </div>
                <div className="belowPart flex flex-col-reverse sm:flex-row mt-8 items-center">
                  <div className="belowPartLeft p-5">
                    <img
                      src="./images/dmColl.png"
                      alt=""
                      className="m-auto sm:m-0"
                    />
                    <div className="leftPartAboveText text-[#fff] sm:w-[80%]">
                      <h2 className="text-[1.5rem] text-bold sm:text-[3rem] text-center sm:text-start">
                        Decentralized Project Management
                      </h2>
                    </div>
                    <div className="leftPartBelowText text-gray-400 sm:w-[70%]">
                      <p className="text-sm text-center sm:text-start">
                        Community members can vote on the proposals, and if they
                        are accepted, they will be implemented.
                      </p>
                    </div>
                  </div>
                  <div className="belowPartRight">
                    <div className="imageRight">
                      <img
                        src="./images/Decentralized.png"
                        className="w-[70%] sm:w-[84%] m-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="CollabXWorks relative mt-[-10rem] sm:mt-[-18rem] cmd:mt-[-38rem] lg:mt-[-46rem] 
        cl:mt-[-50rem] xl:mt-[-58rem] cxl:mt-[-68rem] bg-black z-10 pb-20"
          >
            <div className="workHeading text-center  ">
              <h2 className="text-2xl sm:text-[3rem] font-bold  text-[#ff7bf2]  p-[1rem]">
                How CollabX Works ?
              </h2>
            </div>
            <div className="collabXWorkCards sm:mt-[3rem] block sm:flex sm:justify-around">
              {/* card1******* */}
              <div className="collabXWorkCard w-[80%] sm:w-[30%] m-auto bg-[#191919] rounded-lg mt-3 sm:m-0 hover:shadow-[0_0px_20px_4px_rgb(147,85,204)]">
                <div className="cardTopCollabX p-2 pt-4 items-center w-[80%] m-auto">
                  <img
                    src="./images/connectWallet.png"
                    className="w-[100%]"
                    alt=""
                  />
                </div>
                <div className="cardBottomCollabX p-5 sm:mt-[3.2rem]">
                  <h2 className="text-[#fff] text-2xl sm:text-[2rem]">
                    Connect Wallet
                  </h2>
                  <p className="text-[#cbc9c9] text-sm sm:mt-3 sm:text-lg">
                    Coenim ad minim veniam, quis nostrud exercitation ul
                  </p>
                </div>
              </div>
              {/* card2******* */}
              <div className="collabXWorkCard w-[80%] sm:w-[30%] m-auto bg-[#191919] rounded-lg mt-3 sm:m-0 hover:shadow-[0_0px_20px_4px_rgb(147,85,204)]">
                <div className="cardTopCollabX p-2 pt-4 items-center w-[80%] m-auto">
                  <img
                    src="./images/createProfile.png"
                    className="w-[100%]"
                    alt=""
                  />
                </div>
                <div className="cardBottomCollabX p-5 sm:mt-[3.4rem]">
                  <h2 className="text-[#fff] text-2xl sm:text-[2rem]">
                    Create Profile
                  </h2>
                  <p className="text-[#cbc9c9] text-sm sm:mt-3 sm:text-lg">
                    Coenim ad minim veniam, quis nostrud exercitation ul
                  </p>
                </div>
              </div>
              {/* card3******* */}
              <div className="collabXWorkCard w-[80%] sm:w-[30%] m-auto bg-[#191919] rounded-lg mt-3 sm:m-0 hover:shadow-[0_0px_20px_4px_rgb(147,85,204)]">
                <div className="cardTopCollabX p-2 pt-4 items-center w-[80%] m-auto">
                  <img
                    src="./images/hustling.png"
                    className="w-[100%]"
                    alt=""
                  />
                </div>
                <div className="cardBottomCollabX p-5">
                  <h2 className="text-[#fff] text-2xl sm:text-[2rem]">
                    Start Hustling
                  </h2>
                  <p className="text-[#cbc9c9] text-sm sm:mt-3 sm:text-lg">
                    Coenim ad minim veniam, quis nostrud exercitation ul
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="OurTeam mt-[-1rem]  relative bg-black sm:mt-[-0.2rem]  ">
            <div className="ourTeamTitle ">
              <div className="whyCollabX flex pl-[8rem]">
                <img
                  src="./images/pinkRectangle.png"
                  alt=""
                  className="hidden sm:block"
                />
                <h2 className="text-[#fff] text-[2rem] font-semibold pl-6">
                  Our Team
                </h2>
              </div>
            </div>
            <div className="ourTeamMembers p-20 grid grid-cols-2 sm:grid-cols-4 gap-[3rem] sm:gap-20 justify-around text-center">
              <div className="memberCollabX m-auto">
                <div className="memberImage m-auto  ">
                  <img
                    src="./images/rajeeb_image.jpeg"
                    className="w-[100%] sm:w-[75%] m-auto"
                    alt=""
                  />
                </div>
                <div className="name">
                  <h2 className="text-[#fff] text-[1.3rem] sm:text-[1.5rem]">
                    Rajib Mondal
                  </h2>
                </div>
              </div>
              <div className="memberCollabX m-auto mt-5 sm:mt-0">
                <div className="memberImage m-auto">
                  <img
                    src="./images/Aryan_image.png"
                    className="w-[100%] sm:w-[76%] m-auto"
                    alt=""
                  />
                </div>
                <div className="name">
                  <h2 className="text-[#fff] text-[1.3rem] sm:text-[1.5rem]">
                    Aryan Singla
                  </h2>
                </div>
              </div>
              <div className="memberCollabX m-auto">
                <div className="memberImage m-auto">
                  <img
                    src="./images/dhankar_image.png"
                    className="w-[100%] sm:w-[58%] m-auto "
                    alt=""
                  />
                </div>
                <div className="name">
                  <h2 className="text-[#fff] text-[1.3rem] sm:text-[1.5rem]">
                    Simran Dhankar
                  </h2>
                </div>
              </div>
              <div className="memberCollabX m-auto mt-8 sm:mt-0">
                <div className="memberImage m-auto">
                  <img
                    src="./images/vanshika_image.png"
                    className="w-[100%] sm:w-[76%] m-auto"
                    alt=""
                  />
                </div>
                <div className="name">
                  <h2 className="text-[#fff] text-[1.3rem] sm:text-[1.5rem]">
                    Vanshika Goel
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className="collabXFooter mt-8 flex justify-between sm:w-[100%] m-auto pb-8
        shadow-[0px_0px_50px_5px_rgb(154,2,113)] sm:shadow-[0px_0px_5000px_50px_rgb(154,2,113)]"
          >
            <div className="collabXFooterLeft">
              <div className="whyCollabX flex sm:pl-[4rem]">
                <img src="./images/pinkRectangle.png" alt="" className="" />
                <h2 className="text-[#fff] text-2xl sm:text-[1.5rem] font-semibold pl-6">
                  Unite,
                  <br />
                  Innovate,
                  <br />
                  Succed!
                </h2>
              </div>
            </div>
            <div className="collabXFooterRight">
              <div className="logoFooter pr-[1rem] sm:pr-[4rem]">
                <Image
                  src="/images/CollabXLogo.png"
                  width="200"
                  height="140"
                  alt="CollabXLogo"
                  className="hidden sm:block"
                />
                <Image
                  src="/images/CollabXLogo.png"
                  width="140"
                  height="140"
                  alt="CollabXLogo"
                  className="block sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        {/* {isLoading ? (
          <div>Fetching NFT…</div>
        ) : (
          <div>NFT: {nft.metadata.name}</div>
        )}
        {error && <div>Error fetching NFT</div>} */}
      </div>
    </>
  );
};

export default LandingPage;
