import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
const initialState = {
    user: null,
    token: null,
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
    },
});

// Export the action
export const { setUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
