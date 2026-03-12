import ModalForm from "../../ModalForm.jsx";
import { createPengurus } from "../../../services/API/pengurusAPI.js";

const DivisionsAddModal = ({ onClose, onSuccess }) => {
  const handleSubmit = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value)
    );

    await createPengurus(formData);
    onClose();
  };

  return (
    <ModalForm
      title="Tambah Pengurus"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "Divisi", label: "Title", type: "text" },
        { name: "img", label: "Image", type: "file" },
        { name: "about", label: "Job Description", type: "text" },
      ]}
    />
  );
};

export default DivisionsAddModal;