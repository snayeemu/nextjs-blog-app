"use server";
import { Blog } from "@/types";

const CreateBlog = async (data: Blog) => {
  // Server Action

  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();

  return blogInfo;
};

export default CreateBlog;
