import { userLogoutReducer } from '@/store/loginSlice';
import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const logOut = (): Promise<void> => {
    const dispatch = useDispatch();
    const auth = getAuth();
    useEffect(() => {
        dispatch(userLogoutReducer());
    }, []);
    return auth.signOut();
};

export default logOut;
