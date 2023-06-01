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

  return <div>User Profile</div>;
};

export default UserProfile;
