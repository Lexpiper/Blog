import Navbar from "../components/Navbar";
import Create from "../components/Create";
import UserBar from "../components/UserBar";
import Stat from "../components/Stat";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
const Home = () => {
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   (async () => {
  //     try{
  //       let res  = await axios.get("/articles")

  //       setdata(res.data.data)
  //     }catch(err){
  //       console.log(err.message)
  //     }
  //   })()
  //   return () => {
  //   }
  // }, [])

  const [data, setData] = useState([]);

  useEffect(() => {
    async () => {
      try {
        let res = await get("/articles");
        setData(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    return () => {};
  }, []);

  return (
    <div className="home bg-[#f3f2ef]">
      <Navbar />
      <div className=" flex item-center w-[80%] mx-auto pt-5 gap-4">
        <UserBar />
        <div className="flex-[3] px-3 bg-transparent">
          <Create />
          {data.map((item, index) => (
            <Post key={item._id} item={item} />
          ))}
        </div>
        <Stat />
      </div>
    </div>
  );
};

export default Home;
