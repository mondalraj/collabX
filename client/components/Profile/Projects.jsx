import React, { useState } from "react";
import {
  AiFillPlusCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

const Projects = ({setSection,setProgress}) => {
  const [projectCount, setProjectCount] = useState(1);
  const [formFields, setFormFields] = useState([
    {
      title: "",
      tech: "",
      duration: "",
      link: "",
      description: "",
      projectCount: projectCount,
    },
  ]);
  const handleTitle = (event, index) => {
    let data = [...formFields];
    data[index].title = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleTech = (event, index) => {
    let data = [...formFields];
    data[index].tech = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleDuration = (event, index) => {
    let data = [...formFields];
    data[index].date = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleLink = (event, index) => {
    let data = [...formFields];
    data[index].link = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleDescription = (event, index) => {
    let data = [...formFields];
    data[index].description = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const addFields = () => {
    let object = {
      title: "",
      tech: "",
      duration: "",
      link: "",
      description: "",
      projectCount: projectCount + 1,
    };
    setFormFields([...formFields, object]);
  };
  return (
    <>
      {formFields.map((form, index) => {
        return (
          <>
            <div
              className="projectDetails w-[90%] sm:w-[60%] m-auto mt-7 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4"
              key={index}
            >
              <div className="flex justify-between p-3 projectUpper">
                <div className="font-bold title">Project Details</div>
                <AiFillPlusCircle
                  className="mt-1 mr-3 text-2xl cursor-pointer text-secondary"
                  onClick={addFields}
                />
              </div>
              <div className="text-center projectMiddle">
                <h3 className="text-[#fff]">
                  Project {formFields[index].projectCount}
                </h3>
                <hr className="text-[#fff] h-3 w-[70%] m-auto mt-1" />
              </div>
              <div className="projectBottom">
                <form>
                  <div className="justify-around form1 sm:flex">
                    <div className="flex-col pl-2 sm:block">
                      <div className="mt-3">
                        <label>Project Title</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] bg-[#fff] text-black rounded-md border border-gray-300 placeholder:text-gray-500 py-2 px-3 text-sm "
                          type="text"
                          placeholder="Name of the Project"
                          onChange={(event) => handleTitle(event, index)}
                          value={form.title}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Technologies Used</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          placeholder="Select Technologies used in this Project"
                          onChange={(event) => handleTech(event, index)}
                          value={form.tech}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="justify-around mt-2 form2 sm:flex">
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Project Duration</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300  py-2 px-3 text-sm placeholder:text-gray-500 "
                          type="date"
                          placeholder="Eg: Aug 2020 - Dec 2020"
                          onChange={(event) => handleDuration(event, index)}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Project Link / Github</label>
                      </div>
                      <div>
                        <input
                          className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          placeholder="Live Link"
                          onChange={(event) => handleLink(event, index)}
                          value={form.link}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pl-2 pr-2 m-auto mt-4 form3">
                    <label>Project description</label>
                    <textarea
                      className="textarea textarea-lg w-[100%] m-auto rounded-lg text-black"
                      placeholder="Write description about your project"
                      onChange={(event) => handleDescription(event, index)}
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
            setSection("Skills")
            ,setProgress(50)
          }}
        >
          Prev
          <AiFillCaretLeft className="inline-block ml-2" />
        </h3>
        <h3
          className="text-[#fff] text-lg"
          onClick={() => {
            setSection("Experience")
            ,setProgress(100)
          }}
        >
          Next
          <AiFillCaretRight className="inline-block ml-2" />
        </h3>
      </div>
    </>
  );
};

export default Projects;
