import { useState } from "react";

const ModalForm = ({ title, fields, onSubmit, onClose, loading }) => {
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});

  const handleChange = (e) => {
    const { name, value, files: inputFiles, type } = e.target;

    if (type === "file") {
      setFiles((prev) => ({ ...prev, [name]: inputFiles[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, ...files });
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="mb-2">
              <label className="block font-bold mb-2">{field.label}</label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  required={field.required ?? true}
                  onChange={handleChange}
                  rows={5}
                  className="border border-gray-300 p-2 w-full resize-none text-black"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required ?? true}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full text-black"
                />
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-linear-to-l from-[#003835] to-[#007471] text-white px-4 py-2 rounded cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
