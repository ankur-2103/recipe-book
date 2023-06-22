import { NavLink } from 'react-router-dom';

const RecipeCard = ({ id, name, healthScore, data }) => {
    

    return (
        <div className='flex flex-col my-4 ring-2 rounded-3xl ring-zinc-300 p-2 shadow-lg md:w-52 md:max-h-64 relative'>
            <img src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`} alt='' className='rounded-2xl md:w-52 md:h-64'/>      
            <div className='flex flex-col my-2 '>
                {healthScore && <span>Health Score: <span className='text-yellow-500 font-bold'>{healthScore}</span></span>}
                <span className='font-bold truncate'>{name}</span>
                <NavLink className='w-fit rounded-lg ring-2 ring-zinc-600 my-1 px-2' to={`/recipe/${id}`}>View details...</NavLink>
            </div>
        </div>
    )
}

export default RecipeCard