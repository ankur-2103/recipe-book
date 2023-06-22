import React, { useEffect, useState } from 'react'
import { getAutoCompleteRecipes, getRecipesByfilter } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setSearchRecipes } from '../../slice/recipesSlice';

// This file is used for displaying search bar in search page

const SearchBar = () => {

    // state for search query and search options
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryOptions, setSearchQueryOptions] = useState();

    // use of useDispatch hook to set state in redux
    const dispatch = useDispatch();

    // get search options according to search query
    useEffect(() => {
        const getData = async () => {
            const res = await getAutoCompleteRecipes(searchQuery);
            setSearchQueryOptions(res.data);
        }

        if (searchQuery.length) {
            getData();  
        }
    }, [searchQuery])
    
    // handle search option click
    const handleSearch = async (query, number=50) => {
        const res = await getRecipesByfilter({query, number});
        dispatch(setSearchRecipes(res.data.results));
        setSearchQueryOptions(null);
    }

    return (
        <div className='flex flex-col md:max-w-7xl w-full mx-auto my-4 items-center'>
            <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-md border-0 py-1.5 pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 "
                placeholder="Search"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <div className='flex flex-col w-full bottom-0 bg-[#F9F9F9] rounded-lg divide-y-2 px-4 my-2'>
                {searchQueryOptions && searchQueryOptions.map((data) => 
                    <span className='py-1 font-medium hover:bg-white' key={data.id} onClick={()=>handleSearch(data.title)}>{data.title}</span>
                )}
            </div>
        </div>
    )
}

export default SearchBar