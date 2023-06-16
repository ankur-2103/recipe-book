import { Like } from '@icon-park/react'
import React from 'react'

const RecipeCard = ({id, name, healthScore}) => {
    return (
        <div className='flex flex-col my-4 ring-2 rounded-3xl ring-zinc-300 p-2 shadow-lg md:w-52 md:h-52 cursor-pointer relative'>
            <Like size={18} theme='two-tone' fill={['#000' ,'#fff']} className='absolute top-4 right-4 bg-gray-400 text-pink-600 opacity-80 cursor-pointer p-1 rounded-full'/>
            <img src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`} alt='' className='rounded-2xl'/>      
            <div className='flex flex-col my-2 '>
                {healthScore && <span>Health Score: <span className='text-yellow-500 font-bold'>{healthScore}</span></span>}
                <span className='font-bold truncate'>{name}</span>
            </div>
        </div>
    )
}

export default RecipeCard