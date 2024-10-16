import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceType } from "../../assets/types/sliceTypes";
import { addUser } from "../actions/authAction";

const initialState: AuthSliceType = {
    currentUser:null,
    users:[]
}


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
     setCurrentUser:(state,action) => {
      state.currentUser = action.payload;
     },
    },
    extraReducers: (builder) => {
        builder
          .addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload); 
          })
      },
});

export const {} = authSlice.actions;
export default authSlice.reducer;


