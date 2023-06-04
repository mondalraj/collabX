import { AiFillCaretRight } from "react-icons/ai";
const Bio = ({
  section,
  setSection,
  progress,
  setProgress,
  formData,
  setFormData,
}) => {
  return (
    <>
      <div className="bioDetails  w-[90%] sm:w-[60%] h-[30vh] m-auto mt-7  rounded-lg text-[#fff]">
        <textarea
          className="textarea textarea-lg w-full h-[30vh] m-auto   rounded-lg text-[#fff]"
          placeholder="Add Bio"
          style={{ background: "rgba(133, 0, 72, 0.16)" }}
          value={formData.bio}
          onChange={(e) => {
            setFormData({ ...formData, bio: e.target.value });
          }}
        ></textarea>
        <h3
          className="text-[#fff] absolute sm:hidden left-[70%] xs:left-[80%] top-[80%]"
          onClick={() => {
            setSection("Skills"), setProgress(50);
          }}
        >
          Next
          <AiFillCaretRight className="inline-block ml-2" />
        </h3>
      </div>
    </>
  );
};

export default Bio;
