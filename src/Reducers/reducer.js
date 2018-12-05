import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../Actions/actions";

const initialState = {
    authentication: {
        loginAuthSuccess: false, 
        token: null,
    },
    userId: null
}

const kwitterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                authentication: {
                    loginAuthSuccess: false
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authentication: {
                    loginAuthSuccess: true,
                    token: action.payload,
                }
            }
        default:
            return state;
    }
}

export default kwitterReducer;