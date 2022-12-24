import Navbar from "../components/Navbar";
import Create from "../components/Create";
import UserBar from "../components/UserBar";
import Stat from "../components/Stat";
import Post from "../components/Post";


const Home = () => {
  return (
    <div className="home bg-[#f3f2ef]">
      <Navbar />
      <div className=" flex item-center w-[80%] mx-auto pt-5 gap-4">
        <UserBar />
        <div className="flex-[3] px-3 bg-transparent">
          <Create />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
         
          
        </div>
        <Stat />
      
      </div>
    </div>
  );
};

export default Home;
