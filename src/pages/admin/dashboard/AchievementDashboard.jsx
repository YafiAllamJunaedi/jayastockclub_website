import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
import DetailPanel from "../../../components/DetailPanel.jsx";
import AchievementAddModal from "../../../components/DashboardModal/ModalAddData/AchievementModal.jsx";
import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
import { getPrestasi, editPrestasi, deletePrestasi } from "../../../services/API/prestasiAPI.js";
import DashboardCard from "../../../components/DashboardCard.jsx";
const API = import.meta.env.VITE_LINK_BE

const prestasiFields = [
  { key: "judul", label: "judul", type: "text" },
  { key: "tanggal", label: "tanggal", type: "text" },
  { key: "lokasi", label: "lokasi", type: "text" },
  { key: "detail", label: "detail", type: "textarea" },
  { key: "createdAt", label: "Created At", type: "text", disabled: true },
];

const AchievementDashboard = () => {
  const [prestasi, setPrestasi] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [selectedPengurusId, setSelectedPengurusId] = useState(null);

  const fetchPrestasi = async () => {
    try {
      const data = await getPrestasi();
      setPrestasi(data);
    } catch (err) {
      setError("Gagal mengambil data prestasi");
    }
  };

  useEffect(() => {
    fetchPrestasi();
  }, []);

  const handleOpenForm = () => setIsFormVisible(true);

  const handleCloseForm = async () => {
    setIsFormVisible(false);
    await fetchPrestasi();
  };

  const handleSaveprestasiFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("judul", selected.judul);
      formData.append("tanggal", selected.tanggal);
      formData.append("lokasi", selected.lokasi);
      formData.append("detail", selected.detail);

      if (imageFile) {
        formData.append("img", imageFile);
      }

      await editPrestasi(selected.id, formData);

      await fetchPrestasi();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditPrestasi = async () => {
    try {
      await editPrestasi(selected.id, {
        judul: selected.judul,
        description: selected.description,
        createdAt: selected.createdAt,
      });

      await fetchPrestasi();
    } catch (error) {
      console.error(error);
      alert("Gagal update data");
    }
  };

  const handleDeleteSuccess = async () => {
    try {
      await deletePrestasi(selectedPengurusId);

      setPrestasi(prev =>
        prev.filter(p => p.id !== selectedPengurusId)
      );

      setDeleteOpen(false);
      setSelectedPengurusId(null);
      setSelected(null);

      await fetchPrestasi();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  console.log(prestasi);

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
      <child prestasi={prestasi} setPrestasi={setPrestasi} />

      <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
        <DashboardSidebar />
      </div>

      <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
        <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 ">
          <div className="w-full px-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Achievement</p>

            <div
              onClick={handleOpenForm}
              className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-gradient-to-l from-[#003835] to-[#007471] text-white font-semibold flex justify-center items-center"
            >
              Add <FaPlus />
            </div>
          </div>
        </div>

        {isFormVisible && <AchievementAddModal onClose={handleCloseForm} />}
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
                {prestasi.map((item) => (
                  <DashboardCard
                    key={item.id}
                    division={item.judul}
                    image={`${API}/uploads/${item.img}`}
                    description={item.tanggal}
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
                title="prestasi"
                fields={prestasiFields}
                data={selected}
                image={`${API}/uploads/${selected.img}`}
                setprestasi={setPrestasi}
                onDeleteSuccess={handleDeleteSuccess}
                active={active}
                onToggle={setActive}
                onChange={(field, value) =>
                  setSelected((prev) => ({
                    ...prev,
                    [field]: value,
                  }))
                }
                onEdit={handleSaveprestasiFormData}
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

export default AchievementDashboard;