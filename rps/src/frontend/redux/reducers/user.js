const init_state = {
  username: "",
  fullname: "",
  user_auth: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
        return {...state, action: action.payload}
    default:
        return state;
  }
};

export default reducer;
