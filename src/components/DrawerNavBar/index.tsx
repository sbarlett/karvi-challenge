import { routes } from "@/utils/routes";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerNavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Link
              href={routes.home.path}
              sx={{
                textDecoration: "none",
                color: "#566DED",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {routes.home.title}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Link
              href={routes.favorite.path}
              sx={{
                textDecoration: "none",
                color: "#566DED",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {routes.favorite.title}
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          position: "unset",
          backgroundColor: "#FFFFFF",
          padding: "0px 30px",
          "& svg": {
            color: "#566DED",
          },
        }}
      >
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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-start",
              gap: "20px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link
              href={routes.home.path}
              sx={{
                textDecoration: "none",
                color: "#566DED",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {routes.home.title}
            </Link>
            <Link
              href={routes.favorite.path}
              sx={{
                textDecoration: "none",
                color: "#566DED",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {routes.favorite.title}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none", backgroundColor: "#FFFFFF" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
