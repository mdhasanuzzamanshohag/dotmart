import "./Root.css";

import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {

  
  //  const toggleTheme = () => {
  //    setIsDarkMode(!isDarkMode);
  //  };
  
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