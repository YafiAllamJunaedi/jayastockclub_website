import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
import DetailPanel from "../../../components/DetailPanel.jsx";
import CarouselAddModal from "../../../components/DashboardModal/ModalAddData/CarouselModal.jsx";
import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
import { getCarousel, editCarousel, deleteCarousel } from "../../../services/API/carouselAPI.js";
import DashboardCard from "../../../components/DashboardCard.jsx";

const carouselFields = [
  { key: "type", label: "type", type: "text" },
  { key: "createdAt", label: "Created At", type: "text", disabled: true },
];

const CarouselDashboard = () => {
  const [carousel, setCarousel] = useState([])
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  const [selectedCarouselId, setSelectedCarouselId] = useState(null)

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const data = await getCarousel();
        setCarousel(data);
      } catch (err) {
        setError("Gagal mengambil data prestasi");
      }
    };

    fetchCarousel();
  }, []);

  const handleOpenForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  const handleSaveCarouselFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("type", selected.type);

      if (imageFile) {
        formData.append("img", imageFile);
      }

      await editCarousel(selected.id, formData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCarousel = async () => {
    try {
      await editCarousel(selected.id, {
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
      await deleteCarousel(selectedCarouselId);
  
      setCarousel(prev =>
        prev.filter(p => p.id !== selectedCarouselId)
      );
  
      setDeleteOpen(false);
      setSelectedCarouselId(null);
      setSelected(null);
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };
  console.log(carousel);

  const openDelete = (id) => {
    setSelectedCarouselId(id);
    setDeleteOpen(true)
  }

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedCarouselId(null);
  }

  return (
    <div className="flex justify-center items-center h-screen text-[#007571]">
      <child carousel = {carousel} setCarousel = {setCarousel}/>
      {/* SIDEBAR */}
      <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
        <DashboardSidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
        {/* HEADER */}
        <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 bg-graent-to-l from-[#003835]/40 to-[#007471]/40">
          <div className="w-full px-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Carousel</p>

            <div
              onClick={handleOpenForm}
              className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-gradient-to-l from-[#003835] to-[#007471] text-white font-semibold flex justify-center items-center"
            >
              Add <FaPlus />
            </div>
          </div>
        </div>

        {isFormVisible && <CarouselAddModal onClose={handleCloseForm} />}
        {isDeleteOpen &&  (<ModalDelete id={selectedCarouselId} onClose={closeDelete} onDelete={handleDeleteSuccess}/>)}
        
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
                {carousel.map((item) => (
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
                title="carousel"
                fields={carouselFields}
                data={selected}
                Type={selected.type}
                image={`http://localhost:3008/uploads/${selected.img}`}
                setCarousel={setCarousel}
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
                onEdit={handleSaveCarouselFormData}
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

export default CarouselDashboard;