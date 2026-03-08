import { useEffect, useState } from "react";
import React from "react";
import Card from "../components/Card.jsx";
import { getPrestasi } from "../services/Divisi.js";

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
      <p className="text-[#003835] text-3xl md:text-4xl font-bold text-center">
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
          image={`http://localhost:3008/uploads/${idx.img}`}
        />
        ))}
      </div>

      <p className="mt-6 text-[#003835] text-lg font-semibold cursor-pointer block md:hidden text-center">
        see more
      </p>
    </div>
  );
};

export default Achievements;
