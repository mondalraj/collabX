import Navbar from "@/components/Nav/Navbar";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
const ListView = () => {
  const [phonenav, setPhonenav] = useState(false);
  const openNav = () => {
    setPhonenav(!phonenav);
  };
  return (
    <div className="container1 h-[100%] bg-gradient-to-b sm:bg-gradient-to-r from-[#23094E] from-0% to-black to-100%">
      <div
        className="listViewUpperSection pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        <Navbar phonenav={phonenav} openNav={openNav} />
      </div>

      <div className="cardsBackground w-[90%] m-auto bg-[#01002a] pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 ">
        {/* search  */}
        <div className="flex items-center w-full mb-4 justify-evenly">
          <Input
            icon="search"
            placeholder="Search by project Ideas or by tags"
            className="sm:w-[40%] w-[70%] m-4 ml-6"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 cardsCollection sm:grid-cols-2 lg:grid-cols-3">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default ListView;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]
