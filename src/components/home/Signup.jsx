

const Signup = () => {
    return (
      <div className="w-[80%] mx-auto my-6">
        <h2 className="text-3xl md:text-4xl font-bold my-4  text-center">
          Please Signup Here
        </h2>
        <div>
          <form className="w-[70%] mx-auto">
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
                name="confirm_password"
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
            <button
              type="submit"
              className="btn w-full btn-active btn-primary my-4"
            >
              Add Product
            </button>
          </form>
          <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-4">
            <button className="btn md:w-[50%] btn-active btn-primary">
              Google
            </button>
            <button className="btn md:w-[50%] btn-active btn-primary">
              Facebook
            </button>
          </div>
        </div>
      </div>
    );
};

export default Signup;