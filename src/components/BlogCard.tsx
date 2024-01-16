import React from "react";

interface ProsType {
  img: string;
  desc: string;
}
const BlogCard = ({ img, desc }: ProsType) => {
  return (
    <div className="hover:shadow-2xl cursor-pointer">
      <div>
        <img className="w-full" src={img} alt="blog_image" />
      </div>
      <div className="px-6 py-8 bg-white">
        <div className="flex justify-between items-center text-gray-500 pb-4">
          <p>By: Carnage</p>
          <p>15 jan 2024</p>
        </div>

        {desc}
      </div>
    </div>
  );
};

export default BlogCard;
