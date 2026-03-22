import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";
import DetailPanel from "../../../components/DetailPanel.jsx";
import DivisionsAddModal from "../../../components/DashboardModal/ModalAddData/DivisionsModal.jsx";
import ModalDelete from "../../../components/DashboardModal/ModalDeleteData/ModalDelete.jsx";
import { getPengurus, editPengurus, deletePengurus } from "../../../services/API/pengurusAPI.js";
import DashboardCard from "../../../components/DashboardCard.jsx";

const pengurusFields = [
  { key: "Divisi", label: "Divisi", type: "text" },
  { key: "about", label: "Deskripsi", type: "textarea" },
  { key: "createdAt", label: "Created At", type: "text", disabled: true },
];
const DivisionsDashboard = ({id}) => {
  const [pengurus, setPengurus] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isDeleteOpen, setDeleteOpen] = useState(false)
  const [selectedPengurusId, setSelectedPengurusId] = useState(null)

  useEffect(() => {
    const fetchPengurus = async () => {
      try {
        const data = await getPengurus();
        setPengurus(data);
      } catch (err) {
        setError("Gagal mengambil data pengurus");
      }
    };

    fetchPengurus();
  }, []);

  const handleOpenForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  const handleSavePengurusFormData = async () => {
    try {
      const formData = new FormData();
      formData.append("Divisi", selected.Divisi);
      formData.append("about", selected.about);

      if (imageFile) {
        formData.append("img", imageFile);
      }

      await editPengurus(selected.id, formData);
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditPengurus = async () => {
    try {
      await editPengurus(selected.id, {
        division: selected.division,
        description: selected.description,
        createdAt: selected.createdAt,
      });
    } catch (error) {
      console.error(error);
      alert("Gagal update data");
    }
  };
  const openDelete = (id) => {
    setSelectedPengurusId(id);
    setDeleteOpen(true)
  }

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedPengurusId(null);
  }

 const handleDeleteSuccess = async () => {
  try {
    await deletePengurus(selectedPengurusId);

    setPengurus(prev =>
      prev.filter(p => p.id !== selectedPengurusId)
    );

    setDeleteOpen(false);
    setSelectedPengurusId(null);
    setSelected(null);
  } catch (err) {
    console.error(err);
    alert("Gagal menghapus data");
  }
};

  console.log(pengurus);

  return (
    <div className="flex justify-center items-center h-screen text-[#007571]">
      <div className="w-5/12 md:w-3/12 lg:w-2/12 h-full">
        <DashboardSidebar />
      </div>

      <div className="w-7/12 md:w-9/12 lg:w-10/12 h-full flex flex-col bg-slate-100">
        <div className="flex justify-center items-center w-full lg:h-[60px] bg-slate-200 bg-graent-to-l from-[#003835]/40 to-[#007471]/40">
          <div className="w-full px-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Division</p>

            <div
              onClick={handleOpenForm}
              className="w-1/12 text-[12px] gap-1 rounded-sm px-3 py-1 cursor-pointer transition bg-linear-to-l from-[#003835] to-[#007471] text-white font-semibold flex justify-center items-center"
            >
              Add <FaPlus />
            </div>
          </div>
        </div>

        {isFormVisible && <DivisionsAddModal onClose={handleCloseForm} />}
        {isDeleteOpen &&  (<ModalDelete id={selectedPengurusId} onClose={closeDelete} onDelete={handleDeleteSuccess}/>)}
        <div className="w-full h-full overflow-hidden">
          <div className="flex w-full h-full py-4 gap-4">
            <div
              className={`${
                selected ? "w-1/2" : "w-full"
              } h-full overflow-y-auto transition-all duration-300`}
            >
              <div className="grid grid-cols-1 gap-4 p-3">
                {pengurus.map((item) => (
                  <DashboardCard
                    key={item.id}
                    division={item.Divisi}
                    image={`http://localhost:3008/uploads/${item.img}`}
                    description={item.about}
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
                title="Divisions"
                fields={pengurusFields}
                data={selected}
                image={`http://localhost:3008/uploads/${selected.img}`}
                setPengurus={setPengurus}
                active={active}
                onToggle={setActive}
                onChange={(field, value) =>
                  setSelected((prev) => ({
                    ...prev,
                    [field]: value,
                  }))
                }
                onDelete={() => openDelete(selected.id)}
                onEdit={handleSavePengurusFormData}
                onChooseImage={setImageFile}
                onClose={() => setSelected(null)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionsDashboard;