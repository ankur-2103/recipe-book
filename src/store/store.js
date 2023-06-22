import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import recipesSlice from '../slice/recipesSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        recipes: recipesSlice
    }
})