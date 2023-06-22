import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
  name: 'recipes',
    initialState: {
      sliderRecipes: null,
      cakeRecipes: null,
      chikenRecipes: null,
      randomRecipes: null,
      searchRecipes: null
    },
  reducers: {
    setSliderRecipes: (state, action) => {
        state.sliderRecipes = action.payload
    },
    setCakeRecipes: (state, action) => {
        state.cakeRecipes = action.payload
    },
    setChickenRecipes: (state, action) => {
      state.chikenRecipes = action.payload
    },
    setRandomRecipes: (state, action) => {
      state.randomRecipes = action.payload
    },
    setSearchRecipes: (state, action) => {
      state.searchRecipes = action.payload
    }
  }
})

export const { setSliderRecipes, setCakeRecipes, setChickenRecipes, setRandomRecipes, setSearchRecipes } = recipesSlice.actions

export default recipesSlice.reducer