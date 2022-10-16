import { PaletteOptions, ThemeOptions } from "@mui/material";

const red: PaletteOptions["red"] = {};

export const lightThemeOptions: ThemeOptions = {
  components: {},
  palette: {
    mode: "light",
    red,
    primary: {
      main: "#525e70",
      light: "#f5f8f9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a4aab0",
    },
    divider: "#f0f0f0",
    link: {
      main: "#4d9dfd",
    },
  },
};
