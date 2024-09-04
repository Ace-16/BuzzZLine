import {combineReducers} from 'redux'

export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: false,
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return{
        ...state,
        user: action.payload,
      }
    case "LOGIN_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return{
        ...state,
        user: action.payload,
        isLoggedIn: true
      }
    case "LOGOUT_USER":
      localStorage.removeItem("user");
      return{
        ...state,
        user: null,
        isLoggedIn: false,
      }
    case "GET_USER":
      return{
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default combineReducers({
  auth: authReducer,
})