import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard";
import { getRandomRecipes } from "../../api/api";



const Recipes = ({title}) => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getRandomRecipes(title.toLowerCase());
            setRecipes(data.data.recipes);
        }
        // getData()
    },[])

    return recipes ?  
        (
            <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2 ">
                <span className="text-2xl">{title}</span>
                <div className="mx-auto w-full m-4 px-4 relative group max-w-7xl  flex flex-col gap-5 overflow-auto md:flex-row md:gap-10">
                    {recipes.map((data, i) => <RecipeCard key={data.id} id={data.id} name={data.title} healthScore={data.healthScore}/>)}    
                </div>
            </div>
        ) 
        : <></>
    
}

export default Recipes