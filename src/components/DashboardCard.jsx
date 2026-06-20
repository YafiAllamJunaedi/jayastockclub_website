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
    <div
      onClick={onClick}
      className="relative bg-linear-to-t from-[#003835]/20 to-[#007471]/10 px-2 py-4 w-full h-[120px] rounded-md flex gap-4 cursor-pointer"
    >
      <img className="w-[120px] h-full object-cover rounded" src={image} />

      <div className="flex flex-col w-6/12 overflow-hidden">
        <p className="text-lg font-semibold line-clamp-1">{division}</p>
        <p className="text-[10px] line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
