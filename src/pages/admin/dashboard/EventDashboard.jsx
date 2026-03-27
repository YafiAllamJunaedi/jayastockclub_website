import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
import DetailPanel from "../../../components/DetailPanel.jsx";
import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
import EventAddModal from "../../../components/DashboardModal/ModalAddData/EventModal.jsx";
import { getEvent, editEvent, deleteEvent } from "../../../services/API/eventApi.js";
import DashboardCard from "../../../components/DashboardCard.jsx";

const eventFields = [
  { key: "url", label: "url", type: "text" },
  { key: "createdAt", label: "Created At", type: "text", disabled: true },
];

const EventDashboard = () => {
  const [gallery, setEvent] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [selectedGalleryId, setSelectedEventId] = useState(null);

  const fetchEvent = async () => {
    try {
      const data = await getEvent();
      setEvent(data);
    } catch (err) {
      setError("Gagal mengambil data prestasi");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleOpenForm = () => setIsFormVisible(true);

  const handleCloseForm = async () => {
    setIsFormVisible(false);
    await fetchEvent();
  };

  const handleSaveEventFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("url", selected.url);

      if (imageFile) {
        formData.append("img", imageFile);
      }

      await editEvent(selected.id, formData);

      await fetchEvent();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditEvent = async () => {
    try {
      await editEvent(selected.id, {
        type: selected.type,
        createdAt: selected.createdAt,
      });

      await fetchEvent();
    } catch (error) {
      console.error(error);
      alert("Gagal upurl data");
    }
  };

  const handleDeleteSuccess = async () => {
    try {
      await deleteEvent(selectedGalleryId);

      setEvent(prev =>
        prev.filter(p => p.id !== selectedGalleryId)
      );

      setDeleteOpen(false);
      setSelectedEventId(null);
      setSelected(null);

      await fetchEvent();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  console.log(gallery);

  const openDelete = (id) => {
    setSelectedEventId(id);
    setDeleteOpen(true);
  };

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedEventId(null);
  };

  return (
    <div className="flex justify-center items-center h-screen text-[#007571]">
      <child gallery={gallery} setEvent={setEvent} />

      <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
        <DashboardSidebar />
      </div>

      <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
        <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 bg-graent-to-l from-[#003835]/40 to-[#007471]/40">
          <div className="w-full px-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Event</p>

            <div
              onClick={handleOpenForm}
              className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-gradient-to-l from-[#003835] to-[#007471] text-white font-semibold flex justify-center items-center"
            >
              Add <FaPlus />
            </div>
          </div>
        </div>

        {isFormVisible && <EventAddModal onClose={handleCloseForm} />}
        {isDeleteOpen && (
          <ModalDelete
            id={selectedGalleryId}
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
                {gallery.map((item) => (
                  <DashboardCard
                    key={item.id}
                    image={`http://localhost:5000/uploads/${item.img}`}
                    description={item.url}
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
                title="Up Coming Event"
                fields={eventFields}
                data={selected}
                Type={selected.type}
                image={`http://localhost:5000/uploads/${selected.img}`}
                setEvent={setEvent}
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
                onEdit={handleSaveEventFormData}
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

export default EventDashboard;