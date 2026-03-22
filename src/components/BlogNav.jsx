const BlogNav = ({ blogs, onSelectBlog, selectedBlog }) => {
  return (
    <div className="w-full md:w-3/12 bg-white shadow-2xl h-200 flex flex-col p-5 md:p-7 order-2 md:order-1 overflow-y-scroll ">
      <div className="w-full h-12 bg-neutral-300 flex justify-center items-center">
        <p className="font-semibold">Other Blogs</p>
      </div>

      {blogs.map((blog) => {
        const isActive = selectedBlog?.id === blog.id;

        return (
          <div
            key={blog.id}
            onClick={() => onSelectBlog(blog)}
            className={`border-b border-neutral-300 p-5 cursor-pointer transition-all duration-200
        ${
          isActive
            ? "text-blue-700 "
            : "hover:text-blue-700"
        }
      `}
          >
            <p className="font-semibold underline">{blog.judul}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogNav;
