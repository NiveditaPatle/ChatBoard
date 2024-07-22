import React from "react";
import Profile from "../assets/Ellipse.png";
import Dots from "../assets/Dots_Horizontal.png";
import { BsChatSquare } from "react-icons/bs";

const PostCard = () => {
  return (
    <div className="bg-[#27292D] rounded-lg px-6 py-3 mt-4 border border-gray-700">
      <div className="flex justify-between pb-3">
        <div className="flex">
          <div className="pr-3 border-0 rounded-full">
            <img src={Profile} alt="profile-img" />
          </div>
          <div>
            <p className="text-[#C5C7CA]">Theresa Webb</p>
            <p className="text-[#7F8084]">5 mins ago</p>
          </div>
        </div>
        <div className="pt-2">
          <img src={Dots} alt="dots" />
        </div>
      </div>
      <div className="flex items-start bg-regal-black p-3 rounded-md">
        <div className="bg-[#27292D] p-4 m-3 rounded-full">👋</div>
        <div className="flex-1 ">
          <p className="bg-regal-black w-full h-14 p-2 resize-none text-[#7F8084]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="flex pt-3">
        <div className="pt-2 pr-2">
          <BsChatSquare className="text-[#7F8084]" />
        </div>
        <div className="text-[#7F8084]">24 comments</div>
      </div>
    </div>
  );
};

export default PostCard;
