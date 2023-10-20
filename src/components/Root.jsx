import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Toaster />
        <Footer></Footer>
      </div>
    );
};

export default Root;