import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, ClickAwayListener, Link as MuiLink, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, MouseEventHandler, useState } from "react";

interface IProps {
  headerHeight: number;
}
const Nav: FunctionComponent<IProps> = ({ headerHeight }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const closeProductsModal = () => {
    setIsProductsModalOpen(false);
  };
  const toggleProductsModal: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    setIsProductsModalOpen((prev) => !prev);
  };

  return (
    <Box component={"nav"} display={"flex"} alignItems={"center"} gap={2}>
      <Box onClick={toggleProductsModal} display={"flex"} alignItems={"center"}>
        <Typography variant="navbar-item">products</Typography>
        <ArrowDropDownIcon />
      </Box>
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
      <ClickAwayListener onClickAway={closeProductsModal}>
        <Modal onClose={closeProductsModal} open={isProductsModalOpen}>
          <Box position={"absolute"} width={"100%"} top={`${headerHeight}px`}>
            Modal
          </Box>
        </Modal>
      </ClickAwayListener>
    </Box>
  );
};

export default Nav;
