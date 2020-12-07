import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_USERS_MARKS,
} from "./userTypes";

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => {
        const users = response.data.map((it) => {
          return {
            id: it.id,
            fullName: `${it.lastName} ${it.firstName}`,
            firstLetter: it.lastName.substr(0, 1).toUpperCase(),
            month: new Date(it.dob).getMonth() + 1,
            number: new Date(it.dob).getDate(),
            year: new Date(it.dob).getFullYear(),
            active: false,
          };
        });

        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(getUsersFailure(error.message));
      });
  };
};

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};

export const setUsersMarks = (id) => {
  return {
    type: SET_USERS_MARKS,
    payload: id,
  };
};
