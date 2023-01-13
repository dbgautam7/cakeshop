import {ADD_USER_DETAILS} from "../actionTypes/actionTypes";
  
  const initialState = {
    email: "",
    phoneNumber: "",
    token: "",
  };
  
  const userSlice = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_DETAILS:
        const { email,phoneNumber } = action.payload;
        return {
          ...state,
          email,
          phoneNumber,
        };
      default:
        return state;
    }
  };
  
  export default userSlice;