import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";

const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext); 
  
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("Successfully logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
    return (
      <div className="navbar bg-base-100 w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/addproduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/mycart">My Cart</NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            DotMart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/addproduct">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/mycart">My Cart</NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link className="btn" to="/login">
            Button
          </Link>
        </div> */}
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="btn btn-sm my-1 text-base" to="/mycart">
                    <button className="my-auto">My Card</button>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-sm my-1">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;