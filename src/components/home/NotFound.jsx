import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero w-[80%] mx-auto min-h-screen">
          <div className="hero-content flex-col md:flex-row gap-4">
            <img
              src="./notfound.svg"
              className="max-w-sm rounded-lg shadow-2xl w-[50%]"
            />
            <div className="w-[50%] flex flex-col items-center">
              <h1 className="text-6xl font-bold py-3">404</h1>
              <p className="py-1">Oops! It looks like you're lost.</p>
              <Link to="/">
                <button className="btn btn-neutral my-4">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default NotFound;