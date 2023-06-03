import AuthenticatedUser from "@/components/Auth/AuthenticatedUser";
import GetProfile from "@/components/Profile/GetProfile";
import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import { useContract } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);

  const router = useRouter();

  const { contract, isLoading } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  useEffect(() => {
    async function getProfileData(address) {
      const profile = await contract?.call("getProfileByAddress", [address]);

      if (!profile) {
        return null;
      }

      if (profile?.name !== "") {
        return profile;
      }

      return profile;
    }

    getProfileData(router.query.address)
      .then((profile) => {
        setProfileData(profile);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [router, isLoading]);

  console.log("User Profile Data", profileData);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
        <AuthenticatedUser />
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }
  return (
    <>
      <AuthenticatedUser />
      <div className="max-w-screen-xl m-auto text-sm">
        <GetProfile profile={profileData} />
      </div>
    </>
  );
};

export default UserProfile;
