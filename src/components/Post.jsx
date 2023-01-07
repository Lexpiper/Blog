
const Post = ({item}) => {

  
  return (
    <div className="container h-fit flex-col mb-[12px] shadow-md  p-2 bg-white text-sm gap-3 border-solid pb-4 rounded-lg">
      <div className="top flex items-center">
        <img
          src="https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="
          alt=""
          className="w-[35px] h-[35px] rounded-full mr-[20px]"
        />
        <div className="deta flex-[4] text-sm p-2 ">
          <h6 className=" text-sm font-bold">{item.userId.firstname[0].toUpperCase() + item.userId.firstname.substring(1)} {item.userId.lastname}</h6>
          <p>Front-end Developer</p>
          <p className="text-xs font-light">1 hour ago</p>
        </div>
        <button className=" bg-teal-900 text-white px-2 py-1 rounded-md text-sm mr-12 hover:bg-white hover:text-teal-900 hover:border-[2px] hover:border-solid hover:border-teal-800">
          Follow
        </button>
      </div>

      <div className=" h-40 flex flex-col p-2 ">
        <div className="  h-fit w-full p-2 text-sm outline-none overflow-hidden">
          {item.content.substring(0, 30) + "..."}
        </div>
        <div className="text-xs px-2 bg-teal-900 text-white w-fit py-1 rounded-xl cursor-pointer transform hover:-translate-y-1 transition delay-100">more</div>
      </div>
      

      <div className=" h-44 w-full flex container  ">
        <img
          src={`http://108.174.203.155:5000/${item.image}`}
          alt="image post"
          width="100%"
          height="100%"
          className="object-cover  "
        />
      </div>
    </div>
  );
};

export default Post;
