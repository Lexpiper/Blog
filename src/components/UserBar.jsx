import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";
import googleimg from "../assets/googleimg.png";

const UserBar = () => {
  const [file, setfile] = useState("");

  return (
    <div className="flex-[1] h-[100vh] flex flex-col ites-center bg-white ">
      <div className="relative rounded-md bg-green ">
      <div className="   bg-red-300 h-[80px] w-full rounded-md mb-[3.5rem]" >
        <div className=" bg-slate-500 h-[70px] w-[70px] rounded-full absolute  bottom-8 right-[4em]"></div>
   
        {/* <div className="w-[80px] h-[80px] rounded-full  bg-slate-500 absolute top-[20%] right-[33%] items-center  ">
          <div className="flex w-40%">
            <img
              src={ file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="image"
              width={100} height={100}
              className="w-[full] h-[full] object-cover rounded-full bg-blend-lighten"
            />
            <label htmlFor="file" className="absolute   right-0 bottom-0 bg-gray-200">
              <DriveFolderUploadIcon
                fontSize="small"
                className="cursor-pointer text-black p-1 bg-transparent"
              />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setfile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
        </div> */}
      </div>
      </div>
      

      <div className=" flex flex-col items-center">
        <h6 className="text-sm">Zannu Julius</h6>
        <p className=" text-xs  font-light">Frontend Engineer 💻</p>
      </div>

      <div>
        <span className="text-sm flex items-center justify-between px-2 pb-1 hover:bg-slate-100 cursor-pointer mt-4 ">
          <p className="text-xs">who viewed your post</p>
          <span className="text-sm">5</span>
        </span>
        <span className="text-sm flex items-center justify-between px-2 pb-1 hover:bg-slate-100 cursor-pointer ">
          <p className="text-xs">impressions on your post</p>
          <span className="text-sm">5</span>
        </span>
      </div>

      <div className="text-xs flex flex-col p-2 mt-4">
        <span className="text-slate-400 font-extralight mb-1">
          Access exclusive tools & insights
        </span>
        <a className=" underline cursor-pointer">Try premium for free</a>
      </div>

      <h4 className="text-xs p-2 mt-4">
        <span>🚩</span> My Post
      </h4>
    </div>
  );
};

export default UserBar;
