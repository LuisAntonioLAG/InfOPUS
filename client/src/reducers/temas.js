import { LIGHT_DARK, GREEN_BLUE } from "../constants/actionTypes.js";

export default (tema = {modo: "light", cor: ""}, action) => {
  switch (action.type) {
    case LIGHT_DARK:
      const themeMode = action.payload === "light" ? "dark" : "light";

      return { ...tema, modo: themeMode };

      case GREEN_BLUE:
        sessionStorage.setItem('profile',JSON.stringify({ ...action?.data }));

        return {...tema, cor: action?.data.result.tema};
    default:
      return tema;
  }
};
