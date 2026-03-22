import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { FaX } from "react-icons/fa6";

const Field = ({ label, children }) => (
  <fieldset className="w-full border border-[#007471] rounded-lg px-3">
    <legend className="px-2 text-xs text-[#007471]">{label}</legend>
    {children}
  </fieldset>
);

const DetailPanel = ({
  title = "Detail",
  image,
  fields = [],
  data = {},
  onChange,
  onSave,
  onDelete,
  onClose,
  onEdit,
  active,
  onToggle,
  onChooseImage,
  id,
  
}) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [isDeleteOpen, setDeleteOpen] = useState(false) 
  const [selectedPengurusId, setSelectedPengurusId] = useState(null)
  const [backup, setBackup] = useState({});
  const fileRef = useRef();

  const handleEdit = () => {
    setBackup(data);
    setIsEditing(true);
  };

  const handleCancel = () => {
    Object.keys(backup).forEach((key) => {
      onChange(key, backup[key]);
    });
    setIsEditing(false);
  };
  
  const handleSave = async () => { 
    await onEdit(); 
    setIsEditing(false);
  };

  const openDelete = (id) => { setSelectedPengurusId(id); setDeleteOpen(true) }

  const closeDelete = () => { setDeleteOpen(false); setSelectedPengurusId(null); }

  const handleDeletePengurus = async () => { if (!selectedPengurusId) return;}

  return (
    <div className="w-1/2 h-full bg-linear-to-t from-[#003835]/20 to-[#007471]/10 rounded-md">
      <div className="h-[50px] px-5 flex justify-between items-center border-b">
        <p className="text-lg font-semibold">{title}</p>
        <button onClick={onClose}><FaX /></button>
      </div>

      <div className="flex w-full h-4/6px-5">
        {image && (
          <div className="w-4/12 flex flex-col h-full p-3">
          <img src={image} alt="" className="rounded-t-md w-full" />

          <input
            type="file"
            hidden
            ref={fileRef}
            accept="image/*"
            onChange={(e) => onChooseImage(e.target.files[0])}
          />

          <button
            onClick={() => fileRef.current.click()}
            className="w-full h-5 text-[12px] font-semibold rounded-b-md bg-gradient-to-l from-[#003835] to-[#007471] text-[#c1e1de]"
          >
            Choose Image
          </button>
        </div>
        )}

        <div className="w-8/12 flex flex-col gap-3 py-3">
          {fields.map((field) => (
            <Field key={field.key} label={field.label}>
              {field.type === "textarea" ? (
                <textarea
                  value={data[field.key] || ""}
                  disabled={!isEditing || field.disabled}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  className="w-full bg-transparent outline-none h-[130px]"
                />
              ) : (
                <input
                  type={field.type}
                  value={data[field.key] || ""}
                  disabled={!isEditing || field.disabled}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              )}
            </Field>
          ))}
        </div>
      </div>

      <div className="px-8 pt-8 flex flex-col gap-2">
       <div className="w-full flex flex-col gap-3 px-10 pb-4">
        {!isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="w-full flex justify-center items-center gap-1 font-semibold bg-[#003835] rounded-md py-2 text-[#c1e1de]"
            >
              Edit <FaEdit />
            </button>

            <button
              onClick={(e) => {e.stopPropagation(); onDelete();}}
              className="w-full flex justify-center items-center gap-1 font-semibold bg-red-500 rounded-md py-2 text-[#c1e1de]"
            >
              Delete <IoTrash />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="w-full flex justify-center items-center gap-1 font-semibold bg-green-600 rounded-md py-2 text-white"
            >
              Save
            </button>

            <button
              onClick={handleCancel}
              className="w-full flex justify-center items-center gap-1 font-semibold bg-red-500 rounded-md py-2 text-[#c1e1de]"
            >
              Cancel
            </button>
          </>
        )}
      </div>
      </div>
    </div>
  );
};
export default DetailPanel