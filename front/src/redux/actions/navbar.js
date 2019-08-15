import { SET_OPEN_CLOSE_NAVBAR } from "../../constants";

export const setOpenCloseNavBar = val => ({
  type: SET_OPEN_CLOSE_NAVBAR,
  val
});

export const openCloseNavBar = (val) => dispatch => {
    dispatch(setOpenCloseNavBar(val))
};