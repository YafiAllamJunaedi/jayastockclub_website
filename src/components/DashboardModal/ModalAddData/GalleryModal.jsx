import ModalForm from "../../ModalForm.jsx";
import { createGallery } from "../../../services/API/galleryAPI.js";

const GalleryAddModal = ({ onClose, onSuccess }) => {
   const handleSubmit = async (data) => {
     const formData = new FormData();
 
     Object.entries(data).forEach(([key, value]) =>
       formData.append(key, value)
     );
 
     await createGallery(formData);
     onClose();
   };

  return (
    <ModalForm
      title="Tambah Galeri"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "judul", label: "Title", type: "text" },
        { name: "img", label: "Image", type: "file" },
        { name: "date", label: "Date", type: "date" },
      ]}
    />
  );
};

export default GalleryAddModal;