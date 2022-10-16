import { FunctionComponent } from "react";

import { Box, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";

const Nav: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Box component={"nav"} display={"flex"} alignItems={"center"} gap={2}>
      <Typography variant="navbar-item">products</Typography>
      <Link passHref href={"/pricing"}>
        <MuiLink>
          <Typography variant="navbar-item">pricing</Typography>
        </MuiLink>
      </Link>
      <Link passHref href={"/documents"}>
        <MuiLink>
          <Typography variant="navbar-item">documents</Typography>
        </MuiLink>
      </Link>
      <Typography variant="navbar-item">community</Typography>
      <Link passHref href={"/blog"}>
        <MuiLink>
          <Typography variant="navbar-item">blog</Typography>
        </MuiLink>
      </Link>
      <Link passHref href={"/contact"}>
        <MuiLink>
          <Typography variant="navbar-item">contact</Typography>
        </MuiLink>
      </Link>
    </Box>
  );
};

export default Nav;
