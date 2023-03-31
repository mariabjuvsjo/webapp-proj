import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setPlaces: (state, action) => {
            state.places = action.payload;
        },

    }
});

export const { setUser, setPlaces } = userSlice.actions;


//selectors
export const selectUser = (state) => state.user.user

export const selectPlaces = (state) => state.user.places




export default userSlice.reducer;