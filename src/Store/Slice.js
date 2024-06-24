import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
const initialState = {
    user: null,
    token: null,
    listings: [] // Ensure listings is an array
};

// Create the slice
const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.listings = [];
        },
        setListings: (state, action) => {
            console.log("setListings action payload:", action.payload);
            state.listings = action.payload.listings; // Make sure to use action.payload.listings
        }
    },
});

// Export the actions
export const { setUser, setListings, setLogout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
