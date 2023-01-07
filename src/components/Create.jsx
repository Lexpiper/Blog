import React, { useState } from "react";
import Modal from "./Modal";

const Create = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className=" h-[10vh] rounded-md text-xs mb-2">
      <div className="create bg-white rounded-lg p-2">
        <div className="flex items-center justify-center">
          <img
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            alt="image"
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
          />
          <input
            type="text"
            placeholder="Write something...."
            id="open-modal"
            className="outline-teal-900 outline-[0.1] rounded-full h-[40px] w-full ml-2 border-solid border-[1px] border-black p-3 hover:bg-slate-100 cursor-text"
            onClick={() => setModal(true)}
            
          />
        
          {modal && <Modal modal={setModal} onClose={() => setModal(false)}/>}
        </div>
        {/* <div className="flex items-center justify-center  text-sm">
          <span className="flex  items-center hover:bg-slate-200 p-2 rounded-md">
            <img src={googleimg} alt="img" className="w-[10px] h-[10px] mr-2" />
            <p>Post</p>
          </span>
          <span className="flex  items-center hover:bg-slate-200 p-2 rounded-md">
            <img src={googleimg} alt="img" className="w-[10px] h-[10px] mr-2" />
            <p>Photo</p>
          </span>
        </div> */}
        {/* <div className="flex items-center text-xs">
          <div className="bg-black w-[70%] h-[0.5px] flex-[3] mr-2"></div>
          <span className="flex flex-[1] items-center justify-between">
            <p className="text-gray-400">Sort by:</p>
            <p className="font-semibold">
              Top <span className="cursor-pointer"> 🔽</span>{" "}
            </p>
            <p></p>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Create;
