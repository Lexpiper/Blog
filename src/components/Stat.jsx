import { Link } from "react-router-dom";
const Stat = () => {
  return (
    <div className="flex-[1.5] h-[80vh] flex flex-col sticky top-11 p-1  bg-white rounded-lg shadow-md ">
      <h2 className="text-left p-2 font-bold">Add to your feed</h2>

      <div className="flex text-sm items-center p-2  w-full mb-3">
        <div className=" flex-[1] mb-10">
          <img
            src="https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="
            alt=""
            className="w-[50px] h-[50px] rounded-full  "
          />
        </div>

        <div className="flex flex-[2] flex-col ">
          <h6 className="text-slate-500 font-bold mb-2">Malik Hakimi</h6>
          <p className="text-sm font-extralight leading-4 pb-2">
            Software Engineer - Backend - 
      
          </p>
          <div className="border-[1px] rounded-full w-fit p-1 hover:bg-slate-200 hover:border-black hover:transition-all ease-in-out delay-100">
            <span>➕</span> Follow
          </div>
        </div>
      </div>

      <div className="flex text-sm items-center p-2 w-full">
        <div className=" flex-[1] mb-10">
          <img
            src="https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="
            alt=""
            className="w-[50px] h-[50px] rounded-full  "
          />
        </div>

        <div className="flex flex-[2] flex-col ">
          <h6 className="text-slate-500 font-bold mb-2">Malik Hakimi</h6>
          <p className="text-sm font-extralight leading-4 pb-1">
            Software Engineer - Backend - M
          </p>
          <div className="border-[1px] rounded-full w-fit p-1 hover:bg-slate-200 hover:border-black hover:transition-all ease-in-out delay-100">
            <span>➕</span> Follow
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 text-sm">
         <h3 className="text-gray-500 text-lg">Categories</h3>
         <div className="flex flex-col items-center justify-center">
          <Link>
              Sports
          </Link>
          <Link>
            Technology
          </Link>
          <Link>
              Finance
          </Link>
          <Link>
              Sports
          </Link>
         </div>
      </div>
    </div>
  );
};

export default Stat;
