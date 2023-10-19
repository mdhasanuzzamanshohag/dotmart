import { useLoaderData } from "react-router-dom";

const Category = () => {

    const data = useLoaderData();
    
    const { brand } = data;
    
    return (
        <div>
            <h2>{ brand}</h2>
        </div>
    );
};

export default Category;