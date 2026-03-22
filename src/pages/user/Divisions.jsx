import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import DivisionCard from "../../components/DivisionCard.jsx";
import { getPengurus } from "../../services/DB.js";

const Divisions = () => {
  const [pengurus, setPengurus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengurus = async () => {
      try {
        const data = await getPengurus();
        setPengurus(data);
      } catch (err) {
        setError("Gagal mengambil data pengurus");
      }
    };
    fetchPengurus();
  }, []);

  return (
    <div className="h-full py-10 bg-linear-to-b from-[#003835] via-[#007471] to-[#c1e1de] flex justify-center items-center">
      <div className="w-10/12 flex flex-col gap-6">
        <Link
          className="text-white text-xl font-semibold md:hidden"
          to="/"
        >
          ✕
        </Link>
        <div className="text-center text-white py-5 font-semibold">
          <p className="md:text-6xl text-4xl">Jaya Stock Club</p>
          <p className="bg-linear-to-r from-[#003835] via-[#c1e1de] to-[#007471] bg-clip-text text-transparent">
            Periode 2025/2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {pengurus.map((idx) => (
            <DivisionCard
              key={idx.id}
              label={idx.Divisi}
              image={`http://localhost:3008/uploads/${idx.img}`}
              text={idx.about}
              type="hijau"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Divisions;
