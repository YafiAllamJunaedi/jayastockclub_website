import { useEffect, useState } from "react";
import { getPrestasi } from "../services/DB";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";

const AchievementModal = ({ id, onClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // lock scroll body ketika modal muncul
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await getPrestasi();

        if (!Array.isArray(res)) {
          throw new Error("Data bukan array");
        }

        const selected = res.find(
          (item) => Number(item.id) === Number(id)
        );

        setData(selected || null);
      } catch (err) {
        console.error("Error fetching prestasi:", err);
        setError("Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchPrestasi();
  }, [id]);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] max-h-[75vh] overflow-y-auto p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-lg font-bold"
        >
          ✕
        </button>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {data && (
          <div className="w-full h-full">
            <div className="w-full">
              <img
                src={`http://localhost:3008/uploads/${data.img}`}
                alt={data.judul}
                className="w-full rounded"
              />

              <div className="w-full flex-col items-center justify-center">
                <p className="text-2xl text-center pt-3">{data.judul}</p>

                <div className="flex justify-between items-center pt-3 text-xs text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <IoIosCalendar size={14} />
                    <span>{data.tanggal}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <IoLocationOutline size={14} />
                    <span>{data.lokasi}</span>
                  </div>
                </div>

                <div className="w-full h-36 mt-3 px-2 py-1 rounded-md border overflow-y-auto break-words">
                  {data.detail}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementModal;