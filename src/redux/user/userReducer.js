import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_USERS_MARKS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS: {
      const activeUsers = JSON.parse(sessionStorage.getItem("activeUsers"));

      let users = action.payload;

      if (activeUsers && activeUsers.length > 0) {
        users = action.payload.map((user) => {
          if (activeUsers.includes(user.id)) {
            return { ...user, active: true };
          }
          return user;
        });
      }

      return {
        loading: false,
        users,
        error: "",
      };
    }
    case GET_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    case SET_USERS_MARKS: {

      console.log({payload: action.payload});
      const users = state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, active: !user.active };
        }
        return user;
      });

      sessionStorage.setItem(
        "activeUsers",
        JSON.stringify(
          users.filter((user) => user.active === true).map((user) => user.id)
        )
      );

      return {
        ...state,
        users,
      };
    }
    default:
      return state;
  }
};

export default reducer;
