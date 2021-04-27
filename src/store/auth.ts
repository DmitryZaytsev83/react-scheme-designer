import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
    isAuthenticated: boolean
}

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authenticate',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
