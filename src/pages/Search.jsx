import React from 'react'
import SearchBar from '../components/Search/SearchBar'

const Search = () => {
    return (
        <div className='flex flex-col mx-4'>
            <SearchBar />
            <span className='text-xl font-medium md:text-3xl'>Search Results</span>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

            </div>
        </div>
    )
}

export default Search