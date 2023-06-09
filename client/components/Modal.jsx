import { MultiSelect } from "@mantine/core";
import { useState } from "react";
const Modal = ({
  openModal,
  modalClick,
  projectIdea,
  setProjectIdea,
  create,
  loadingCreation,
}) => {
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
      {modalClick && (
        <div className="absolute z-50 w-[100%]  flex justify-center backdrop-blur-md h-full">
          {" "}
          <div className=" text-white bg-[rgba(0,0,0,0.67)] sm:mt-2 mt-20  sm:w-[60%] w-[90%] h-fit flex flex-col items-center rounded-md">
            <div
              onClick={openModal}
              className="flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer"
            >
              ✕
            </div>
            <div className=" flex flex-col items-center justify-center w-[70%] text-sm font-semibold">
              <h1 className="mb-2 text-2xl font-semibold">
                Create Project Idea
              </h1>
              <div className="w-full m-2 text-lg">
                <p>Project Name</p>
                <input
                  className="w-full p-2 bg-black border-[0.05rem] rounded-md font-normal text-gray-300"
                  type="text"
                  onChange={(e) => {
                    setProjectIdea({ ...projectIdea, name: e.target.value });
                  }}
                  value={projectIdea?.name}
                />
              </div>
              <div className="w-full m-2 text-lg">
                <p>Description</p>
                <textarea
                  onChange={(e) => {
                    setProjectIdea({
                      ...projectIdea,
                      description: e.target.value,
                    });
                  }}
                  value={projectIdea?.description}
                  className="w-full p-2 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="w-full m-2 text-lg">
                <p>Skillset Required</p>
                {/* <input
                  className="w-full py-1 my-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  type="text"
                /> */}
                <MultiSelect
                  className="w-full text-lg bg-black placeholder:text-lg"
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
                  value={projectIdea?.tags}
                  onChange={(value) => {
                    setProjectIdea({ ...projectIdea, tags: value });
                  }}
                />
              </div>
              <div className="w-full m-2 text-lg">
                <div className="flex">
                  <p className="pr-1">Url </p>
                  <p className="font-normal text-gray-300"> (optional)</p>
                </div>
                <input
                  className="w-full p-2 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  type="text"
                />
              </div>
              <div className="flex justify-end w-full m-2 mb-4 ">
                <button
                  onClick={create}
                  className="bg-[#E40E82] py-2 px-4 rounded-xl font-semibold text-lg"
                  disabled={loadingCreation}
                >
                  {loadingCreation ? "CREATING..." : "CREATE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
