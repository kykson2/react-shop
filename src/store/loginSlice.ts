import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    idToken?: string;
    email: string;
}

interface Ipayload {
    payload: IinitialState;
    type: string;
}

const initialState: IinitialState = { idToken: '', email: '' };
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getAuthenticatorTokenReducer: (
            state: IinitialState,
            action: Ipayload
        ) => {
            state.idToken = action.payload.idToken;
            state.email = action.payload.email;
        },

        userLogoutReducer: (state: IinitialState) => {
            state.email = '';
            state.idToken = '';
        },
    },
});

export const { getAuthenticatorTokenReducer, userLogoutReducer } =
    loginSlice.actions;
export default loginSlice.reducer;
