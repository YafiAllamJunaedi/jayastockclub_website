import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../services/API/adminAPI.js";
import {IoEyeOffSharp, IoEyeSharp} from "react-icons/io5";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [warn, setWarn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get("http://localhost:3008/auth/me", {
          withCredentials: true
        });

        navigate("/main");

      } catch (error) {
        console.log("Belum login");
      }
    };

    checkLogin();
  }, [navigate]);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");

    if (!email || !password) {
      setWarn(true);
      setError("Email dan password wajib diisi");
      return;
    }

    try {

      await loginAdmin({
        email,
        password
      });

      navigate("/admin/blogs");

    } catch (error) {

      setError(error.response?.data?.message || "Login gagal");
      setWarn(true);

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">

      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">

        <h1 className="text-center text-[#003835] text-2xl font-bold">Admin Login</h1>
        <p className="text-center text-[#007471] font-semibold ">Jaya Stock Club</p>

        <div className="flex flex-col gap-4 mt-6">

          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter Your Id..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <IoEyeOffSharp size={20} /> : <IoEyeSharp size={20} />}
            </button>

          </div>

          {warn && <p className="text-red-500">{error}</p>}

          <button
            onClick={handleSubmit}
            className="cursor-pointer font-bold bg-linear-to-l from-[#003835] to-[#007471] text-white w- py-2 rounded-lg"
          >
            Login
          </button>

        </div>
      </div>

    </div>
  );
};

export default Login;