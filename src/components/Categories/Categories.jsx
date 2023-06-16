import React from 'react'
import CategoriesItem from './CategoriesItem'

const categories = [
    'Pasta',
    'Pizza',
    'Pizza',
    'Pizza',
    'Pizza',
    'Pizza',
    'Pizza',
    'Pizza',
]

const Categories = () => {
    return (
        <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2">
            <span className="text-2xl">Categories</span>
            <div className="mx-auto w-full px-4 relative group max-w-7xl  flex flex-col  md:flex-row md:gap-10 overflow-auto">
                {categories.map((data, key) => <CategoriesItem key={key} data={data} />)}
            </div>
        </div>
    )
}

export default Categories