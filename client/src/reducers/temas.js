import { LIGHT_DARK, GREEN_BLUE } from "../constants/actionTypes.js";

export default (tema = { modo: "light", cor: "Verde" }, action) => {
  switch (action.type) {
    case LIGHT_DARK:
      const themeMode = action.payload === "light" ? "dark" : "light";

      return { ...tema, modo: themeMode };
    default:
      return tema;
  }
};
