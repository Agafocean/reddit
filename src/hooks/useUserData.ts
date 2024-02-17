import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducer';
import { IUserData, meRequestAsync } from '../store/me/actions';

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (token) {
            dispatch(meRequestAsync());
        }
    }
        , [token]);
    return { data, loading }
}