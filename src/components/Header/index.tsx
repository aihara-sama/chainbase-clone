import { Box, BoxProps, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FunctionComponent, useRef } from "react";
import AuthLinks from "./AuthLinks";
import Logo from "./Logo";
import Nav from "./Nav";

const Header: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~
  const theme = useTheme();

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~
  const headerRef = useRef<HTMLElement>();

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ Variables ~~~~~
  const headerHeight = headerRef.current?.clientHeight;

  const headerProps: BoxProps = {
    ref: headerRef,
    zIndex: theme.zIndex.modal + 1,
    borderBottom: "1px solid",
    borderColor: "divider",
    component: "header",
    py: 2,
    bgcolor: "background.default",
    position: "relative",
  };

  return (
    <Box {...headerProps}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Logo />
          <Nav headerHeight={headerHeight} />
          <AuthLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
