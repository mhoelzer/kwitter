import {
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_MESSAGES,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
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
  loggedInUser: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: []
  },
  // logoutUser: {
  //   succes:
  // }
  login: {},
  loginResult: "",
  messages: [],
  // if succes, it only reutnr usernme and dispalyname; result gets dumped into redux
  register: {},
  registerResult: "", // result is string, so default that
  userId: null
};

const kwitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state;
    case DELETE_USER_FAILURE:
      return state;
    case DELETE_USER_SUCCESS:
      // do a slice and filter of based on the id or something based on all users?
      return {
        ...state,
        initialState
      };
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
    case GET_MESSAGES:
      return state;
    case GET_MESSAGES_FAILURE:
      return state;
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages
      };
    case LOGOUT:
      return state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser,
        authentication: initialState.authentication
      };
    case LOGOUT_FAILURE:
      return state;
    // always need to return somehtign; could combine all of the cases with just the return state, but it doesnt waste that much time to not have it
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
 