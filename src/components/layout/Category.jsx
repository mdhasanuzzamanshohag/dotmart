import CategoryCard from "./CategoryCard";
import { useLoaderData } from "react-router-dom";

const Category = () => {

    const data = useLoaderData();
    
    return (
      <div className="w-[80%] mx-auto">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/vvsZQPn/download.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/sJMjSdg/download.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://www.computersmobile.com.au/wp-content/uploads/2016/11/slider1-1200x480.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/sJMjSdg/download.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
          {data.map((data1) => (
            <CategoryCard key={data._id} data1={data1}></CategoryCard>
          ))}
        </div>
      </div>
    );
};

export default Category;