import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Blogs = ({image, date, judul = "", aos, aosDelay, aosDuration }) => {
  const truncateWords = (text = "", maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  return (
    <div
      className="w-full flex items-center gap-4 cursor-pointer"
      data-aos={`${aos}`}
      data-aos-delay={`${aosDelay}`}
      data-aos-duration={`${aosDuration}`}
    >
      <div className="w-20 h-20 md:w-1/4 md:h-26 shrink-0">
         <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <IoPersonOutline className="text-xs md:text-sm text-neutral-500" />
            <p className="text-xs md:text-sm text-neutral-500">admin</p>
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineCalendarMonth className="text-xs md:text-sm text-neutral-500" />
            <p className="text-xs md:text-sm text-neutral-500">{date}</p>
          </div>
        </div>

        <p className="font-semibold text-base md:text-lg pt-1 leading-snug">
          <span className="block md:hidden">
            {truncateWords(judul, 7)}
          </span>

          <span className="hidden md:block">{judul}</span>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
