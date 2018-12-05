import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../Actions/actions";

const initialState = {
    authentication: {
        loginAuthSuccess: false, 
        token: null,
    },
    // if succes, it only reutnr usernme and dispalyname; result gets dumped into redux
    register: {}, 
    registerResult: "", // result is string, so default that
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
        case REGISTER: 
            return state // if not modifying anything, you can just do something like default to return all stuff; can do to get reducer started and can see all  tings being fired in the redux addont hing
        case REGISTER_FAIL: 
            return {
                // state // placeholder for now; if want to do like 
                ...state, 
                registerResult: action.result
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                register: action.register,
                registerResult: action.result
            }
        // always need to return somehtign 
        default:
            return state;
    }
}

export default kwitterReducer;