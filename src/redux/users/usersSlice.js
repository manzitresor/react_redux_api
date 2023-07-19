import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
}

export const usersSlice = createSlice({
    name:'users',
    initialState,
    Reducers: {

    }
})

export default usersSlice.reducer;