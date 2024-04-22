import { Drawer, Box, Typography, IconButton, List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useState } from "react";
import { Menu, Login, PersonAdd } from "@mui/icons-material";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton size="small" onClick={() => setSidebarOpen(true)} edge="start" color="inherit">
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Sidebar
          </Typography>
        <List>
          <ListItemButton href="/login">
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText>
              Login
            </ListItemText>
          </ListItemButton>
          <ListItemButton href="/register">
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText>
              Register
            </ListItemText>
          </ListItemButton>
        </List>
        </Box>
      </Drawer>
    </>
  );
};
