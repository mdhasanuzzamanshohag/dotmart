import MyCardDetails from "./MyCardDetails";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const MyCard = () => {
    
    const data = useLoaderData();
    
    const [products, setProducts] = useState(data);
    
    
    return (
      <div className="w-[80%] mx-auto my-4">
        <h2 className="my-6 text-center text-3xl font-bold">
          Your Favourite Products
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4">
          {products.map((data1) => (
            <MyCardDetails
              key={data1._id}
              data1={data1}
              products={products}
              setProducts={setProducts}
            ></MyCardDetails>
          ))}
        </div>
      </div>
    );
};

export default MyCard;