import Navbar from "@/components/Nav/Navbar";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
const ListView = () => {
  const [phonenav, setPhonenav] = useState(false);
  const [allProfiles, setAllProfiles] = useState([]);

  const address = useAddress();

  const { contract, isLoading } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  useEffect(() => {
    async function getAllUserProfiles() {
      const profiles = await contract?.call("getAllProfilesWithMapping");
      return profiles;
    }

    getAllUserProfiles()
      .then((profiles) => {
        setAllProfiles(profiles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [address, isLoading]);
  console.log("ALL PROFILES", allProfiles);

  const openNav = () => {
    setPhonenav(!phonenav);
  };

  return (
    <div className="container1 min-h-[100vh] bg-gradient-to-b sm:bg-gradient-to-r from-[#2A064B] from-50% to-[#030C30] t0-50%">
      <div
        className="listViewUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        <Navbar phonenav={phonenav} openNav={openNav} />
      </div>

      <div className="cardsBackground max-w-[80%] min-w-[80%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
        {/* search  */}
        <div className="flex items-center w-full mb-4 justify-evenly">
          <Input
            icon="search"
            placeholder="Search by project Ideas or by tags"
            className="sm:w-[40%] w-[70%] m-4 ml-6"
          />
        </div>
        <div className="grid grid-cols-1 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
          {allProfiles?.map((profile) => (
            <ProfileCard
              address={profile?.[0]}
              name={profile?.[1]}
              skills={profile?.[6]}
              id={profile?.[0]}
              bio={profile?.[2]}
              twit={profile?.[5]}
              email={profile?.[3]}
              phn={profile?.[4]}
              upvote={Number(profile.upvote_count)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]
