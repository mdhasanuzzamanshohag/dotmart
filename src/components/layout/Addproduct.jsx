import Swal from "sweetalert2";

const Addproduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const img = form.img.value;
    const type = form.type.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newProduct = { img, brand, name, type, price, description, rating };
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Close",
            });
          }
      });
  };

  return (
    <div className="w-[80%] mx-auto my-6">
      <h2 className="text-3xl md:text-4xl font-bold my-4  text-center">
        Add Product
      </h2>
      <div>
        <form onSubmit={handleSubmit} className="w-[70%] mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="image url"
              name="img"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="product name"
              name="name"
              required
              className="input input-bordered"
            />
          </div>
          <select
            className="select select-bordered join-item w-full mt-3"
            name="brand"
            required
          >
            <option disabled selected>
              Select
            </option>
            <option value={"Apple"}>Apple</option>
            <option value={"Samsung"}>Samsung</option>
            <option value={"Sony"}>Sony</option>
            <option value={"Google"}>Google</option>
            <option value={"Intel"}>Intel</option>
            <option value={"Xiomi"}>Xiomi</option>
          </select>
          <select
            className="select select-bordered join-item w-full mt-3"
            name="type"
            required
          >
            <option disabled selected>
              Select
            </option>
            <option value={"phone"}>Phone</option>
            <option value={"computer"}>Computer</option>
            <option value={"headphone"}>Headphone</option>
          </select>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              required
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input
              type="text"
              placeholder="short description"
              name="description"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="rating"
              placeholder="rating"
              name="rating"
              required
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
      </div>
    </div>
  );
};

export default Addproduct;
