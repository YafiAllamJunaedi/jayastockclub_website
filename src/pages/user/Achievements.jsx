import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card.jsx";
import { getPrestasi } from "../../services/DB.js";
const API = import.meta.env.VITE_LINK_BE

const Achievements = () => {
  const [prestasi, setPrestasi] = useState([]);
  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const data = await getPrestasi();
        setPrestasi(data);
      } catch (err) {
        setError("Gagal mengambil data pengurus");
      }
    };
    fetchPrestasi();
  }, []);

  return (
    <div className="w-full min-h-[75vh] p-10">
      <Link className="text-black text-xl font-semibold md:hidden" to="/">
        ✕
      </Link>
      <p className="text-[#003835] text-3xl md:text-4xl font-bold text-center pt-15 md:pt-0">
        ACHIEVEMENTS
      </p>

      <div className="pt-7 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-5">
        {prestasi.map((idx) => (
          <Card
            key={idx.id}
            id={idx.id}
            date={idx.tanggal}
            location={idx.lokasi}
            title={idx.judul}
            detail={idx.detail}
            image={`${API}/uploads/${idx.img}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
