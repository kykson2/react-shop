import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});
