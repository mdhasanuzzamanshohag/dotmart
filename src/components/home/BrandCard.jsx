import { Link } from "react-router-dom";

const BrandCard = ({ comp }) => {
    
    const { brand, brand_logo } = comp;
    
    return (
      <Link to={`/category/${brand}`}>
        <div className="card bg-base-100 h-48 shadow-xl my-4">
          <figure className="px-10 pt-10">
            <img src={brand_logo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-[#d64949]">{brand}</h2>
          </div>
        </div>
      </Link>
    );
};

export default BrandCard;