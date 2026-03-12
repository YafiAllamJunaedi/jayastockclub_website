// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import "aos/dist/aos.css";
// import './index.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Divisions from './pages/user/Divisions.jsx';
// import Gallery from './pages/user/Gallery.jsx';
// import Achievements from './pages/user/Achievements.jsx';
// import LatestBlogs from './pages/user/LatestBlogs.jsx';
// import Layout from './utils/Layout.jsx';

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/achievements",
//         element: <Achievements />,
//       },
//       {
//         path: "/divisions",
//         element: <Divisions />,
//       },
//       {
//         path: "/gallery",
//         element: <Gallery />,
//       },
//       {
//         path: "/blogs",
//         element: <LatestBlogs />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "aos/dist/aos.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// USER PAGES
import Divisions from './pages/user/Divisions.jsx';
import Gallery from './pages/user/Gallery.jsx';
import Achievements from './pages/user/Achievements.jsx';
import LatestBlogs from './pages/user/LatestBlogs.jsx';

// USER LAYOUT
import Layout from './utils/Layout.jsx';

// ADMIN PAGES
import Login from './pages/admin/Login.jsx';
import BlogsDashboard from './pages/admin/dashboard/BlogsDashboard.jsx';
import AchievementDashboard from './pages/admin/dashboard/AchievementDashboard.jsx';
import DivisionsDashboard from './pages/admin/dashboard/DivisionsDashboard.jsx';
import CarouselDashboard from './pages/admin/dashboard/CarouselDashboard.jsx';
import GalleryDashboard from './pages/admin/dashboard/GalleryDashboard.jsx';


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

  {
    path: "/admin/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "blogs",
        element: <BlogsDashboard />,
      },
      {
        path: "gallery",
        element: <GalleryDashboard />,
      },
      {
        path: "achievement",
        element: <AchievementDashboard />,
      },
      {
        path: "divisions",
        element: <DivisionsDashboard />,
      },
      {
        path: "carousel",
        element: <CarouselDashboard />,
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)