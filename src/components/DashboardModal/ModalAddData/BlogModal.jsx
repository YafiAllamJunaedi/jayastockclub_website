import ModalForm from "../../ModalForm.jsx";
import { createBlog } from "../../../services/API/blogAPI.js";

const BlogAddModal = ({ onClose, onSuccess }) => {
   const handleSubmit = async (data) => {
     const formData = new FormData();
 
     Object.entries(data).forEach(([key, value]) =>
       formData.append(key, value)
     );
 
     await createBlog(formData);
     onClose();
   };

  return (
    <ModalForm
      title="Tambah Blog"
      onClose={onClose}
      onSubmit={handleSubmit}
      fields={[
        { name: "judul", label: "Title", type: "text" },
        { name: "img", label: "Image", type: "file" },
        { name: "paper", label: "Description", type: "textarea" },
        { name: "date", label: "Date", type: "date" },
      ]}
    />
  );
};

export default BlogAddModal;