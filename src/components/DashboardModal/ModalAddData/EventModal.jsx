import ModalForm from "../../ModalForm.jsx";
import { createEvent } from "../../../services/API/eventApi.js";

const EventAddModal = ({ onClose, onSuccess }) => {
   const handleSubmit = async (data) => {
     const formData = new FormData();
 
     Object.entries(data).forEach(([key, value]) =>
       formData.append(key, value)
     );
 
     await createEvent(formData);
     onClose();
   };

  return (
    <ModalForm
      title="Tambah Event"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "url", label: "Link", type: "text" },
        { name: "img", label: "Image", type: "file" },
      ]}
    />
  );
};

export default EventAddModal;