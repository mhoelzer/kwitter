export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
};