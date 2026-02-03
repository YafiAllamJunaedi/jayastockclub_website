import DivisionCard from "../components/DivisionCard.jsx";

const Divisions = () => {
  return (
    <div class="Gradasi h-full py-10 bg-linear-to-b from-[#003835] via-[#007471] to-[#c1e1de] flex justify-center items-center">
      <div className="w-10/12 h-full flex justify-center flex-col gap-4">
        <div className="teks diatas card h-fit w-full text-center text-white py-5 md:text-3xl text-2xl font-semibold">
          <p className="md:text-6xl text-4xl"> Jaya Stock Club</p>
          <p className="bg-linear-to-r from-[#003835] via-[#c1e1de] to-[#007471] bg-clip-text text-transparent">
            {" "}
            Periode 2025/2026
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-yellow- w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <DivisionCard
                label="BOARD OF DIRECTORS"
                image="Assets/divisions/BOD.JPG"
                className="max-h-full h-full object-contain rounded-md"
                text="Mengarahkan visi organisasi, mengawasi kinerja divisi, mengambil keputusan strategis, serta memastikan seluruh program berjalan sesuai tujuan bersama."
              />
              <DivisionCard
                label="HUMAN RECOURCES"
                image="Assets/divisions/HR.jpg"
                className="max-h-full h-full object-contain rounded-md"
                text="Mengelola rekrutmen, pengembangan anggota, evaluasi kinerja, serta menciptakan lingkungan kerja yang sehat dan mendukung potensi setiap individu."
              />
              <DivisionCard
                label="PUBLIC RELATIONS"
                image="Assets/divisions/PR.JPG"
                className="max-h-full h-full object-contain rounded-md"
                text="Membangun citra positif organisasi melalui komunikasi eksternal, menjalin relasi strategis, serta mengelola informasi publik secara profesional."
              />
              <DivisionCard
                type="hijau"
                label="RESEARCH AND DEVELOPMENT"
                image="Assets/divisions/RND.jpeg"
                className="max-h-full h-full object-contain rounded-md"
                text="Mengembangkan riset, menganalisis data, serta menghasilkan kajian strategis untuk mendukung inovasi dan pengambilan keputusan organisasi."
              />
              <DivisionCard
                type="hijau"
                label={
                  <>
                    <span className="block md:hidden">
                      INVESTMENT SKILLS DEV.
                    </span>

                    <span className="hidden md:block">
                      INVESTMENT SKILLS DEVELOPMENT
                    </span>
                  </>
                }
                image=
                  
                    "Assets/divisions/ISD.jpg"
                    className="max-h-full h-full object-contain rounded-md"
                    alt="Investment Skills Development"
              
                
                text="Melatih dan membimbing anggota dalam keterampilan investasi, analisis pasar, serta pengembangan mindset profesional di dunia keuangan."
              />
              <DivisionCard
                type="hijau"
                label="MEDIA PRODUCTION"
                image="Assets/divisions/MP.JPG"
                className="max-h-full h-full object-contain rounded-md"
                text="Mengelola produksi visual dan audiovisual untuk mendukung branding, dokumentasi kegiatan, serta penyampaian informasi organisasi secara kreatif."
              />

              <DivisionCard
                label="CONTENT WRITER"
                image="Assets/divisions/CW.JPG"
                className="max-h-full h-full object-contain rounded-md"
                text="Menyusun konten informatif dan edukatif, mengelola narasi organisasi, serta memastikan pesan tersampaikan secara jelas dan konsisten."
              />
              <DivisionCard
                label="TECH AND DEVELOPER"
                image="Assets/divisions/TECH.JPG"
                className="max-h-full h-full object-contain rounded-md"
                text="Mengembangkan dan memelihara website organisasi, mendukung sistem digital, serta melaporkan kegiatan organisasi kepada Bursa Efek Indonesia."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divisions;
