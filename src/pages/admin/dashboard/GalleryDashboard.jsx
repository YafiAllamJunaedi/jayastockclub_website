import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
import DetailPanel from "../../../components/DetailPanel.jsx";
import GalleryAddModal from "../../../components/DashboardModal/ModalAddData/GalleryModal.jsx";
import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
import { getGallery, editGallery, deleteGallery } from "../../../services/API/galleryAPI.js";
import DashboardCard from "../../../components/DashboardCard.jsx";

const galleryFields = [
  { key: "judul", label: "judul", type: "text" },
  { key: "date", label: "date", type: "date" },
  { key: "createdAt", label: "Created At", type: "text", disabled: true },
];

const GalleryDashboard = () => {
  const [gallery, setGallery] = useState([])
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  const [selectedGalleryId, setSelectedGalleryId] = useState(null)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery();
        setGallery(data);
      } catch (err) {
        setError("Gagal mengambil data prestasi");
      }
    };

    fetchGallery();
  }, []);

  const handleOpenForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  const handleSaveGalleryFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("type", selected.type);

      if (imageFile) {
        formData.append("img", imageFile);
      }

      await editGallery(selected.id, formData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditGallery = async () => {
    try {
      await editGallery(selected.id, {
        type: selected.type,
        createdAt: selected.createdAt,
      });
    } catch (error) {
      console.error(error);
      alert("Gagal update data");
    }
  };

   const handleDeleteSuccess = async () => {
    try {
      await deleteGallery(selectedGalleryId);
  
      setGallery(prev =>
        prev.filter(p => p.id !== selectedGalleryId)
      );
  
      setDeleteOpen(false);
      setSelectedGalleryId(null);
      setSelected(null);
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };
  console.log(gallery);

  const openDelete = (id) => {
    setSelectedGalleryId(id);
    setDeleteOpen(true)
  }

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedGalleryId(null);
  }

  return (
    <div className="flex justify-center items-center h-screen text-[#007571]">
      <child gallery = {gallery} setGallery = {setGallery}/>
      {/* SIDEBAR */}
      <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
        <DashboardSidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
        {/* HEADER */}
        <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 bg-graent-to-l from-[#003835]/40 to-[#007471]/40">
          <div className="w-full px-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Gallery</p>

            <div
              onClick={handleOpenForm}
              className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-gradient-to-l from-[#003835] to-[#007471] text-white font-semibold flex justify-center items-center"
            >
              Add <FaPlus />
            </div>
          </div>
        </div>

        {isFormVisible && <GalleryAddModal onClose={handleCloseForm} />}
        {isDeleteOpen &&  (<ModalDelete id={selectedGalleryId} onClose={closeDelete} onDelete={handleDeleteSuccess}/>)}
        
        {/* BODY */}
        <div className="w-full h-full overflow-hidden">
          <div className="flex w-full h-full py-4 gap-4">
            {/* LIST */}
            <div
              className={`${
                selected ? "w-1/2" : "w-full"
              } h-full overflow-y-auto transition-all duration-300`}
            >
              <div className="grid grid-cols-1 gap-4">
                {gallery.map((item) => (
                  <DashboardCard
                    key={item.id}
                    division={item.type}
                    image={`http://localhost:3008/uploads/${item.img}`}
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
                    onDelete={() => console.log("delete", item.id)}
                  />
                ))}
              </div>
            </div>

            {/* DETAIL PANEL */}
             {selected && (
              <DetailPanel
                title="gallery"
                fields={galleryFields}
                data={selected}
                Type={selected.type}
                image={`http://localhost:3008/uploads/${selected.img}`}
                setGallery={setGallery}
                onDeleteSuccess={handleDeleteSuccess}
                active={active}
                onToggle={setActive}
                createdAt={selected.createdAt}
                onChange={(field, value) =>
                  setSelected((prev) => ({
                    ...prev,
                    [field]: value,
                  }))
                }
                onEdit={handleSaveGalleryFormData}
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

export default GalleryDashboard;