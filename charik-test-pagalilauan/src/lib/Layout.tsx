import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className=" text-custom-text bg-custom-bg relative min-h-dvh max-w-dvh overflow-x-hidden">
      <Navbar />
      <main className=" pt-[80px] min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
