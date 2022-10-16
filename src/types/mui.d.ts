import {
  PaletteColor as MuiPaletteColor,
  PaletteColorOptions as MuiPaletteColorOptions,
} from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "navbar-item": TypographyStyleOptions;
    link: TypographyStyleOptions;
    body3: TypographyStyleOptions;
    body4: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    "navbar-item"?: TypographyStyleOptions;
    link?: TypographyStyleOptions;
    body3?: TypographyStyleOptions;
    body4?: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "navbar-item": true;
    link: true;
    body3: true;
    body4: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    red: MuiPaletteColorOptions;
    link: MuiPaletteColor;
  }

  interface PaletteOptions {
    red: MuiPaletteColorOptions;
    link: MuiPaletteColorOptions;
  }
}
