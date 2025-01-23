import { useReducer } from 'react';
import { AuthContext, AuthReducer } from './';
import { types } from '../types';

const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
            },
        }
        console.log(action.payload);
        dispatch(action);
    }
    return (
        <AuthContext.Provider value={{...authState, login}}>
            {children}
        </AuthContext.Provider>
    );
}
