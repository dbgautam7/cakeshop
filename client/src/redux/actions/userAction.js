import {ADD_USER_DETAILS} from "../actionTypes/actionTypes";
  
  export const addUserDetails = (userDetails) => (dispatch) => {
    dispatch({
      type: ADD_USER_DETAILS,
      payload: userDetails,
    });
  };
  
