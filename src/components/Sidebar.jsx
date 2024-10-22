import React from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 hidden text-white   lg:flex">
      <div className="bg-[#121212] h-[15%]  rounded  flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-10" src={assets.home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-10" src={assets.search_icon} alt="" />
          <p>Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-10" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light"> it`s easy we will help you</p>
          <button className="w-full h-[40px] bg-[#333] text-white font-semibold rounded-md">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let`s find some podcasts to follow</h1>
          <p className="font-light">we will keep you update on new episode</p>
          <button className="w-full h-[40px] bg-[#333] text-white font-semibold rounded-md">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
