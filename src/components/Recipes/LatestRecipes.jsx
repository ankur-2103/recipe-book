import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { getRandomRecipes } from '../../api/api';

const LatestRecipes = () => {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        const getData = async () => {
            const data = await getRandomRecipes('', 24);
            setRecipes(data.data.recipes);
        }
        // getData()
    },[])

    return recipes ? (
        <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2 ">
            <span className="text-2xl">Latest Recipes</span>
            <div className="mx-auto w-full m-4 p-2 relative group max-w-7xl  grid grid-cols-2 overflow-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map((data, i) => <RecipeCard key={i} id={data.id} name={data.title}/>)}      
            </div>
        </div>
    ) : <></>
}

export default LatestRecipes