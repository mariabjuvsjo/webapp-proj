import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelInfo: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelInfo: (state, action) => {
            state.travelInfo = action.payload
        }
    }
});

export const { setOrigin, setDestination, setTravelInfo
} = navSlice.actions;


//selectors
export const selectOrigin = (state) => state.nav.origin;

export const selectDestination = (state) => state.nav.destination;

export const selecTravelInfo = (state) => state.nav.travelInfo;


export default navSlice.reducer;

