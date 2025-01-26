import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const blogs = await fetch("http://localhost:5000/blogs/").then((res) =>
    res.json()
  );
  console.log(blogs)
  return blogs.slice(0, 3).map((blog: Blog) => {
    blogId: blog.id;
  });
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const blogId = (await params).blogId;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blogDetails = await res.json();
  return (
    <div className="my-5">
      <BlogDetails blog={blogDetails} />
    </div>
  );
};

export default BlogDetailsPage;
