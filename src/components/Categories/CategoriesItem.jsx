import React from 'react'

const CategoriesItem = ({data}) => {
    return (
        <div className='flex flex-col items-center p-2 cursor-pointer min-w-52'>
            <img src='' alt='' className='rounded-full ring-zinc-300 ring-2 w-full' />
            <span className=' truncate'>{data}</span>
        </div>
    )
}

export default CategoriesItem