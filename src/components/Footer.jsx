import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full min-h-80 bg-black flex flex-col md:flex-row pl-10 pt-10 pr-10 pb-24 md:pb-0">
      <div className="flex flex-col items-center md:items-start w-5/5 md:w-1/5">
        <img className="w-36" src="/Assets/upj.png" alt="" />
        <div className="md:pl-5 pt-5">
          <p className="text-white font-semibold text-center md:text-start">
            Our Social Media
          </p>
          <div className="flex pt-2 gap-2">
            <div className="w-9 h-9 rounded-full bg-[#1877F2] flex justify-center items-center">
              <a href="https://www.facebook.com/universitaspj" target="_blank">
                <FaFacebook size={16} className="text-white" />
              </a>
            </div>
            <div className="w-9 h-9 rounded-full bg-black border border-white flex justify-center items-center">
              <a href="https://x.com/upj_bintaro" target="_blank">
                <FaXTwitter size={16} className="text-white" />
              </a>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#E1306C] flex justify-center items-center">
              <a href="https://www.instagram.com/upj_bintaro" target="_blank">
                <FaInstagram size={16} className="text-white" />
              </a>
            </div>
            <div className="w-9 h-9 rounded-full bg-red-600 flex justify-center items-center">
              <a href="https://www.youtube.com/@UPJBIntaro" target="_blank">
                <FaYoutube size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/5 pt-15 md:w-1/4 md:pt-0">
        <p className="text-white md:text-lg font-semibold text-center md:text-start">
          Universitas Pembangunan Jaya
        </p>
        <div className="flex pt-5 gap-3">
          <FaLocationDot className="text-white w-12 mt-1.5" />
          <p className="text-sm md:text-md text-white">
            Blok B7/P, Jl. Cendrawasih Raya Bintaro Jaya, Sawah Baru, Kec.
            Ciputat, Kota Tangerang Selatan, Banten 15413
          </p>
        </div>
        <div className="flex pt-5 gap-3 items-center">
          <BsFillTelephoneFill className="text-white mt-1.5" />
          <p className="text-sm md:text-md text-white">(021) 745 5555</p>
        </div>
        <div className="flex pt-5 gap-3 items-center">
          <MdEmail className="text-white mt-1.5" />
          <p className="text-sm md:text-md text-white">info@upj.ac.id</p>
        </div>
      </div>
      <div className="w-5/5 md:w-2/6 pt-10 md:pt-0">
        <iframe
          width="100%"
          height="240"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7868595790856!2d106.72098957777796!3d-6.291719945305548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f007dedc7de1%3A0x70288cde58f42a97!2sPembangunan%20Jaya%20University!5e0!3m2!1sen!2sus!4v1769441853928!5m2!1sen!2sus"
        ></iframe>
      </div>
      <div className="w-5/5 md:w-1/4 md:px-5 flex flex-col gap-x-5 pt-10 md:pt-0">
        <p className="text-lg font-semibold text-white">Link to Jaya Group</p>
        <div className="flex items-center pt-3 cursor-pointer ">
          <IoMdArrowDropright className="text-white" size={15} />
          <a
            href="https://pembangunanjaya.com/"
            target="_blank"
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            Pembangunan Jaya
          </a>
        </div>
        <div className="flex items-center pt-3 cursor-pointer ">
          <IoMdArrowDropright className="text-white" size={15} />
          <a
            href="https://pendidikanjaya.or.id/"
            target="_blank"
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            Yayasan Pendidikan Jaya
          </a>
        </div>
        <div className="flex items-center pt-3 cursor-pointer ">
          <IoMdArrowDropright className="text-white" size={15} />
          <a
            href="http://margajaya.org/"
            target="_blank"
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            Yayasan Marga Pembangunan Jaya
          </a>
        </div>
        <div className="flex items-center pt-3 cursor-pointer ">
          <IoMdArrowDropright className="text-white" size={15} />
          <a
            href="https://upj.ac.id/career"
            target="_blank"
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            Career
          </a>
        </div>
        <div className="flex items-center pt-3 cursor-pointer ">
          <IoMdArrowDropright className="text-white" size={15} />
          <a
            href="https://quickresultsonline.com/?dn=jayaraya.org&sksubid=529059&_slsen=1"
            target="_blank"
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            Yayasan a Pembangunan Jaya Raya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
