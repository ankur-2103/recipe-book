import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';

// This file is used for displaying slider content

const SliderItem = ({ id, name, readyIn, servings, summary }) => {

    // reference of slider item to animate change
    const animate = useRef();

    // animate changes on slider item change
    useEffect(() => {
        
        setTimeout(() => {
            animate.current.classList.add('animate-fadeInAnimation');
        }, 5)
        
        const removeClass = () => {
            try {
                animate.current.classList.remove('animate-fadeInAnimation');
            } catch (error) {
                console.log(error);
            }
        }        
        return () => removeClass()
    },[id])

    return (
        <div className={`h-full flex flex-col md:flex-row cursor-pointer `} ref={animate}>
            <img src={`https://spoonacular.com/recipeImages/${id}-636x393.jpg`} alt="" className='md:flex-auto md:w-96 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl'/>
            <div className='flex flex-1 gap-4 bg-[#E3F1FF] flex-col py-4 px-10 overflow-auto md:px-6 rounded-br-3xl rounded-bl-3xl md:rounded-tr-3xl md:rounded-bl-none'>
                <span className='text-2xl font-bold text-black md:text-4xl'>{name}</span>      
                <p className='text-sm text-zinc-500 overflow-auto italic ' dangerouslySetInnerHTML={{ __html: summary }}></p>      
                <div className='flex gap-4'>
                    <span className='text-lg text-zinc-500 '>Ready in: <span className='text-black font-bold'>{readyIn} mins</span></span>      
                    <span className='text-lg text-zinc-500 '>Servings: <span className='text-black font-bold'>{servings}</span></span>      
                </div> 
                <NavLink to={`/recipe/${id}`}>Read more...</NavLink>
            </div>
        </div>
    )
}

export default SliderItem