import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";

const Signup = () => {

  const { createUser, facebookLogin, googleLogin } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const validatePassword = (input) => {
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/;

    const isValid = passwordRegex.test(input);

    return isValid;
  };
  
  const handleCreateUser = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const confirmPassword = form.confirmPassword.value;
    const password = form.password.value;
    
    const isValid = validatePassword(password);

    if (!(password === confirmPassword)) {
      toast.error("Password Not Match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password less than 6 characters");
      return;
    }

    if (isValid) {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("Successfully Signup");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      toast.error("Capital letter & Special character Not Found");
    }
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
          Please Signup Here
        </h2>
        <div>
          <form onSubmit={handleCreateUser} className="w-[70%] mx-auto">
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
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="confirm password"
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
            <Link to="/login">
              <p className="link link-primary my-1 text-center font-semibold text-lg">
                Login Here
              </p>
            </Link>
            <button
              type="submit"
              className="btn w-full btn-active btn-primary my-4"
            >
              SignUp
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

export default Signup;