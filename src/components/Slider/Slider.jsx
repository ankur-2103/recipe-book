import { ArrowLeft, ArrowRight } from '@icon-park/react';
import React, { useEffect, useState } from 'react'
import SliderItem from './SliderItem';
import { getRandomRecipes } from '../../api/api';




  
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recipes, setRecipes] = useState(0);
  
  useEffect(() => {
    const getData = async () => {
      const data = await getRandomRecipes();
      setRecipes(data.data.recipes);
    }
    // getData()
  },[])

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? recipes.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === recipes.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return recipes ? (
        <div className='mx-auto h-[500px] w-full my-5 px-4 relative group max-w-7xl'>
            {<SliderItem id={recipes[currentIndex].id} name={recipes[currentIndex].title} summary={recipes[currentIndex].summary} readyIn={recipes[currentIndex].readyInMinutes} servings={recipes[currentIndex].servings} currIndex={currentIndex}></SliderItem>}
            {/* Left Arrow */}
            <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-400  text-white cursor-pointer'>
                <ArrowLeft theme="outline" size={18} onClick={prevSlide}/>
            </div>
            {/* Right Arrow */}
            <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-400  text-white opacity-80 cursor-pointer'>
                <ArrowRight onClick={nextSlide} size={18} theme='outline'/>
            </div>
        </div>
    ) : <></>
}

export default Slider