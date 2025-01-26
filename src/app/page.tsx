import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import next from "next";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: { revalidate: 30 },
  });
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
