import { useState } from "react";
import { routes } from "@/utils/routes";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import DrawerNavbar from "./DrawerNavbar";
import { LinkStyled, MuiAppBar, MuiDrawer, MuiToolbarBox } from "./styles";

interface Props {
  window?: () => Window;
}

const NavBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <MuiAppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <MuiToolbarBox>
            <LinkStyled href={routes.home.path}>{routes.home.title}</LinkStyled>
            <LinkStyled href={routes.favorite.path}>
              {routes.favorite.title}
            </LinkStyled>
          </MuiToolbarBox>
        </Toolbar>
      </MuiAppBar>
      <nav>
        <MuiDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerNavbar onDrawer={handleDrawerToggle} />
        </MuiDrawer>
      </nav>
    </Box>
  );
};

export default NavBar;
