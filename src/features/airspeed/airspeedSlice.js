 import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
 import {airspeedService} from "./airspeedService"

 const initialState = {
    kias: 90, // Knots Indicated Airspeeed
    isError: false // Not an error
 }

 export const airspeedSlice = createSlice({
    name: "airspeed",
    initialState,
    reducers: {}
 })

 export default airspeedSlice.reducer;