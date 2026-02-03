import React, { useState, useEffect } from "react";
import AOS from "aos";
import Square from "./components/Square.jsx";
import Card from "./components/Card.jsx";
import {
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
  FaRegLightbulb,
} from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { GiCardPlay } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { LuArrowUpRight, LuSchool } from "react-icons/lu";
import Carousel from "./components/Carousel.jsx";
import UpcomingEvent from "./components/UpcomingEvent.jsx";
import { Link } from "react-router-dom";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 120,
      anchorPlacement: "top-bottom",
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);


  return (
    // note1
    <div className="relative w-full overflow-x-hidden">
      <div
        className="
        w-full h-16 md:h-20
        absolute md:
        top-0 left-0
        z-30
        flex items-center justify-between
        px-4 md:px-5
        max-w-full

        md: //// bg black-40
      "
      >
        <img
          className="w-16 md:w-24 lg:w-28 shrink-0"
          src="/Assets/upj.png"
          alt="UPJ Logo"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-x-4 lg:gap-x-7 text-white text-sm lg:text-base shrink-0">
          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("activity")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Activity
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("achievements")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Achievements
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("upcomingEvent")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Upcoming Event
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("education")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Education
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <Link
            to="/divisions"
            className="cursor-pointer font-semibold relative group"
          >
            Divisions
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/gallery"
            className="cursor-pointer font-semibold relative group"
          >
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <li
            className="cursor-pointer font-semibold relative group"
            onClick={() =>
              document
                .getElementById("patrnership")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Partnership
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl z-50 shrink-0"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {open && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* MOBILE MENU SLIDE */}
        <div
          className={`
            fixed top-0 right-0 w-3/4 max-w-sm h-full bg-black text-white z-50 p-6
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">Menu</h1>
            <button
              className="text-3xl hover:text-blue-300 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-lg">
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </li>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </li>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("activity")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Activity
            </li>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("achievements")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Achievements
            </li>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("upcomingEvent")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Upcoming Event
            </li>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("education")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Education
            </li>
            <Link
              to="/divisions"
              className="font-semibold hover:text-white transition-colors cursor-pointer"
            >
              Divisions
            </Link>
            <Link
              to="/gallery"
              className="font-semibold hover:text-white transition-colors cursor-pointer"
            >
              Gallery
            </Link>
            <li
              className="font-semibold hover:text-white transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("patrnership")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Partnership
            </li>
          </ul>
        </div>
      </div>

      {/* HERO */}
      <div
        className="relative w-full h-screen bg-[url('/Assets/main.jpg')] bg-cover bg-center"
        id="home"
      >
        <div className="overlay absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 w-full h-full flex items-center md:pt-16 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-y-6 md:gap-y-5">
            <Carousel aos="zoom-in" aosDelay="50" />
            <h1 className="text-white font-bold text-4xl md:text-2xl lg:text-2xl xl:text-5xl 2xl:text-7xl text-center leading-tight">
              Jaya Stock Club
            </h1>

            <p className="text-white text-md sm:text-base md:text-lg lg:text-xl text-center max-w-4xl px-4 mx-auto 2xl:text-2xl">
              Komunitas riset dan edukasi pasar modal{" "}
              <span className="font-bold">Universitas Pembangunan Jaya </span>
              <br />
              yang mendorong mahasiswa membangun pemahaman dan dasar investasi
              <br />
              yang kuat serta berorientasi jangka panjang
            </p>

            <div className="w-full flex justify-center gap-4 md:gap-5">
              <a
                href="https://www.linkedin.com/company/jayastockclub/"
                target="_blank"
              >
                <Square
                  className="reveal reveal-left"
                  Icon={FaLinkedin}
                  iconSize={20}
                />
              </a>
              <a
                href="https://www.instagram.com/jayastockclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <Square
                  className="reveal reveal-right"
                  Icon={FaInstagram}
                  iconSize={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grand Theme & Visi Misi */}
      {/* visi : Mewujudkan JayaStockClub sebagai komunitas pasar modal yang solid, inklusif, dan inovatif. Menjadi wadah pembelajaran, pengembangan, serta berdaya saing tinggi. */}
      {/* misi : 1. Perkuat bounding internal 2.) Tingkatkan kualitas edukasi & literasi pasar modal 3.) Dorong partisipasi lomba eksternal 4.) Efisiensi organisasi (Struktur ramping & jelas) 5.) Perluas jejaring eksternal 6.) Optimalkan branding digital */}
      {/* 'bg-gradient-to-l from-[#003835] to-[#007471] text-[#c1e1de]' */}
      <div
        className="w-full md:min-h-[80vh] bg-white pl-8 pt-8 pr-8 md:pb-8 pb-24"
        id="about"
      >
        <p className="text-center font-bold text-3xl pt-4">GRAND THEME</p>
        <p
          className="text-center font-semibold text-2xl md:text-5xl 2xl:text-6xl pt-5 italic"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          "From Leaning to Leading"
        </p>
        <div className="w-full h-[50vh] md:grid md:grid-cols-2 md:mt-10">
          {/* VISI */}
          <blockquote
            className="flex items-center justify-center p-5 md:p-10 md:border-r-2"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <div className="w-full text-center">
              <p className="md:text-2xl font-semibold italic">
                "Mewujudkan JayaStockClub sebagai komunitas pasar modal yang
                solid, inklusif, dan inovatif. Menjadi wadah pembelajaran,
                pengembangan, serta berdaya saing tinggi"
              </p>
              <cite className="block mt-4 text-sm opacity-70">— Vision</cite>
            </div>
          </blockquote>

          {/* MISI */}
          <blockquote
            className="flex items-center justify-center p-5 md:p-10"
            data-aos="fade-left"
            data-aos-delay="1100"
          >
            <div className="w-full  text-center">
              <p className="md:text-2xl font-semibold italic">
                "Memperkuat kolaborasi internal, meningkatkan kualitas edukasi
                pasar modal, serta mendorong partisipasi aktif dan jejaring
                eksternal melalui organisasi yang efisien dan branding digital
                yang kuat"
              </p>
              <cite className="block mt-4 text-sm opacity-70">— Mission</cite>
            </div>
          </blockquote>
        </div>
      </div>

      {/*  */}
      <div
        className="w-full min-h-[90vh] md:flex md:justify-between bg-black p-10"
        id="activity"
      >
        <div className="w-full md:w-2/5 h-auto p-10">
          <div className="flex gap-3 items-center md:justify-start justify-center">
            {/* 80% Buat cocokin logo, keyword : star */}
            <PiStarFourFill className="text-white" />
            <p className="text-xl md:text-sm text-center font-semibold text-white">
              Our Activities
            </p>
          </div>
          <p className="text-4xl text-center md:text-5xl md:text-start text-white pt-5">
            JayaStockClub
          </p>
          <div className="pt-7 hidden md:block">
            <img
              src="/Assets/main.jpg"
              className="w-44 h-32 rounded-lg"
              alt=""
            />
            <img
              src="/Assets/dummy3.jpg"
              className="w-44 h-32 relative left-32 bottom-4 rounded-lg"
              alt=""
            />
            <img
              src="/Assets/dummy4.jpg"
              className="w-44 h-32 relative rounded-lg bottom-10"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-3/5 md:p-10">
          <div className="w-full h-full grid gap-y-7 md:grid-cols-2 md:gap-y-0">
            <div
              className="border-white border-2 p-5 md:border-r-2 md:border-t-0 md:border-l-0 md:border-b-0 rounded-lg md:rounded-none flex flex-col justify-center md:p-7"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 bg-[#252525] rounded-sm flex items-center justify-center text-white">
                  <FaRegLightbulb size={17} />
                </div>
                <p className="text-md text-white font-semibold">Lecture</p>
              </div>
              <p className="text-white pt-4 md:pt-5 text-c">
                Kegiatan pembelajaran berbasis riset yang mendorong diskusi
                aktif dan pengembangan wawasan mahasiswa.
              </p>
            </div>
            <div
              className="border-white md:border-0 border-2 md:border-none rounded-lg md:rounded-none p-5 flex flex-col justify-center md:p-7"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 bg-[#252525] rounded-sm flex items-center justify-center text-white">
                  <GiCardPlay size={17} />
                </div>
                <p className="text-md text-white font-semibold">Stocklab</p>
              </div>
              <p className="text-white pt-4 md:pt-5 text-c">
                Kegiatan permainan kartu edukatif yang melatih strategi,
                pengambilan keputusan, dan pemahaman konsep pasar secara
                menyenangkan.
              </p>
            </div>
            <div
              className="border-white border-2 md:border-r-2 md:border-t-2 md:border-l-0 md:border-b-0 flex flex-col justify-center p-5 md:p-7 rounded-lg md:rounded-none"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 bg-[#252525] rounded-sm flex items-center justify-center text-white">
                  <MdGroups size={17} />
                </div>
                <p className="text-md text-white font-semibold">
                  Jaya Investment Week
                </p>
              </div>
              <p className="text-white pt-4 md:pt-5 text-c">
                Program kompetisi edukatif di mana mahasiswa berperan sebagai
                panitia dan banker mendampingi peserta Stocklab.
              </p>
            </div>
            <div
              className="border-white border-2 md:border-t-2 md:border-l-0 md:border-b-0 md:border-r-0 flex flex-col justify-center p-5 md:p-7 rounded-lg md:rounded-none"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 bg-[#252525] rounded-sm flex items-center justify-center text-white">
                  <LuSchool size={17} />
                </div>
                <p className="text-md text-white font-semibold">
                  Jaya Goes to School
                </p>
              </div>
              <p className="text-white pt-5 text-c">
                Program kunjungan edukatif ke sekolah untuk berbagi wawasan,
                pengalaman, dan menumbuhkan minat belajar pasar modal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-[75vh] 2xl:min-h-[60vh] bg-white p-10"
        id="achievements"
      >
        <div className="md:flex md:justify-between md:items-center">
          <p className="text-[#003835] text-4xl font-bold text-center md:text-start">
            ACHIEVEMENTS
          </p>
          <Link
            to="/achievements"
            className="text-[#003835] text-lg font-semibold cursor-pointer hidden md:block"
          >
            see more
          </Link>
        </div>
        <div className="pt-7 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-5">
          <Card
            date="17 Agustus 1945"
            location="Pamulang, UAE"
            title="Juara 1 lomba balap karung di Standford University"
            aos="zoom-in"
          />
          <Card
            date="17 Agustus 1945"
            location="Pamulang, UAE"
            title="Juara 1 lomba balap karung di Standford University"
            aos="zoom-in"
            aosDelay="100"
          />
          <Card
            date="17 Agustus 1945"
            location="Pamulang, UAE"
            title="Juara 1 lomba balap karung di Standford University"
            aos="zoom-in"
            aosDelay="200"
          />
          <Card
            date="17 Agustus 1945"
            location="Pamulang, UAE"
            title="Juara 1 lomba balap karung di Standford University"
            aos="zoom-in"
            aosDelay="300"
          />
        </div>
      </div>
      <UpcomingEvent aos="zoom-out" />

      {/* Latest Blogs */}
      <div className="w-full min-h-[80vh] bg-white p-5 md:p-10" id="education">
        <div className="w-full bg-neutral-200 rounded-sm p-5 md:p-7">
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center border-b border-neutral-400 pb-4">
            <p className="text-xl md:text-4xl font-semibold text-center md:text-left">
              LATEST BLOGS
            </p>

            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              <Link to="/blogs" className="font-semibold text-sm leading-none">
                see more
              </Link>
              <LuArrowUpRight className="text-lg" />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-5 pt-5">
            <div className="relative hidden md:block md:w-3/6 h-[53vh] bg-[url('/Assets/main.jpg')] bg-cover bg-no-repeat overflow-hidden">
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <p className="text-white font-bold text-3xl">
                  TOP 3 SAHAM YANG AKAN x500 DI TAHUN 2026 😮
                </p>
              </div>
            </div>

            <div className="w-full md:w-4/6 flex flex-col gap-5">
            
              <Blogs date="17 Agustus 1945" title="Top 3 Koin Micin Yang Akan Membuat Kalian Pensiun Dini" aos="zoom-in" aosDelay="300" />
              <Blogs date="17 Agustus 1945" title="Top 3 Koin Micin Yang Akan Membuat Kalian Pensiun Dini" aos="zoom-in" aosDelay="400"/>
              <Blogs date="17 Agustus 1945" title="Top 3 Koin Micin Yang Akan Membuat Kalian Pensiun Dini" aos="zoom-in" aosDelay="500"/>
           

              <div className="flex md:hidden justify-center pt-4">
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="font-semibold text-sm">see more</span>
                  <LuArrowUpRight className="text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[50vh] pt-10" id="patrnership">
        <p className="text-center text-neutral-400 font-semibold 2xl:text-xl">
          Affiliated By
        </p>
        <div className="w-full h-32 md:h-60 flex justify-center items-center gap-15 2xl:pt-10">
          <img
            className="w-32 md:w-72 2xl:w-100"
            src="/Assets/idx2.png"
            alt=""
            data-aos="fade-right"
          />
          <img
            className="w-32 md:w-72 2xl:w-100"
            src="/Assets/mnc.png"
            alt=""
            data-aos="fade-left"
            data-aos-delay="200"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
