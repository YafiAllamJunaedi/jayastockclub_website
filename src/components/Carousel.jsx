import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getCarousel } from "../services/DB";
const API = import.meta.env.VITE_LINK_BE

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const res = await getCarousel();
        const imageList = res.map((item) => item.img);
        setImages(imageList);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCarousel();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-4/5 md:w-3/6 2xl:w-4/6 h-60 mt-8 rounded-lg overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${API}/uploads/${images[current]})`
          }}
        >
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2
        bg-black/40 hover:bg-black/60
        text-white p-2 rounded-full
        transition cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2
        bg-black/40 hover:bg-black/60
        text-white p-2 rounded-full
        transition cursor-pointer"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
