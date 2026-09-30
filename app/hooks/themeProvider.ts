import { createTheme } from "@mui/material";

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: "media" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#4f46e5" },
        background: { default: "#f7f7f9", paper: "#ffffff" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#a5b4fc" },
        background: { default: "#0b0b0f", paper: "#15151b" },
      },
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    h4: { fontWeight: 700, letterSpacing: "-0.02em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCard: {
      defaultProps: { variant: "outlined" },
    },
    MuiTab: {
      styleOverrides: { root: { textTransform: "none", fontWeight: 500, fontSize: "0.95rem" } },
    },
  },
});
