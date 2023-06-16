import React from 'react'

const CollectionCard = ({title, img, tag}) => {
    return (
        <div className='flex flex-col ring-1 ring-slate-400 rounded-lg p-2'>
            <img src={img} alt='' className='rounded-lg w-full h-64 object-cover' />
            <div className='flex md:justify-between my-2 items-center'>
                <span className='text-2xl font-bold p-2 flex-1 w-20 md:flex-none md:w-fit'>{title}</span>
                <span className='ring-1 ring-black w-fit h-fit p-2 rounded-lg cursor-pointer'>Show Collection</span>
            </div>
        </div>
    )
}

export default CollectionCard