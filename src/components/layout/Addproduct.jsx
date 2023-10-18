const Addproduct = () => {
    return (
      <div className="w-[80%] mx-auto my-6">
        <h2 className="text-3xl md:text-4xl font-bold my-4  text-center">
          Add Product
        </h2>
        <div>
          <form>
            <div className="my-1">
              <p className="my-1 font-semibold">Image</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-1">
              <p className="my-1 font-semibold">Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-1">
              <p className="my-1 font-semibold">Brand Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="my-1">
              <p className="my-1 font-semibold">Price</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-1">
              <p className="my-1 font-semibold">Short description</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-1">
              <p className="my-1 font-semibold">Rating</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-active btn-primary my-2">Add Product</button>
          </form>
        </div>
      </div>
    );
};

export default Addproduct;