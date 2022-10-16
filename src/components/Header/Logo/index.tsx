import { Box, Link as MuiLink } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Logo: FunctionComponent<BoxProps> = (boxProps) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Link href={"/"} passHref>
      <MuiLink>
        <Box {...boxProps}>
          <Image src={"/icons/logo.png"} alt={"logo"} width={"179"} height={"23"} />;
        </Box>
      </MuiLink>
    </Link>
  );
};

export default Logo;
