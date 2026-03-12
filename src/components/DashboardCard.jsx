import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const DashboardCard = ({
  image,
  division,
  description,
  onClick,
  onEdit,
  onDelete,
}) => {
  return (
    <div onClick={onClick}className="relative bg-gradient-to-t from-[#003835]/20 to-[#007471]/10 px-2 py-4 w-full h-fit rounded-md flex gap-4 cursor-pointer">
      <img className="w-[120px] h-fit" src={image}/>
      <div className="flex flex-col w-6/12">
        <p className="text-lg font-semibold">{division}</p>
        <p className="text-[10px] font-light">{description}</p>
      </div>

      <div className="absolute top-3 right-3 flex flex-col gap-2"onClick={(e) => e.stopPropagation()}>
        <FaEdit color="green"size={15}onClick={onEdit}className="hover:scale-110 transition" />
        <IoTrash color="red"size={19}onClick={onDelete}className="hover:scale-110 transition"/>
      </div>
    </div>
  );
};

export default DashboardCard;