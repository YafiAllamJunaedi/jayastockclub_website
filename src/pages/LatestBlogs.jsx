import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import { getBlog } from "../services/DB.js";
import BlogNav from "../components/BlogNav.jsx";
import { useLocation } from "react-router-dom";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // TAMBAHAN
  const location = useLocation();
  const selectedId = location.state?.selectedId;

  useEffect(() => {

    const fetchBlog = async () => {
      try {
        const data = await getBlog();
        setBlogs(data);

        if (selectedId) {
          const foundBlog = data.find(
            (item) => Number(item.id) === Number(selectedId)
          );
          setSelectedBlog(foundBlog || data[0]);
        } else {
          setSelectedBlog(data[0]);
        }

      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [selectedId]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="w-full flex flex-col md:flex-row p-4 md:p-10 gap-5">

          <BlogNav 
            blogs={blogs}
            onSelectBlog={setSelectedBlog}
          />

          {selectedBlog && (
            <div className="w-full md:w-9/12 p-3 order-1 md:order-2">
              <div className="border-b border-neutral-300 p-5">
                <p className="font-bold text-xl text-center md:text-start">
                  {selectedBlog.judul}
                </p>
              </div>

              <div className="w-full flex flex-col items-center pt-3">
                <img
                  className="w-32"
                  src={`http://localhost:3008/uploads/${selectedBlog.img}`}
                  alt={selectedBlog.judul}
                />
                <p className="p-3">{selectedBlog.paper}</p>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LatestBlogs;