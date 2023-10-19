import { useLoaderData } from "react-router-dom";

const Category = () => {

    const data = useLoaderData();
    
    const { name } = data;
    
    return (
        <div>
            <h2>{ name}</h2>
        </div>
    );
};

export default Category;