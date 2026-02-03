import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Layout;
