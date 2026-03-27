import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const GalleryCard = ({
  id,
  image,
  date,
  title,
  aos,
  aosDelay,
  aosDuration,
}) => {

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
        </div>

        <p className="pt-3 font-semibold flex-1">{title}</p>

      </div>

    </>
  );
};

export default GalleryCard;