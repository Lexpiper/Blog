import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Tooltip } from "@mui/material";

const Modal = ({ modal, onClose }) => {
  const [color, setColor] = useState(false);

  if (!modal) return null;

  const handleDelete = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-0 justify-center items-center z-10 pt-10 "
      onClick={() => handleDelete()}
    >
      <div className="w-[500px] h-[50vh] flex flex-col mx-auto bg-white rounded-xl   p-2">
        <span className="flex flex-row w-full  justify-between items-center p-2 mb-2 rounded">
          <h5 className="text-lg text-black p-1">Create a post</h5>
          <CloseIcon
            className="text-gray-400 text-xl place-self-end cursor-pointer"
            id="wrapper"
            onClick={() => onClose()}
          />
        </span>
        <div className=" flex items-center p-2 w-full">
          <div className="w-10 h-10 rounded-full flex-none mr-2">
            <img
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="photo"
              height="100"
              width="100"
              className="align-middle w-full h-full rounded-full "
            />
          </div>
          <p className="text-sm">Zannu Julius</p>
        </div>

        <div className="p-4 w-full h-full text-sm ">
          <textarea
            className=" resize-none w-full h-full  outline-none"
            placeholder="What do you want to talk about ?"
            onInput={() => setColor(true)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <Tooltip
            title="Add  picture"
            style={{ backgroundColor: "#eee", fontSize: "40px" }}
            arrow
          >
            <InsertPhotoIcon color="primary" />
          </Tooltip>
          <div />
          <div
            className={`${
              color === true
                ? "bg-teal-900 place-self-end px-3 py-1 text-sm text-white rounded-full"
                : "place-self-end px-3 py-1 bg-gray-200 text-sm text-gray-400 rounded-full"
            } cursor-pointer`}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
