import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Hidden } from '@mui/material';
import { Sidebar } from './SidebarDrawer';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <AppBar position="static">
        <Toolbar>
         <Hidden mdUp>
         <Sidebar />
         </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor: "pointer"}}>
            To-Do
          </Typography>
            <Hidden mdDown>
                <Button color='inherit' href='/login'>LOGIN</Button>
                <Button color='inherit' href='/register'>REGISTER</Button>
            </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
