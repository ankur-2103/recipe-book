import RecipeCard from './RecipeCard'
import { useSelector } from 'react-redux';
import Loading from '../../pages/Loading';

// This file is used for displaying latest recipes

const LatestRecipes = () => {

    // get recipes from redux
    const recipes = useSelector(state => state.recipes.randomRecipes);


    return recipes ? (
        <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2 ">
            <span className="text-2xl">Latest Recipes</span>
            <div className="mx-auto w-full m-4 p-2 relative group max-w-7xl  grid grid-cols-2 overflow-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map((data, i) => <RecipeCard key={i} id={data.id} name={data.title}/>)}      
            </div>
        </div>
    ) : <Loading/>
}

export default LatestRecipes