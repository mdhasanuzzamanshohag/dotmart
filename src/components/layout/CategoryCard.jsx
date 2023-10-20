import { FaEye, FaPen } from "react-icons/fa";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CategoryCard = ({ data1 }) => {
  const { img, brand, name, type, price, description, rating, _id } = data1;

  const handleCard = (img, brand, name, type, price, description, rating) => {
    const myCard = { img, brand, name, type, price, description, rating };

    fetch(
      "https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/favourite",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myCard),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Added!");
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
            <img src="../star.svg" className="w-4 mx-auto" alt="" />
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
        <Link to={`/details/${_id}`}>
          <div className="bg-[#FE497C] mb-2 h-10 w-10 flex items-center rounded-md text-white">
            <FaEye className="m-auto"></FaEye>
          </div>
        </Link>

        <Link to={`/updateproduct/${_id}`}>
          <div className="bg-[#3577F0] mb-2 h-10 w-10 flex items-center rounded-md text-white">
            <FaPen className="m-auto"></FaPen>
          </div>
        </Link>
        <div
          onClick={() =>
            handleCard(img, brand, name, type, price, description, rating)
          }
          className="bg-[#3C393B] mb-2 h-10 w-10 flex items-center rounded-md"
        >
          <img src="../favorite_border.svg" className="w-6 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
