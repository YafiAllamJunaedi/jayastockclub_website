import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import AchievementModal from "./AchievementModal";

const Card = ({ id,image, date, location, title, aos, aosDelay, aosDuration }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };
  const handleOpenForm = () => setIsFormVisible(true);
  const handleCloseForm = () => setIsFormVisible(false);

  return (
    <div
      className="h-full shadow-lg md:shadow-2xl p-4 flex flex-col"
      data-aos={`${aos}`}
      data-aos-delay={`${aosDelay}`}
      data-aos-duration={`${aosDuration}`}
    >
      <div className="h-44 w-full overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center pt-3 text-xs text-neutral-600">
        <div className="flex items-center gap-1.5">
          <IoIosCalendar size={14} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <IoLocationOutline size={14} />
          <span>{location}</span>
        </div>
      </div>

      <p className="pt-3 font-semibold flex-1">{truncateWords(title, 12)}</p>

      <div className="pt-3">
        {isFormVisible && <AchievementModal id={id} onClose={handleCloseForm} />}
        <div onClick={handleOpenForm} className="w-9 h-9 border rounded-full flex justify-center items-center cursor-pointer">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
