import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://randomuser.me/api/?results=5'

const fetchUser = createAsyncThunk('users/fetchUsers',async(thunkAPI)=>{
 try {
  const resp = await axios(url)
  return resp.data;
 } catch (error) {
    return thunkAPI.rejectWithValue('ooops smoething wrent wrong')
 }
})

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
}


export const usersSlice = createSlice({
    name:'users',
    initialState,
    Reducers: {},
    extraReducers: {}
})

export default usersSlice.reducer;