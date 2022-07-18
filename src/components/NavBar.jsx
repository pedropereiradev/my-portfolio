import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { DarkMode, LightMode } from '@mui/icons-material';
import Context from '../context/Context';

function NavBar() {
  const { colorMode, mode } = useContext(Context);
  const [anchor, setAnchor] = useState(false);

  const sections = ['skills', 'projects', 'contact'];

  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setAnchor(open);
  };
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          {/* Menu small screen < 600px */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pedro Pereira
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={anchor}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {sections.map((section) => (
                    <ListItem key={section} disablePadding>
                      <ListItemButton LinkComponent href={`#${section}`}>
                        <ListItemText primary={section} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>
          {/* Menu bigger then 600px */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 3,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pedro Pereira
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end' }}>
            {sections.map((section) => (
              <Button
                key={section}
                href={`#${section}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <IconButton sx={{ ml: { xs: 0, sm: 5 } }} onClick={colorMode.toggleColorMode} color="inherit">
            {mode === 'dark' ? <DarkMode /> : <LightMode /> }
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
