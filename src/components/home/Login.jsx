import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";

const Login = () => {

  const { loginUser, facebookLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value; 
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully login");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        toast.success("Successfully Signup With Google");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleFacebook = () => {
    facebookLogin()
      .then((res) => {
        toast.success("Successfully Signup With Google");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  
    return (
      <div className="w-[80%] mx-auto my-6">
        <h2 className="text-3xl md:text-4xl font-bold my-4  text-center">
          Please Login Here
        </h2>
        <div>
          <form onSubmit={handleLogin} className="w-[70%] mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <Link to="/signup">
              <p className="link link-primary my-1 text-center font-semibold text-lg">
                Signup Here
              </p>
            </Link>
            <button
              type="submit"
              className="btn w-full btn-active btn-primary my-4"
            >
              Login
            </button>
          </form>
          <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-4">
            <button
              onClick={handleGoogle}
              className="btn md:w-[50%] btn-active btn-primary"
            >
              Google
            </button>
            <button
              onClick={handleFacebook}
              className="btn md:w-[50%] btn-active btn-primary"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;