import { LIGHT_DARK, GREEN_BLUE } from "../constants/actionTypes.js";

export const switchMode = (theme) => (dispatch) => {
  const themeMode = theme.palette.type;
  dispatch({ type: LIGHT_DARK, payload: themeMode });
};

export const switchColor = () => (dispatch) => {};
