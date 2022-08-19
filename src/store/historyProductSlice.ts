import { IhistoryProduct } from '@/interface/interface';
import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    id: number;
    title: string;
    image: string;
}

interface Ipayload {
    payload: IinitialState;
    type: string;
}

const initialState: IinitialState[] = [];

export const historyProductSlice = createSlice({
    name: 'historyProduct',
    initialState,
    reducers: {
        addProduct: (state: IinitialState[], action: Ipayload) => {
            if (action.payload.id !== 0) {
                if (
                    !state.filter(
                        (product: IinitialState) =>
                            product.id === action.payload.id
                    ).length
                )
                    state.push(action.payload);
            }
        },
        // removeProduct: (state: IhistoryProduct[], action: Ipayload) => {
        //     // state.map((product: IinitialState) => {
        //     //     if (product.id === action.payload.id) {
        //     //         state.splice(state.indexOf(product), 1);
        //     //     }
        //     // });
        //     state.splice(state.indexOf(action.payload), 1);
        // },
    },
});

export const { addProduct } = historyProductSlice.actions;
export default historyProductSlice.reducer;
