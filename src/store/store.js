import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import recipesSlice from '../slice/recipesSlice'

// create a store for storing slice

export default configureStore({
    reducer: {
        user: userSlice,
        recipes: recipesSlice
    }
})