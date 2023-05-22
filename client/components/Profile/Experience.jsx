import Image from "next/image";
import React, { useState } from "react";
import { AiFillPlusCircle,AiFillCaretLeft } from "react-icons/ai";
const Experience = ({setSection,setProgress}) => {
  const [expCount, setExpCount] = useState(1);
  const [experienceFields, setExperienceFields] = useState([
    {
      title: "",
      company: "",
      stDate: "",
      edDate: "",
      expDescription: "",
      expCount: expCount,
    },
  ]);
  const handleEXpTitle = (event, index) => {
    let data = [...experienceFields];
    data[index].title = event.target.value;
    setExperienceFields(data);
    console.log(data);
  };
  const handleCompany = (event, index) => {
    let data = [...experienceFields];
    data[index].company = event.target.value;
    setExperienceFields(data);
    console.log(data);
  };
  const handlestDate = (event, index) => {
    let data = [...experienceFields];
    data[index].stDate = event.target.value;
    setExperienceFields(data);
    console.log(data);
  };
  const handleedDate = (event, index) => {
    let data = [...experienceFields];
    data[index].edDate = event.target.value;
    setExperienceFields(data);
    console.log(data);
  };
  const handleexpDescription = (event, index) => {
    let data = [...experienceFields];
    data[index].expDescription = event.target.value;
    setExperienceFields(data);
    console.log(data);
  };
  const addExperience = () => {
    let object = {
      title: "",
      company: "",
      stDate: "",
      edDate: "",
      expDescription: "",
      expCount: expCount + 1,
    };
    setExperienceFields([...experienceFields, object]);
  };
  return (
    <>
      {experienceFields.map((form, index) => {
        return (
          <>
            <div
              className="projectDetails w-[90%] sm:w-[60%] m-auto mt-7 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4 "
              key={index}
            >
              <div className="flex justify-between p-3 projectUpper">
                <div className="font-bold title">Experience</div>
                <AiFillPlusCircle
                  className="mt-1 mr-3 text-2xl cursor-pointer text-secondary"
                  onClick={addExperience}
                />
              </div>
              <div className="text-center projectMiddle">
                <h3 className="text-[#fff]">
                  Experience {experienceFields[index].projectCount}
                </h3>
                <hr className="text-[#fff] h-3 w-[70%] m-auto mt-1" />
              </div>
              <div className="projectBottom">
                <form>
                  <div className="justify-around form1 sm:flex">
                    <div className="flex-col pl-2 sm:block">
                      <div className="mt-3">
                        <label>Title of Experience</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] bg-[#fff] text-black rounded-md border border-gray-300 placeholder:text-gray-500 py-2 px-3 text-sm "
                          type="text"
                          placeholder="Name of Position"
                          onChange={(event) => handleEXpTitle(event, index)}
                          value={form.title}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Company Name</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          placeholder="Company"
                          onChange={(event) => handleCompany(event, index)}
                          value={form.tech}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="justify-around mt-2 form2 sm:flex">
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Start Date</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="date"
                          placeholder="Eg: Aug 2020 - Dec 2020"
                          onChange={(event) => handlestDate(event, index)}
                          value={form.duration}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>End Date</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="date"
                          placeholder="Live Link"
                          onChange={(event) => handleedDate(event, index)}
                          value={form.link}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pl-2 pr-2 m-auto mt-4 form3">
                    <label>Description</label>
                    <textarea
                      className="textarea textarea-lg w-[100%] m-auto rounded-lg text-black"
                      placeholder="Write description about your project"
                      onChange={(event) => handleexpDescription(event, index)}
                      value={form.description}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      })}
      <div className="flex justify-between pt-3 pb-3 pl-5 pr-5 nextPrevButton sm:hidden">
        <h3
          className="text-[#fff] text-lg "
          onClick={() => {
            setSection("Project"),
            setProgress(75)
          }}
        >
          Prev
          <AiFillCaretLeft className="inline-block ml-2" />
        </h3>
        <button className="  text-white font-semibold bg-[#E40E82] flex items-center px-3 py-1 rounded-xl -ml-3">Submit  <Image
            src="/images/submitIcon.png"
            width="15"
            height="15"
            alt="submit"
            className="mt-1 ml-1"
          /></button>
      </div>
    </>
  );
};

export default Experience;
