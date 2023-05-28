import { useEffect, useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillPlusCircle,
} from "react-icons/ai";
import {
  MultiSelect
} from "@mantine/core";

const Projects = ({
  setSection,
  setProgress,
  formData,
  setFormData,
  projects,
  setProjects
}) => {
  useEffect(() => {
    setFormData({ ...formData, projects:projects });
  }, [projects]);
  const [options, setOptions] = useState([
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "C/C++", label: "C/C++" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Django", label: "Django" },
    { value: "Angular", label: "Angular" },
    { value: "SQL", label: "SQL" },
    { value: "Mongo DB", label: "Mongo DB" },
    { value: "Redis", label: "Redis" },
    { value: "Dynamo DB", label: "Dynamo DB" },
  ]);
  return (
    <>
      {projects.map((proj, index) => {
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
                  onClick={() => {
                    setProjects([
                      ...projects,
                      {
                        id: Math.random(),
                        name: "",
                        description: "",
                        duration: "",
                        link: "",
                        techStack: "",
                      },
                    ]);
                  }}
                />
              </div>
              <div className="text-center projectMiddle">
                <h3 className="text-[#fff]">
                  Project {index+1}
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
                          className=" h-9 w-[70vw] sm:w-[25vw] bg-[#fff] text-black rounded-md border border-gray-300 placeholder:text-gray-500 py-2 px-3 text-sm "
                          type="text"
                          placeholder="Name of the Project"
                          onChange={(e) => {
                            setProjects(
                              projects?.map((item) => {
                                if (item.id === proj.id) {
                                  return {
                                    ...item,
                                    name: e.target.value,
                                  };
                                }
                                return item;
                              })
                            );
                          }}
                          value={proj?.name}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Technologies Used</label>
                      </div>
                    <div className=" h-9 w-[70vw] sm:w-[25vw] bg-[#fff] text-black rounded-md border border-gray-300 placeholder:text-gray-500 py-2 px-3 text-sm ">
                      <MultiSelect
                      className="w-full -mt-2 "
            data={options}
            required
            // variant="filled"
            placeholder="Select technologies used"
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setOptions((current) => [...current, item]);
              return item;
            }}
            value={proj?.techStack}
            onChange={(value) => {
              setProjects(
                projects?.map((item) => {
                  if (item.id === proj.id) {
                    return {
                      ...item,
                      techStack: value,
                    };
                  }
                  return item;
                })
              );
            }}
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
                          className=" h-9 w-[70vw] sm:w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300  py-2 px-3 text-sm placeholder:text-gray-500 "
                          type="text"
                          placeholder="Eg: Aug 2020 - Dec 2020"
                          onChange={(e) => {
                            setProjects(
                              projects?.map((item) => {
                                if (item.id === proj.id) {
                                  return {
                                    ...item,
                                    duration: e.target.value,
                                  };
                                }
                                return item;
                              })
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mt-3">
                        <label>Project Link / Github</label>
                      </div>
                      <div>
                        <input
                          className=" h-9 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          placeholder="Live Link"
                          onChange={(e) => {
                            setProjects(
                              projects?.map((item) => {
                                if (item.id === proj.id) {
                                  return {
                                    ...item,
                                    link: e.target.value,
                                  };
                                }
                                return item;
                              })
                            );
                          }}
                          value={proj?.link}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pl-2 pr-2 m-auto mt-4 form3">
                    <label>Project description</label>
                    <textarea
                      className="textarea textarea-lg w-[100%] m-auto rounded-lg text-black bg-white"
                      placeholder="Write description about your project"
                      onChange={(e) => {
                        setProjects(
                          projects?.map((item) => {
                            if (item.id === proj.id) {
                              return {
                                ...item,
                                description: e.target.value,
                              };
                            }
                            return item;
                          })
                        );
                      }}
                      value={proj?.description}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      })}

      {/* {setFormData({ ...formData, projects: arr })} */}
      <div className="flex justify-between pt-3 pb-3 pl-5 pr-5 nextPrevButton sm:hidden">
        <h3
          className="text-[#fff] text-lg "
          onClick={() => {
            setSection("Skills"), setProgress(50);
          }}
        >
          Prev
          <AiFillCaretLeft className="inline-block ml-2" />
        </h3>
        <h3
          className="text-[#fff] text-lg"
          onClick={() => {
            setSection("Experience"), setProgress(100);
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




// import { useEffect, useState } from "react";
// import {
//   AiFillCaretLeft,
//   AiFillCaretRight,
//   AiFillPlusCircle,
// } from "react-icons/ai";
// let arr = [];
// const Projects = ({
//   setSection,
//   setProgress,
//   formData,
//   setFormData,
//   projectData,
//   setProjectData
// }) => {
//   const [projectCount, setProjectCount] = useState(1);
//   const [formFields, setFormFields] = useState([
//     {
//       title: "",
//       tech: "",
//       duration: "",
//       link: "",
//       description: "",
//       projectCount: projectCount,
//     },
//   ]);

//   useEffect(() => {
//     setFormData({ ...formData, projects: projectData });
//   }, [projectData]);

//   const handleTitle = (event, index) => {
//     let data = [...formFields];
//     data[index].title = event.target.value;
//     setFormFields(data);
//     console.log(data);
//   };
//   const handleTech = (event, index) => {
//     let data = [...formFields];
//     data[index].tech = event.target.value;
//     setFormFields(data);
//     console.log(data);
//   };
//   const handleDuration = (event, index) => {
//     let data = [...formFields];
//     data[index].date = event.target.value;
//     setFormFields(data);
//     console.log(data);
//   };
//   const handleLink = (event, index) => {
//     let data = [...formFields];
//     data[index].link = event.target.value;
//     setFormFields(data);
//     console.log(data);
//   };
//   const handleDescription = (event, index) => {
//     let data = [...formFields];
//     data[index].description = event.target.value;
//     setFormFields(data);
//     console.log(data);
//   };
//   const addFields = () => {
//     let object = {
//       title: "",
//       tech: "",
//       duration: "",
//       link: "",
//       description: "",
//       projectCount: projectCount + 1,
//     };
//     setFormFields([...formFields, object]);
//   };
//   return (
//     <>
//       {formFields.map((form, index) => {
//         return (
//           <>
//             <div
//               className="projectDetails w-[90%] sm:w-[60%] m-auto mt-7 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] pb-4"
//               key={index}
//             >
//               <div className="flex justify-between p-3 projectUpper">
//                 <div className="font-bold title">Project Details</div>
//                 <AiFillPlusCircle
//                   className="mt-1 mr-3 text-2xl cursor-pointer text-secondary"
//                   onClick={addFields}
//                 />
//               </div>
//               <div className="text-center projectMiddle">
//                 <h3 className="text-[#fff]">
//                   Project {formFields[index].projectCount}
//                 </h3>
//                 <hr className="text-[#fff] h-3 w-[70%] m-auto mt-1" />
//               </div>
//               <div className="projectBottom">
//                 <form>
//                   <div className="justify-around form1 sm:flex">
//                     <div className="flex-col pl-2 sm:block">
//                       <div className="mt-3">
//                         <label>Project Title</label>
//                       </div>
//                       <div>
//                         <input
//                           className=" h-8 w-[70vw] sm:w-[25vw] bg-[#fff] text-black rounded-md border border-gray-300 placeholder:text-gray-500 py-2 px-3 text-sm "
//                           type="text"
//                           placeholder="Name of the Project"
//                           onChange={(event) => handleTitle(event, index)}
//                           value={form.title}
//                         />
//                       </div>
//                     </div>
//                     <div className="pl-2">
//                       <div className="mt-3">
//                         <label>Technologies Used</label>
//                       </div>
//                       <div>
//                         <input
//                           className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
//                           type="text"
//                           placeholder="Select Technologies used in this Project"
//                           onChange={(event) => handleTech(event, index)}
//                           value={form.tech}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="justify-around mt-2 form2 sm:flex">
//                     <div className="pl-2">
//                       <div className="mt-3">
//                         <label>Project Duration</label>
//                       </div>
//                       <div>
//                         <input
//                           className=" h-8 w-[70vw] sm:w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300  py-2 px-3 text-sm placeholder:text-gray-500 "
//                           type="date"
//                           placeholder="Eg: Aug 2020 - Dec 2020"
//                           onChange={(event) => handleDuration(event, index)}
//                         />
//                       </div>
//                     </div>
//                     <div className="pl-2">
//                       <div className="mt-3">
//                         <label>Project Link / Github</label>
//                       </div>
//                       <div>
//                         <input
//                           className=" h-8 w-[70vw] sm:w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black  py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
//                           type="text"
//                           placeholder="Live Link"
//                           onChange={(event) => handleLink(event, index)}
//                           value={form.link}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pl-2 pr-2 m-auto mt-4 form3">
//                     <label>Project description</label>
//                     <textarea
//                       className="textarea textarea-lg w-[100%] m-auto rounded-lg text-black bg-white"
//                       placeholder="Write description about your project"
//                       onChange={(event) => handleDescription(event, index)}
//                       value={form.description}
//                     ></textarea>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </>
//         );
//       })}
//       {
//         setProjectData(
//           [...projectData,
//           formFields.map((form, index) => {
//           proj = {
//               name: form.title,
//               description: form.description,
//               duration: form.duration,
//               link: form.link,
//               techStack: form.tech,
//             };
//             return proj;
//           })]
//         )
//    }
//       {/* {setFormData({ ...formData, projects: arr })} */}
//       <div className="flex justify-between pt-3 pb-3 pl-5 pr-5 nextPrevButton sm:hidden">
//         <h3
//           className="text-[#fff] text-lg "
//           onClick={() => {
//             setSection("Skills"), setProgress(50);
//           }}
//         >
//           Prev
//           <AiFillCaretLeft className="inline-block ml-2" />
//         </h3>
//         <h3
//           className="text-[#fff] text-lg"
//           onClick={() => {
//             setSection("Experience"), setProgress(100);
//           }}
//         >
//           Next
//           <AiFillCaretRight className="inline-block ml-2" />
//         </h3>
//       </div>
//     </>
//   );
// };

// export default Projects;
