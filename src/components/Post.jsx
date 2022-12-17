const Post = () => {
  return (
    <div className="container flex-col mb-[12px] shadow-md px-6 bg-white">
      <div className="top flex items-center">
        <img
          src="https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="
          alt=""
          className="w-[35px] h-[35px] rounded-full mr-[20px]"
        />
        <div className="deta flex-[4] text-[10px]">
          <h6>Amina Halima</h6>
          <p>Front-end Developer</p>
          <p>i hour ago</p>
        </div>
        <button className=" bg-teal-900 text-white p-1 rounded-md text-[12px] mr-12 hover:bg-white hover:text-teal-900 hover:border-[2px] hover:border-solid hover:border-teal-800">Follow</button>
      </div>
      <textarea name="text" id="text" ></textarea>
    </div>
  );
};

export default Post;
