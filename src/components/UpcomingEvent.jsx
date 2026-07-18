import { useEffect, useState } from "react";
import EventCard from "./EventCard.jsx";
import { getEvent } from "../services/DB.js";
const API = import.meta.env.VITE_LINK_BE

const getConfig = () => {
  const width = window.innerWidth;

  if (width < 640) {
    return { initial: 3, increment: 3, max: 6 };
  } else if (width >= 1536) {
    return { initial: 7, increment: 7, max: 14 };
  } else {
    return { initial: 5, increment: 5, max: 10 };
  }
};

const UpcomingEvent = ({ aos, aosDelay, aosDuration }) => {
const API = import.meta.env.VITE_LINK_BE
 const [event, setEvent] = useState([]);
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEvent();
        setEvent(data);
      } catch (err) {
        setError("Gagal mengambil data pengurus");
      }
    };
    fetchEvent();
  }, []);

  const [screenType, setScreenType] = useState("desktop");
  const { initial } = getConfig();

  const [initialCount, setInitialCount] = useState(initial);
  const [visibleCount, setVisibleCount] = useState(initial);

  useEffect(() => {
    const { initial } = getConfig();

    setInitialCount(initial);
    setVisibleCount(initial);
  }, []);

  const handleSeeMore = () => {
    const { increment, max } = getConfig();

    setVisibleCount((prev) => Math.min(prev + increment, max));
  };
  const handleSeeLess = () => {
    setVisibleCount(initialCount);
  };
  return (
    <div
      className="w-full min-h-[70vh] 2xl:min-h-[58vh] px-4 md:px-10 py-8"
      id="upcomingEvent"
    >
      <div className="w-full bg-[#003835] rounded-4xl p-5 md:p-8">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          UPCOMING EVENT
        </p>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-5 2xl:grid-cols-7 md:gap-5 gap-10 p-4 mt-6"
          data-aos={aos}
          data-aos-delay={aosDelay}
          data-aos-duration={aosDuration}
        >
        {Array.isArray(event) &&
          event.slice(0, visibleCount).map((item, i) => (
            <EventCard
              key={i}
              img={`${API}/uploads/${item.img}`}
              link={item.url}
            />
        ))}
        </div>

        <div className="flex justify-center gap-6 pt-5 text-white font-semibold">
          {visibleCount < getConfig().max && (
            <button
              onClick={handleSeeMore}
              className="underline hover:opacity-80 cursor-pointer"
            >
              see more
            </button>
          )}

          {visibleCount > initialCount && (
            <button
              onClick={handleSeeLess}
              className="underline hover:opacity-80 cursor-pointer"
            >
              see less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
