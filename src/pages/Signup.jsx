import React, { useState } from "react";
import GoogleImg from "../assets/googleimg.png";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSignUp = async () => {
    try {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // Check if email and password are valid
      if (!emailRegex.test(email) || password.length < 8 || !/\d/.test(password)) {
        setError("Please provide a valid email and password (minimum 8 characters, including a number)");
        
      }
        
      let res = await axios.post("https://172.20.10.5:5000/auth/signup", {
        firstname,
        lastname,
        email,
        password,
        phone,
      });
      console.log(res.data,"/////");
    } catch (err) {
      console.log(err.message);
     
      setTimeout(() => {
        setloading(false)
      }, 1000);
    }
  };
  return (
    <div className="sign up h-screen bg-slate-50 flex flex-col items-center justify-center pt-10 relative">
      <div className="bg-gray-200  rounded-full p-2 sticky top-0 cursor-pointer">
        <ArrowBackIcon/>
        </div>
      <h1 className="text-center pb-4 text-2xl font-bold ">
        Explore a world of intresting topics.
      </h1>
      <div className="bg-transparent rounded-md justify-center w-[50%] mx-auto h-[500px] ">
        <div className="bg-white w-[60%] mx-auto h-fit flex flex-col px-4 pb-5 shadow-md">
          {error ? <div className="text-red-500">{error}</div> : null}
          <form className="flex flex-col mt-[20px] w-full">
            <label className=" mx-0 text-sm mb-2">First Name</label>
            <input
              type="text"
              className="p-[10px] h-[40px] placeholder:font-light placeholder:text-sm border-1  rounded-md outline-teal-300"
              placeholder="Enter your First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              
            />
            <label className=" mx-0 text-sm mb-2">Last name</label>
            <input
              type="text"
              className="p-[10px] h-[40px] placeholder:font-light placeholder:text-sm border-1  rounded-md outline-teal-300"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              
            />
            <label className=" mx-0 text-sm mb-2">Phone number</label>
            <input
              type="tel"
              className="p-[10px] h-[40px] placeholder:font-light placeholder:text-sm border-1  rounded-md outline-teal-300"
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className=" mx-0 text-sm mb-2">Email</label>
            <input
              type="email"
              className="p-[10px] h-[40px] placeholder:font-light placeholder:text-sm border-1  rounded-md outline-teal-300"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className=" mx-0 text-sm mb-2">Password</label>
            <input
              type="password"
              className="p-[10px]  h-[40px] placeholder:font-light placeholder:text-sm border-1  rounded-md outline-teal-300"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-xs text-center pt-4 pb-4">
              By clicking Agree & Join, you agree to the{" "}
              <span className="text-teal-900 font-semibold"> T-blog </span>User
              Agreement, Privacy Policy, and Cookie Policy.
            </div>
            <div
              className="cursor-pointer bg-teal-500 p-2 text-center rounded-full hover:bg-teal-900 text-black hover:text-white transition-all delay-100 "
              onClick={handleSignUp}
            >
              {loading ? "Signing in": "Agree and Join"}
            </div>
            <div className="ml-[5px] mt-4 border w-full p-1 h-[40px] rounded-full hover:border-black hover:border-1 transition ease-in-out delay-150 flex flex-row items-center justify-center">
              <div className="w-[15px] h-[15px] ">
                <img
                  src={GoogleImg}
                  alt={"Google image"}
                  width={"100%"}
                  height={"100%"}
                  loading="lazy"
                />
              </div>
              <button className="text-[13px] pl-6 font-semibold text-zinc-600">
                Sign up with Google.
              </button>
            </div>
            <div className="text-xs text-center p-2">
              Already a T-blog User?
              <span className="font-bold pl-1 text-teal-900">
                <Link to="/login">Log in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
