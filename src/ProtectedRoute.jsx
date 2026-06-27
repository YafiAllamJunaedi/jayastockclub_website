import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
const API = import.meta.env.VITE_LINK_BE
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${API}/auth/me`, {
          withCredentials: true
        });

        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;