import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import breadCrumbsReducer from '@/store/breadCrumbsSlice';
import historyProductReducer from '@/store/historyProductSlice';
import loginReducer from '@/store/loginSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        breadCrumbs: breadCrumbsReducer,
        historyProduct: historyProductReducer,
        loginInformation: loginReducer,
    },
});
