import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
const initialState = {
    user: null,
    token: null,
    listings: []
};

// Create the slice
const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState,
    reducers: {
        // Reducer to set the user and token in the state
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
           
        },
        setListings: (state, action) => {
            state.listings = action.payload.listings;
        }
    },
});

// Export the action
export const { setUser, setListings, setLogout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
