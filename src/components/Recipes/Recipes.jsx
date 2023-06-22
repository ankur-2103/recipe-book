import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard";
import Loading from "../../pages/Loading";
import { useSelector } from "react-redux";

// This file is used for displaying recipes

const Recipes = ({ title }) => {
    
    // state for displaying recipes cards
    const [recipes, setRecipes] = useState(null);

    // get data from redux
    const cake = useSelector(state => state.recipes.cakeRecipes);
    const chicken = useSelector(state => state.recipes.chikenRecipes);

    // set display recipes according to title
    useEffect(() => {
        if (title === 'Cakes') {
            setRecipes(cake);
        } else {
            setRecipes(chicken);
        }
    }, [cake, chicken, title]);

    return recipes ?  
        (
            <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2 ">
                <span className="text-2xl">{title}</span>
                <div className="mx-auto w-full m-4 px-4 relative group max-w-7xl  flex flex-col gap-5 overflow-auto md:flex-row md:gap-10">
                    {recipes.map((data, i) => <RecipeCard key={data.id} id={data.id} name={data.title} healthScore={data.healthScore} data={data}  />)}    
                </div>
            </div>
        ) 
        : <Loading/>
    
}

export default Recipes