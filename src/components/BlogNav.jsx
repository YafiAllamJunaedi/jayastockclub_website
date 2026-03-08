const BlogNav = ({ blogs, onSelectBlog }) => {
  return (
    <div className="w-full md:w-3/12 bg-white shadow-2xl h-80 flex flex-col p-5 md:p-7 order-2 md:order-1 overflow-y-scroll ">
      <div className="w-full h-12 bg-neutral-300 flex justify-center items-center">
        <p className="font-semibold">Other Blogs</p>
      </div>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => onSelectBlog(blog)}
          className="border-b border-neutral-300 p-5 cursor-pointer hover:text-blue-700"
        >
          <p className="font-semibold underline">{blog.judul}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogNav;