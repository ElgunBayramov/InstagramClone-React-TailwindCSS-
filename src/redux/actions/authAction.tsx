import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../assets/types/sliceTypes";
import axios from "../../services/api";

export const addUser = createAsyncThunk<UserType,UserType>(
    "addUser",
    async (newUser:UserType) => {
        const response = await axios.post("/users",newUser);
        return response.data;
    }
)