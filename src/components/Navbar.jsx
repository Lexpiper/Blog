import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Signup from "../pages/Signup";

const Navbar = () => {
  return (
    <div className="w-full bg-white drop-shadow-sm h-[50px] p-1 ">
      <div className="w-[80%] mx-auto  h-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="h-[28px] w-[28px] bg-sky-600 flex flex-row items-center justify-center rounded-sm drop-shadow-sm mr-2">
            <div className="text-white font-bold">iN</div>
          </div>
          <div className="flex items-center  bg-sky-50 ">
            <SearchIcon />
            <input
              type="text"
              placeholder="search"
              className=" bg-sky-50 border-none outline-none p-1 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center py-2 ">
          <Link to="/login">
            <div className="cursor-pointer text-md text-white   px-2 py-1 font-semibold rounded-md bg-teal-800 hover:bg-white hover:text-teal-900 hover:border-teal-900 hover:border-solid hover:border-2">
              <span className=" animate-pulse transition-all delay-100">
                Login
              </span>{" "}
            </div>
          </Link>
          <Link to="/signup">
            <div className="cursor-pointer text-md  px-2 py-1 font-semibold rounded-md border-[1px]  border-black ml-3 border-solid hover:text-teal-800">
              Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="flex h-[60px] border-b-gray-600 border-b-[0.5px] items-center justify-between w-full hidden">
// <div className="flex items-center p-[20px] w-full justify-between sticky top-0">
//   <div className="flex flex-[3] items-center gap-[10px]  ">
//     <h1 className="text-[14px] font-extrabold">T-Blog</h1>
//     <div className="flex items-center ml-[2px] border-[0.5px] p-[5px] border-b-[lightgray] border-solid">
//       <input
//         type="text"
//         placeholder="search"
//         className=" bg-transparent border-none outline-none"
//       />
//       <SearchIcon fontSize="small" className="text-slate-300  " />
//     </div>
//   </div>
//   <div className=" flex flex-[6] p-0 items-center justify-center text-{12px] font-light">
//     <Link className="flex items-center mr-[10px]" to="/">
//       <HomeOutlinedIcon fontSize="small" color="disabled" />
//       <span>Home</span>
//     </Link>
//     <Link className="flex items-center mr-[10px]" to="/">
//       <HomeOutlinedIcon fontSize="small" color="disabled" />
//       <span>About</span>
//     </Link>
//     <Link className="flex items-center mr-[10px]" to="/">
//       <HomeOutlinedIcon fontSize="small" color="disabled" />
//       <span>Contact</span>
//     </Link>
//     <Link className="flex items-center" to="/">
//       <HomeOutlinedIcon fontSize="small" color="disabled" />
//       <span>Write</span>
//     </Link>

//   </div>
//   <div className=" flex flex-[3] items-center justify-end gap-[12px] self-end">
//     <div className="imagcon">
//       <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="image"className="w-[30px] h-[30px] rounded-full" />
//     </div>
//     <Link className="flex items-center" to="/signup">
//       <button className="bg-red-200 p-[5px] rounded-md">Logout</button >
//     </Link>
//   </div>
// </div>
// </div>
