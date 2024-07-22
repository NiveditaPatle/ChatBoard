import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-[#27292D] rounded-lg px-6 py-3 mt-4 border border-gray-700">
      <h1 className="text-[#C5C7CA] text-lg font pb-3">Create post</h1>
      <div className="flex items-start bg-regal-black p-3 rounded-md">
        <div className="bg-[#27292D] p-4 m-3 rounded-full">💬</div>
        <div className="flex-1">
          <textarea className="bg-regal-black w-full h-20 p-2 resize-none text-white" />
        </div>
      </div>
      <div className="w-full flex justify-end">
          <button className="bg-[#4A96FF] px-6 py-1 mt-4 rounded">Post</button>
        </div>
    </div>
  );
};

export default CreatePost;
