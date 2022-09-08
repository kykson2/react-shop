import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import breadCrumbsReducer from '@/store/breadCrumbsSlice';
import historyProductReducer from '@/store/historyProductSlice';
import loginReducer from '@/store/loginSlice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    cart: cartReducer,
    breadCrumbs: breadCrumbsReducer,
    historyProduct: historyProductReducer,
    loginInformation: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
export default store;
