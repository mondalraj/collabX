import React from 'react'

const LandingPage = () => {
  return (
    <>
      <div className="p-10 text-center conatiner1">
      <div className='text-[#897878] text-3xl font-bold'>CollabX </div>
      <a href="#my-modal-2" className="mt-5 btn">open modal</a>
      <div className="modal" id="my-modal-2"  >
        <div className="modal-box">
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You &apos ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action"> 
          <a href="#" className="btn">Yay!</a>
          </div>
        </div>
      </div>
      </div>
    </>

    
  )
}

export default LandingPage
