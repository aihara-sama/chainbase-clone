import { Box, Container } from "@mui/material";
import { FunctionComponent } from "react";
import AuthLinks from "./AuthLinks";
import Logo from "./Logo";
import Nav from "./Nav";

const Header: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Box component={"header"} py={2}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Logo />
          <Nav />
          <AuthLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
