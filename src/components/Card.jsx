import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import AchievementModal from "./AchievementModal";

const Card = ({
  id,
  image,
  date,
  location,
  title,
  detail,
  aos,
  aosDelay,
  aosDuration,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="h-full shadow-lg md:shadow-2xl p-4 flex flex-col hover:scale-105 transition"
        data-aos={aos}
        data-aos-delay={aosDelay}
        data-aos-duration={aosDuration}
      >
        <div className="h-44 w-full overflow-hidden">
          <img src={image} className="w-full h-full object-cover" />
        </div>

        <div className="flex justify-between text-xs pt-3 text-neutral-600">
          <div className="flex items-center gap-1">
            <IoIosCalendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoLocationOutline size={14} />
            <span>{location}</span>
          </div>
        </div>

        <p className="pt-3 font-semibold flex-1">{title}</p>

        <div className="pt-3">
          <div
            onClick={handleOpen}
            className="w-9 h-9 border rounded-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          >
            <FiArrowUpRight />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AchievementModal
          data={{
            id,
            img: image,
            judul: title,
            tanggal: date,
            lokasi: location,
            detail: detail,
          }}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Card;