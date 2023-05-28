import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "Java", label: "Java" },
  { value: "ReactJs", label: "ReactJs" },
  { value: "Tailwind", label: "Tailwind" },
];


const Skills = ({ setSection, setProgress, formData, setFormData }) => {
  const [data,setData]=useState([]);

  useEffect(() => {
    setFormData({ ...formData, skills: data });
  }, [data]);



  return (
    <>
      <div className="skillDetails w-[90%] sm:w-[60%] h-[40vh] m-auto mt-7 pt-2 sm:pt-2 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg ">
        <CreatableSelect
          isMulti
          options={options}
          onChange={(values) => {
            setData( values.map((val)=>{
              return val.value
             
            })) 
         
         
            
          }}
        />

      </div>
      <div className="flex justify-between pt-3 pl-5 pr-5 nextPrevButton sm:hidden">
        <h3
          className="text-[#fff] text-lg "
          onClick={() => {
            setSection("Bio"), setProgress(25);
          }}
        >
          Prev
          <AiFillCaretLeft className="inline-block ml-2" />
        </h3>
        <h3
          className="text-[#fff] text-lg"
          onClick={() => {
            setSection("Project"), setProgress(75);
          }}
        >
          Next
          <AiFillCaretRight className="inline-block ml-2" />
        </h3>
      </div>
    </>
  );
};

export default Skills;
