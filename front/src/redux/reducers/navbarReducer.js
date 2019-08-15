import { SET_OPEN_CLOSE_NAVBAR } from "../../constants";

const initialState = {
  status: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  
    case SET_OPEN_CLOSE_NAVBAR:
      return Object.assign({}, state, { status: action.val });

    default:
      return state;
  }
};
