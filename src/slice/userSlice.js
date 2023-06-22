import { createSlice } from '@reduxjs/toolkit'

// create a slice for storing data in state

export const userSlice = createSlice({
  name: 'user',
    initialState: {
      info: null,
      isLoading: true,
      savedRecipes: null  
    },
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload
    },
    setSaveRecipes: (state, action) => {
      state.savedRecipes = action.payload
    }
  }
})

export const { setUser, setIsloading, setSaveRecipes } = userSlice.actions

export default userSlice.reducer