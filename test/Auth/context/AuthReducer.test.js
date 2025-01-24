import { types } from "../../../src/auth";
import { AuthReducer } from "../../../src/auth/context/AuthReducer";

describe('Pruebas del AuthReducer', () => { 
    const action = {
        type: types.login,
        payload: {
            id: 'ABC',
            name: 'Fernando',
        }
    }; 

    test('Debe de retornar el estado por defecto', () => { 
        const state = AuthReducer({logged: false}, {} ) 
        expect(state).toBe(state);
    }); 

    test('debe de (login) llamar el login autentificar y establecer el usuario', () => { 
        const state = AuthReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe de (logout) borrar el usuario y logged en false', () => { 
        const usuarioLogeado = {
            logged: true,
            user: action.payload
        };

        const state = AuthReducer(usuarioLogeado, {type: types.logout});
        expect(state).toEqual({logged: false});
     });
});