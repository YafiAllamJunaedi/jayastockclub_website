import ModalForm from "../../ModalForm.jsx";
import { createPrestasi } from "../../../services/API/prestasiAPI.js";

const AchievementAddModal = ({ onClose }) => {
  const handleSubmit = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value)
    );

    await createPrestasi(formData);
    onClose();
  };

  return (
    <ModalForm
      title="Tambah Prestasi"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "judul", label: "Title", type: "text" },
        { name: "img", label: "Image", type: "file" },
        { name: "tanggal", label: "Date", type: "date" },
        { name: "lokasi", label: "Location", type: "text" },
        { name: "detail", label: "Description", type: "text" },
      ]}
    />
  );
};

export default AchievementAddModal;