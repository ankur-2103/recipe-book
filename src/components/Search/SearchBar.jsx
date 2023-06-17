import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex flex-col md:max-w-7xl w-full mx-auto my-4 items-center'>

            <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-md border-0 py-1.5 pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 "
                placeholder="Search"
            />
            <div className='flex flex-col w-full bottom-0 bg-[#F9F9F9] rounded-lg divide-y-2 px-4 my-2'>
                <span className='py-1 font-medium'>asas</span>
                <span className='py-1 font-medium'>asas</span>
                <span className='py-1 font-medium'>asas</span>
                <span className='py-1 font-medium'>asas</span>
            </div>
            <button className='ring-1 ring-black rounded-xl w-fit px-2 my-2'>Show all results</button>
        </div>
    )
}

export default SearchBar