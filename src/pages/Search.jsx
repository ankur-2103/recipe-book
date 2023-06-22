import React from 'react'
import SearchBar from '../components/Search/SearchBar'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/Recipes/RecipeCard'

const Search = () => {

    const serachRecipes = useSelector(state => state.recipes.searchRecipes);

    return (
        <>
            <div className='flex flex-col max-w-7xl lg:mx-auto mx-4'>
                <SearchBar />
                <span className='text-xl font-medium md:text-3xl'>Search Results</span>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {serachRecipes && serachRecipes.map((data)=><RecipeCard key={data.id} id={data.id} name={data.title}/>)}
                </div>
            </div>
        </>
    )
}

export default Search