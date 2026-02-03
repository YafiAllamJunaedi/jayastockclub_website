import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "aos/dist/aos.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Divisions from './pages/Divisions.jsx';
import Gallery from './pages/Gallery.jsx';
import Achievements from './pages/Achievements.jsx';
import LatestBlogs from './pages/LatestBlogs.jsx';
import Layout from './utils/Layout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/divisions",
        element: <Divisions />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blogs",
        element: <LatestBlogs />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)