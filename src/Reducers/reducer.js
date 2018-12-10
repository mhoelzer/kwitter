import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../Actions/actions";

const initialState = {
  authentication: {
    loginAuthSuccess: false,
    token: null,
    id: ""
  },
  login: {},
  loginResult: "",
  // if succes, it only reutnr usernme and dispalyname; result gets dumped into redux
  register: {},
  registerResult: "", // result is string, so default that
  userId: null,
  loggedInUser: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: []
  }
};

const kwitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_FAILURE:
      return {
        ...state,
        authentication: {
          loginAuthSuccess: false
        },
        loginResult: action.result
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authentication: {
          loginAuthSuccess: true,
          token: action.payload.token,
          id: action.payload.id
        },
        login: action.login,
        loginResult: action.result
      };
    case REGISTER:
      return state; // if not modifying anything, you can just do something like default to return all stuff; can do to get reducer started and can see all  tings being fired in the redux addont hing
    case REGISTER_FAILURE:
      return {
        // state // placeholder for now; if want to do like
        ...state,
        registerResult: action.result
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.register,
        registerResult: action.result
      };
    case GET_USER:
      return state;
    case GET_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.data
      };
    case GET_USER_FAILURE:
      return state;
    case UPDATE_USER:
      return state;
    case UPDATE_USER_SUCCESS:
      return { ...state, loggedInUser: action.data };
    case UPDATE_USER_FAILURE:
      return state;
    // always need to return somehtign
    default:
      return state;
  }
};

export default kwitterReducer;
