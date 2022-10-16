import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1080,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: ({ theme }) => ({
            borderRadius: "12px",
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            transition: "0.3s",
            paddingTop: "8px",
            paddingBottom: "8px",
            "&:hover": {
              transform: "scale(1.02)",
              opacity: "0.8",
            },
          }),
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          color: theme.palette.primary.main,
        }),
      },
      variants: [
        {
          props: { variant: "navbar-item" },
          style: ({ theme }) => ({
            cursor: "pointer",
            textTransform: "uppercase",
            fontSize: theme.typography.pxToRem(15),
            "&:hover": {
              fontWeight: "bold",
            },
          }),
        },
        {
          props: { variant: "link" },
          style: ({ theme }) => ({
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.link.main,
            },
          }),
        },
        {
          props: {
            variant: "caption",
          },
          style: ({ theme }) => ({
            fontSize: theme.typography.pxToRem(11),
          }),
        },
        {
          props: {
            variant: "body2",
          },
          style: ({ theme }) => ({
            fontSize: theme.typography.pxToRem(15),
          }),
        },
        {
          props: {
            variant: "body3",
          },
          style: ({ theme }) => ({
            fontSize: theme.typography.pxToRem(14),
          }),
        },
        {
          props: {
            variant: "body4",
          },
          style: ({ theme }) => ({
            fontSize: theme.typography.pxToRem(13),
          }),
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides(theme) {
        return {
          "html, body": {
            height: "100%",
          },
          img: {
            maxWidth: "100%",
          },
        };
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "none",
        style: {
          cursor: "pointer",
        },
      },
    },
  },
};
