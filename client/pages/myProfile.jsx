import AuthenticatedUser from "@/components/Auth/AuthenticatedUser";
import Navbar from "@/components/Nav/Navbar";
import { USERPROFILE_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import GetProfile from "../components/Profile/GetProfile";

const Profile = () => {
  const [phonenav, setPhonenav] = useState(false);
  const [userProfileExist, setUserProfileExist] = useState(false);
  const [myProfileData, setMyProfileData] = useState(null);

  const address = useAddress();

  const { contract, isLoading } = useContract(USERPROFILE_CONTRACT_ADDRESS);

  useEffect(() => {
    async function isProfileAlreadyExist() {
      const profile = await contract?.call("getProfileByAddress", [address]);

      console.log("MY PROFILE", profile);

      if (!profile) {
        return false;
      }

      if (profile?.name !== "") {
        setMyProfileData(profile);
        return true;
      }

      return false;
    }

    isProfileAlreadyExist(address)
      .then((doesProfileExist) => {
        setUserProfileExist(doesProfileExist);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [address, isLoading]);

  const openNav = () => {
    setPhonenav(!phonenav);
  };

  if (isLoading) {
    return (
      <div
        className="h-screen w-screen flex flex-col
      justify-center items-center gap-5"
      >
        <AuthenticatedUser />
        <div>Loading Data... Please wait.</div>
      </div>
    );
  }

  if (!userProfileExist) {
    return (
      <div
        className="h-screen w-screen flex flex-col
      justify-center items-center gap-5"
      >
        <AuthenticatedUser />
        <div>User Profile Does Not Exist</div>

        <button className="btn btn-active btn-secondary btn-sm">
          <a href="/createProfile">Create Profile</a>
        </button>
      </div>
    );
  }

  return (
    <>
      <AuthenticatedUser />
      <Navbar phonenav={phonenav} openNav={openNav} />
      <div className="max-w-screen-xl m-auto text-sm">
        <GetProfile />
      </div>
    </>
  );
};

export default Profile;
