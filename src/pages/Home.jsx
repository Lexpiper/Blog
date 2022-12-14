import Navbar from "../components/Navbar";
import Create from "../components/Create";
import UserBar from "../components/UserBar";
import Stat from "../components/Stat";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className=" flex item-center w-[80%] mx-auto">
        <UserBar />
        <div className="content flex-[3] px-3 ">
          <Create />
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
