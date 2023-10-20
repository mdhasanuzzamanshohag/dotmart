import { FaEye, FaPen, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCardDetails = ({ data1, products, setProducts }) => {
  const { img, brand, name, type, price, description, rating, _id } = data1;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/mycard/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remain = products.filter((pro) => pro._id !== _id);
              setProducts(remain);
            }
          });
      }
    });
  };
  return (
    <div className="flex flex-col justify-center  gap-6 rounded-xl bg-[#DEE2E7]">
      <img src={img} className="rounded-lg w-52 h-52 mx-auto my-4" alt="" />
      <div className="my-auto md:w-[80%] mx-auto leading-8">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl font-bold">
            $<span className="text-[#1C1C1C]">{price}</span>
          </h2>
          <div className="flex gap-1">
            <img src="./star.svg" className="w-4 mx-auto" alt="" />
            <p className="text-[#ED8A19] font-semibold">{rating}</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">
          <span className="text-[#606060]">{name}</span>
        </h2>
        <Link to={`/category/${brand}`}>
          <h2 className="text-xl font-semibold">
            <span className="text-[#d64949]">{brand}</span>
          </h2>
        </Link>
        <h2 className="text-xl font-semibold my-1">
          <span className="text-[#606060]">{type}</span>
        </h2>
      </div>
      <div className="flex justify-center mb-3 gap-3">
        <div
          onClick={() => handleDelete(_id)}
          className="bg-[#f035e0] mb-2 h-10 w-10 flex items-center rounded-md text-white"
        >
          <FaTrash className="m-auto"></FaTrash>
        </div>
      </div>
    </div>
  );
};

export default MyCardDetails;
