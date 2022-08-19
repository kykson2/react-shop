import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    prev: string;
    current: string;
}

interface Ipayload {
    payload: IinitialState;
    type: string;
}

const initialState: IinitialState = { prev: '', current: '' };

export const breadCrumbsSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setbreadCrumbsReducer: (state: IinitialState, action: Ipayload) => {
            state.current = action.payload.current;
            state.prev = action.payload.prev;
        },
        removebreadCrumbsReducer: (state: IinitialState) => {
            state.current = '';
            state.prev = '';
        },
    },
});

export const { setbreadCrumbsReducer, removebreadCrumbsReducer } =
    breadCrumbsSlice.actions;

export default breadCrumbsSlice.reducer;
