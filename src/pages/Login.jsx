import GoogleImg from "../assets/googleimg.png";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!(email && password)) {
        return seterror("All values are required.");
      }
      setloading(true);
      let res = await axios.post("https://172.20.10.5:5000/auth/signin", {
        email,
        password,
      });
      console.log(res.data, " ////");
      setTimeout(() => {
        setloading(false);
      }, 2000);
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };
  return (
    <div className="login h-screen bg-slate-50 flex flex-row items-center justify-center">
      <div className="flex shadow-sm rounded-md justify-center w-[65%] mx-auto h-[500px] ">
        <div className="flex bg-white flex-[1] flex-col items-center justify-center ">
          <div className=" flex items-center flex-col ">
            <h1 className=" font-bold text-xl text-center font-[poppins] ">
              Welcome Back
            </h1>
            <p className="text-gray-400 font-light">
              Welcome back please enter your details.
            </p>
          </div>
          <div></div>
          <form className="flex flex-col mt-[20px] w-[80%] ">
            {error ? (
              <div className="text-[10px] font-italic text-red-400">
                {error}
              </div>
            ) : null}
            <label className=" mx-0 text-sm mb-2">Email</label>
            <input
              className="p-[10px] h-[40px] placeholder:font-light placeholder:text-sm border-2  rounded-md outline-teal-300"
              type="text"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label className="my-[10px] mx-0 text-sm">Password</label>
            <input
              className="p-[10px] h-[40px]  border-2 placeholder:font-light placeholder:text-sm  rounded-md outline-teal-300 "
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="flex items-center justify-between mt-[12px] w-full">
              <span className="flex items-center">
                <input type="checkbox" />
                <label className="ml-[5px] text-[12px] font-semibold text-zinc-600">
                  Rememeber me.
                </label>
              </span>
              <a className="text-[12px] cursor-pointer font-semibold text-zinc-600">
                Forget password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className="p-[5px] text-sm font-semibold  bg-teal-500 rounded-full mt-[12px] h-[40px] hover:bg-teal-900  hover:text-white transition-all delay-100"
            >
              {loading ? "loading..." : "Login"}
            </button>

            <button className="ml-[5px] mt-4 border w-full p-1 h-[40px] rounded-md hover:border-black hover:border-1 transition ease-in-out delay-150 flex flex-row items-center justify-center">
              <div className="w-[15px] h-[15px] ">
                <img
                  src={GoogleImg}
                  alt={"Google image"}
                  width={"100%"}
                  height={"100%"}
                  loading="lazy"
                />
              </div>
              <div className="text-[13px] pl-6 font-semibold text-zinc-600">
                Sign up with Google.
              </div>
            </button>
          </form>
          <div className="flex items-center mt-[15px]">
            <div className="text-[12px] text-gray-400">
              Don't have an account?{" "}
              <span className="font-bold pl-1 text-teal-900">
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
          .
        </div>
        <div className="Right relative  flex flex-1 flex-col items-center bg-[url('https://i.pinimg.com/originals/be/1f/93/be1f93f710cfe7edd9800e7532d6d292.jpg')] bg-cover bg-no-repeat bg-slate-300">
          <div className="flex items-center justify-center w-[70%] bg-white bg-opacity-20 backdrop-blur-md absolute bottom-[10%]">
            <p className="flex text-white p-[20px]">
              I have never experienced such level of audience <br />
              T-blog is such a big stage to share new expriences and story{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
