  import { useState, useEffect } from "react";
  import { FaPlus } from "react-icons/fa";
  import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
  import DetailPanel from "../../../components/DetailPanel.jsx";
  import BlogAddModal from "../../../components/DashboardModal/ModalAddData/BlogModal.jsx";
  import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
  import { getBlog, editBlog, deleteBlog } from "../../../services/API/blogAPI.js";
  import DashboardCard from "../../../components/DashboardCard.jsx";
  const API = import.meta.env.VITE_LINK_BE

  const blogFields = [
    { key: "judul", label: "judul", type: "text" },
    { key: "date", label: "date", type: "text" },
    { key: "paper", label: "paper", type: "textarea" },
  ];

  const BlogsDashboard = () => {
    const [blog, setBlog] = useState([]);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);
    const [active, setActive] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [selectedPengurusId, setSelectedPengurusId] = useState(null);

    const fetchBlog = async () => {
      try {
        const data = await getBlog();
        setBlog(data);
      } catch (err) {
        setError("Gagal mengambil data blog");
      }
    };

    useEffect(() => {
      fetchBlog();
    }, []);

    const handleOpenForm = () => setIsFormVisible(true);

    const handleCloseForm = async () => {
      setIsFormVisible(false);
      await fetchBlog();
    };

    const handleSaveblogFormData = async () => {
      try {
        const formData = new FormData();
        formData.append("judul", selected.judul);
        formData.append("date", selected.date);
        formData.append("paper", selected.paper);

        if (imageFile) {
          formData.append("img", imageFile);
        }

        await editBlog(selected.id, formData);

        await fetchBlog();
      } catch (err) {
        console.error(err);
      }
    };

    const handleDeleteSuccess = async () => {
      try {
        await deleteBlog(selectedPengurusId);

        setBlog(prev =>
          prev.filter(p => p.id !== selectedPengurusId)
        );

        setDeleteOpen(false);
        setSelectedPengurusId(null);
        setSelected(null);

        await fetchBlog();
      } catch (err) {
        console.error(err);
        alert("Gagal menghapus data");
      }
    };

    console.log(blog);

    const openDelete = (id) => {
      setSelectedPengurusId(id);
      setDeleteOpen(true);
    };

    const closeDelete = () => {
      setDeleteOpen(false);
      setSelectedPengurusId(null);
    };

    return (
      <div className="flex justify-center items-center h-screen text-[#007571]">
        <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
          <DashboardSidebar />
        </div>

        <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
          <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 bg-graent-to-l from-[#003835]/40 to-[#007471]/40">
            <div className="w-full px-6 flex justify-between items-center">
              <p className="text-xl font-semibold">Blogs</p>

              <div
                onClick={handleOpenForm}
                className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-gradient-to-l from-[#003835] to-[#007471] text-white flex justify-center items-center font-semibold"
              >
                Add <FaPlus />
              </div>
            </div>
          </div>

          {isFormVisible && <BlogAddModal onClose={handleCloseForm} />}
          {isDeleteOpen && (
            <ModalDelete
              id={selectedPengurusId}
              onClose={closeDelete}
              onDelete={handleDeleteSuccess}
            />
          )}

          <div className="w-full h-full overflow-hidden">
            <div className="flex w-full h-full py-4 gap-4">
              <div
                className={`${
                  selected ? "w-1/2" : "w-full"
                } h-full overflow-y-auto transition-all duration-300`}
              >
                <div className="grid grid-cols-1 gap-4 p-3">
                  {Array.isArray(blog) &&
  blog.map((item) =>
                  
                  (
                    <DashboardCard
                      key={item.id}
                      division={item.judul}
                      image={`${API}/uploads/${item.img}`}
                      description={item.date}
                      onClick={() =>
                        setSelected((prev) =>
                          prev?.id === item.id ? null : item
                        )
                      }
                      onClose={() =>
                        setSelected((prev) =>
                          prev?.id === item.id ? null : item
                        )
                      }
                      onEdit={() => console.log("edit", item.id)}
                      onDelete={() => openDelete(item.id)}
                    />
                  ))}
                </div>
              </div>

              {selected && (
                <DetailPanel
                  title="Blog"
                  fields={blogFields}
                  data={selected}
                  image={`${API}/uploads/${selected.img}`}
                  setBlog={setBlog}
                  onDeleteSuccess={handleDeleteSuccess}
                  active={active}
                  onToggle={setActive}
                  onChange={(field, value) =>
                    setSelected((prev) => ({
                      ...prev,
                      [field]: value,
                    }))
                  }
                  onEdit={handleSaveblogFormData}
                  onChooseImage={setImageFile}
                  onDelete={() => openDelete(selected.id)}
                  onClose={() => setSelected(null)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default BlogsDashboard;