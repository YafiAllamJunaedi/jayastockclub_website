import React from 'react'
import axios from 'axios';
// import logo from './asset/logo.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { IoCaretForwardOutline, IoPeople, IoPerson, IoCard, IoTrophy } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { IoMdPaper } from 'react-icons/io';

const MenuItem = ({ path, icon, label, isActive, onClick }) => (
  <div className={`${isActive ? 'rounded-sm border-e-[5px] border-[#003835] ':''}`}>
    <div className='flex items-center justify-center w-full h-full font-semibold teksSide text-[#007471]'>
        <p className={`w-2/3 font-semibold px-2 py-1 items-center rounded-md flex justify-between cursor-pointer ${isActive ? 'bg-linear-to-l from-[#003835] to-[#007471] text-white' : ''}`} onClick={onClick}>
        {label} {icon}</p>
    </div>
  </div>
);

const DashboardSidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const sideMenu = [
    { path: '/admin/blogs', icon: <IoMdPaper/>, label: 'Blog' },
    { path: '/admin/gallery', icon: <IoCard />, label: 'Gallery' },
    { path: '/admin/achievement', icon: <IoTrophy />, label: 'Achievement' },
    { path: '/admin/divisions', icon: <IoPeople />, label: 'Division' },
    { path: '/admin/carousel', icon: <IoCaretForwardOutline />, label: 'Carousel' }
  ];

  const handleLogout = async () => {
    try {

      await axios.delete(
        "http://localhost:3008/admin/logout",
        { withCredentials: true }
      );

      navigate("/");

    } catch (error) {

      console.error("Logout gagal", error);

    }
  };

  return (
    <div className='w-full h-full flex justify-center flex-col py-6 bg-linear-to-t from-[#003835]/20 to-[#007471]/10 '>

        <div className='parent utama w-full h-full flex flex-col j items-center'>

          <div className='side bag atas w-full h-4/6 flex flex-col items-center'>

            <div className='logo flex justify-center w-full mb-5'>
                <img className='md:w-[55%] lg:w-[45%]' src="/public/Assets/jsc_logo.png" />
            </div>

            <div className='w-full flex flex-col text-sm gap-3'>

              {sideMenu.map(({ path, icon, label }) => (
                <MenuItem 
                  key={path} 
                  path={path} 
                  icon={icon} 
                  label={label} 
                  isActive={location.pathname === path} 
                  onClick={() => navigate(path)}
                />
              ))}

            </div>

          </div>

          <div className='side bag bawah cursor-default h-2/6 bg-geen-500 w-full flex flex-col justify-between items-center text-[#007471]'>

              <div className='w-fit flex flex-col justify-center items-center gap-1 border-b border-[#003835]'>

                <div className='w-[50px] h-[50px] border bg-[#c1e1de] rounded-full flex justify-center items-center p-1 text-[#003835]'>
                  <IoPerson size={20}/>
                </div>

                <p className='text-[12px] pt-3 text-xl font-semibold'>Admin JSC Asli</p>

              </div>

              <div 
                className='h-1/3 cursor-pointer flex gap-1 justify-center items-center font-semibold text-[12px] hover:text-red-500'
                onClick={handleLogout}
              >
                <CgLogOut size={16}/> Log Out
              </div>

          </div>

        </div>

    </div>
  )
}

export default DashboardSidebar;