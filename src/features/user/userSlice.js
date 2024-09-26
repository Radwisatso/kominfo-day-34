import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'counter',
    initialState: {
        username: "",
        email: ""
        
    },
    reducers: {
       
    }
})

export const { } = userSlice.actions

export default userSlice.reducer