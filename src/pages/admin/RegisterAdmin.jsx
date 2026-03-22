import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { createAdmin } from "../../services/API/adminAPI.js";

const RegisterAdmin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createAdmin({
        email,
        password,
        confPassword
      });

      navigate("/admin/login");

    } catch (error) {

      setError(error.response?.data?.message || "Register gagal");

    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">

        <h1 className="text-center text-2xl font-bold">Register Admin</h1>

        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            className="border px-4 py-2 rounded-lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border px-4 py-2 rounded-lg w-full"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <IoEyeOffSharp/> : <IoEyeSharp/>}
            </button>

          </div>

          <div className="relative">

            <input
              type={showConfPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border px-4 py-2 rounded-lg w-full"
              value={confPassword}
              onChange={(e)=>setConfPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={()=>setShowConfPassword(!showConfPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfPassword ? <IoEyeOffSharp/> : <IoEyeSharp/>}
            </button>

          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default RegisterAdmin;