export const registerUser = (userData) => {
  return({
    type: "REGISTER_USER",
    payload: userData,
  })
}

export const loginUser = (userData) => {
  return({
    type: "LOGIN_USER",
    payload: userData,
  })
}

export const logoutUser = () => {
  return({
    type: "LOGOUT_USER",
  })
}

export const getUser = (userData) => {
  return({
    type: "GET_USER",
    payload: userData,
  })
}