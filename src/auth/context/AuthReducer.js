import { types } from "../types/";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case types.logout:
            case types.login:
            return {
                logged: false,
            };
        default:
            return state;
    }
}
