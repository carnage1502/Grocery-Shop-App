import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    img: "/post-1.jpg",
    desc: "Sample Description add some text.....",
  },
  {
    img: "/post-2.jpg",
    desc: "Sample Description add some text.....",
  },
  {
    img: "/post-3.jpg",
    desc: "Sample Description add some text.....",
  },
  {
    img: "/post-4.jpg",
    desc: "Sample Description add some text.....",
  },
];

const Blogs = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Our Blogs</h2>

        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.desc} img={blog.img} desc={blog.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
