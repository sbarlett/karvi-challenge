import { routes } from "@/utils/routes";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { LinkStyled } from "./styles";

const DrawerNavbar = ({ onDrawer }: { onDrawer: () => void }) => {
  return (
    <Box onClick={onDrawer} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <LinkStyled href={routes.home.path}>{routes.home.title}</LinkStyled>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <LinkStyled href={routes.favorite.path}>
              {routes.favorite.title}
            </LinkStyled>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerNavbar;
