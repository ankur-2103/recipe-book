import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/Recipes/RecipeCard'
import Modal from '../components/Modal/Modal'
import Auth from '../components/Modal/Auth'
import Loading from './Loading'

const SavedRecipes = () => {
    
    const recipes = useSelector(state => state.user.savedRecipes)
    const isLoading = useSelector(state => state.user.isLoading);
    const userInfo = useSelector(state => state.user.info);
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    
    useEffect(() => {
        if (!userInfo && !isOpen) {
            setIsOpen(true);
        } else if(userInfo && isOpen) {
            setIsOpen(false);
        }
    }, [userInfo, isOpen]);


    return  isLoading ? 
        <Loading/>
        :
        (
            <>
                {
                    recipes ? (
                        <div className="flex flex-col mx-auto max-w-7xl" >
                            <span className="font-medium text-3xl mx-4 my-4">Saved recipes</span>
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mx-4">
                                {recipes.map((data, i) => <RecipeCard key={i} id={data.id} name={data.title} />)}
                            </div>
                        </div>)
                    : (
                        <span className=' flex h-[100vh] w-full justify-center items-center'>
                            <Modal isOpen={isOpen}><Auth close={close} /></Modal>
                            Save some recipes!
                        </span>
                    )
                }
            </>
        )
}

export default SavedRecipes