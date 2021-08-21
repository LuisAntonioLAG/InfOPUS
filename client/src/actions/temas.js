import { LIGHT_DARK, GREEN_BLUE } from "../constants/actionTypes.js";

import * as api from '../api/index.js';

export const switchMode = (theme) => (dispatch) => {
  const themeMode = theme.palette.type;
  
  dispatch({ type: LIGHT_DARK, payload: themeMode });
};

export const switchTheme = (id, novoTema) => async (dispatch) => {

  const { data } = await api.mudarTema(id, novoTema) 

  dispatch({ type: GREEN_BLUE, data })

};

