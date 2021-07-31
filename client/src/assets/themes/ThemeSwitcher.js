import { GreenDarkTheme, GreenLightTheme } from "./themes"

const themes = {
  GreenLightTheme,
  GreenDarkTheme,
}

export default function getTheme(theme) {
  return themes[theme]
}