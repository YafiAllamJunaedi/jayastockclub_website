import { useEffect, useState } from "react";
import React from "react";
import GalleryCard from "../../components/GalleryCard.jsx";
import { getGallery } from "../../services/DB.js";
const API = import.meta.env.VITE_LINK_BE

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery();
        setGallery(data);
      } catch (err) {
        setError("Gagal mengambil data pengurus");
      }
    };
    fetchGallery();
  }, []);
  return (
    <div className="w-full min-h-[75vh] p-10">
      <p className="text-[#003835] text-3xl md:text-4xl font-bold text-center">
        GALLERY
      </p>

      <div className="pt-7 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-5">
        {gallery.map((idx) => (
          <GalleryCard
            key={idx.id}
            date={idx.date}
            title={idx.judul}
            image={`${API}/uploads/${idx.img}`}
          />
        ))}
      </div>

      <p className="mt-6 text-[#003835] text-lg font-semibold cursor-pointer block md:hidden text-center">
        see more
      </p>
    </div>
  );
};

export default Gallery;
