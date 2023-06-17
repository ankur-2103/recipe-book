import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
    initialState: {
        info: null,
        isLoading: true
    },
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload
    },
    setIsloading: (state, action) => {
        state.isLoading = action.payload
    }  
  }
})

export const { setUser, setIsloading } = userSlice.actions

export default userSlice.reducer