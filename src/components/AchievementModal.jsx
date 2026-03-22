import { useEffect } from "react";

const AchievementModal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-xl shadow-xl relative p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="w-full h-64 overflow-hidden rounded-xl">
          <img
            src={data.img}
            alt={data.judul}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:p-5 md:p-5 2xl:p-5 p-2.5">
          <p className="text-xl font-bold text-center lg:text-start md:text-start 2xl:text-start">{data.judul}</p>

          <p className="text-sm text-gray-500 pt-1 text-center lg:text-start md:text-start 2xl:text-start">
            {data.lokasi} • {data.tanggal}
          </p>

          <p className="pt-3 text-sm">{data.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;