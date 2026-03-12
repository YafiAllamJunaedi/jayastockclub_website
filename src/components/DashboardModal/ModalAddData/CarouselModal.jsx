import ModalForm from "../../ModalForm.jsx";
import { createCarousel } from "../../../services/API/carouselAPI.js";

const CarouselAddModal = ({ onClose, onSuccess }) => {
   const handleSubmit = async (data) => {
     const formData = new FormData();
 
     Object.entries(data).forEach(([key, value]) =>
       formData.append(key, value)
     );
 
     await createCarousel(formData);
     onClose();
   };

  return (
    <ModalForm
      title="Tambah Carousel"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "type", label: "Type", type: "text" },
        { name: "img", label: "Image", type: "file" },
      ]}
    />
  );
};

export default CarouselAddModal;