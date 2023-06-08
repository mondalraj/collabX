const RoomModal = ({
  openModal,
  modalClick,
  createProposal,
  setCreateProposal,
  submitNewProposal,
}) => {
  return (
    <>
      {modalClick && (
        <div className="absolute z-50 w-[100%]  flex justify-center backdrop-blur-md h-screen">
          {" "}
          <div className=" text-white bg-[rgba(0,0,0,0.67)] mt-20  sm:w-[60%] w-[90%] sm:h-[70vh] h-[60vh] flex flex-col items-center rounded-md">
            <div
              onClick={openModal}
              className="flex justify-end w-full px-6 pt-4 text-xl font-semibold cursor-pointer"
            >
              ✕
            </div>
            <div className=" flex flex-col items-center justify-center w-[70%] text-sm font-semibold">
              <h1 className="mb-2 text-xl font-semibold">Create Proposal</h1>
              <div className="w-full m-2">
                <p>User Address</p>
                <input
                  className="w-full p-1 my-1 bg-black border-[0.05rem] rounded-md font-normal text-gray-300"
                  type="text"
                  value={createProposal?.address}
                  readOnly
                  disabled
                />
              </div>
              <div className="w-full m-2">
                <p>Description</p>
                <textarea
                  onChange={(e) => {
                    setCreateProposal({
                      ...createProposal,
                      desc: e.target.value,
                    });
                  }}
                  value={createProposal?.desc}
                  className="w-full my-1 p-1 rounded-md bg-black border-[0.05rem] font-normal text-gray-300"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div className="flex justify-end w-full m-2 mb-4 ">
                <button
                  className="bg-[#E40E82] py-1 px-4 rounded-xl font-semibold"
                  onClick={submitNewProposal}
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomModal;
