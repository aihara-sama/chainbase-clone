import { Box, Button, Link as MuiLink, Typography } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import Link from "next/link";
import { FunctionComponent } from "react";

const AuthLinks: FunctionComponent<BoxProps> = (boxProps) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Box {...boxProps} display={"flex"} alignItems={"center"} gap={2}>
      <Link href={"/login"} passHref>
        <MuiLink>
          <Typography variant="body2">Login</Typography>
        </MuiLink>
      </Link>
      <Link href={"/register"} passHref>
        <MuiLink>
          <Button variant="contained">get started for free</Button>
        </MuiLink>
      </Link>
    </Box>
  );
};

export default AuthLinks;
