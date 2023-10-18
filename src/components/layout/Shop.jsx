import ShopCard from "./ShopCard";
import { useLoaderData } from "react-router-dom";

const Shop = () => {

    const product = useLoaderData();
    
    return (
      <div className="w-[80%] mx-auto my-4">
        <h2 className="my-6 text-center text-3xl font-bold">
          Explore All Products
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {product.map((produts) => (
            <ShopCard key={produts._id} produts={produts}></ShopCard>
          ))}
        </div>
      </div>
    );
};

export default Shop;