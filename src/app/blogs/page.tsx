"use client";
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { useGetBlogsQuery } from "@/redux/api/baseApi";

const BlogPage = () => {
  const { data: blogs, error, isLoading, isError } = useGetBlogsQuery("");
  
  console.log(blogs);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid lg:grid-cols-3 gap-4 p-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
