import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const events = Array.from({ length: 20 });

// ! NOTES : kalo API nya udah ada ganti aja events disini jadi API nya

const UpcomingEvent = ({ aos, aosDelay, aosDuration }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialCount, setInitialCount] = useState(5);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 768;
      const init = mobile ? 3 : 5;

      setIsMobile(mobile);
      setInitialCount(init);
      setVisibleCount(init);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + (isMobile ? 3 : 5), events.length),
    );
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
          className="w-full grid grid-cols-1 md:grid-cols-5 2xl:grid-cols-7 gap-5 p-4 mt-6"
          data-aos={`${aos}`}
          data-aos-delay={`${aosDelay}`}
          data-aos-duration={`${aosDuration}`}
        >
          {events.slice(0, visibleCount).map((_, i) => (
            <EventCard key={i} />
          ))}
        </div>

        <div className="flex justify-center gap-6 pt-5 text-white font-semibold">
          {visibleCount < events.length && (
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
