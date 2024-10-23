import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemText,
  Divider,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Shyama Prasad Mukherji College
        </Typography>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          style={{ display: isMobile ? 'none' : 'flex', gap: '20px' }}
        >
          <MenuItemWithSubmenu title="About Us">
            {/* Submenu Items */}
            <MenuItemLink text="ABOUT SHYAMA PRASAD MUKHERJI COLLEGE FOR WOMEN" url="#" />
            <MenuItemLink text="About Dr. Shyama Prasad Mukherji" url="#" />
            <MenuItemWithSubmenu title="Administration">
              <MenuItemLink text="Organizational Structure" url="#" />
              <MenuItemLink text="Governing Body" url="#" />
              <MenuItemLink text="Principal" url="#" />
              <MenuItemWithSubmenu title="Staff">
                <MenuItemLink text="Non-Teaching" url="#" />
                <MenuItemLink text="Teaching Faculty" url="#" />
              </MenuItemWithSubmenu>
              <MenuItemLink text="Librarian" url="#" />
              <MenuItemLink text="Administrative Officer" url="#" />
              <MenuItemLink text="Committees" url="#" />
            </MenuItemWithSubmenu>
            <MenuItemLink text="Annual Report" url="#" />
            <MenuItemLink text="Vision and Mission" url="#" />
            <MenuItemLink text="Code of Ethics" url="#" />
            <MenuItemLink text="SWOC" url="#" />
          </MenuItemWithSubmenu>

          <MenuItemWithSubmenu title="IQAC">
            {/* Submenu Items */}
            <MenuItemLink text="AQAR" url="#" />
            <MenuItemLink text="Members" url="#" />
            <MenuItemLink text="Report" url="#" />
            <MenuItemWithSubmenu title="Policies">
              <MenuItemLink text="Institutional Development Plan" url="#" />
              <MenuItemLink text="Green Initiatives" url="#" />
              <MenuItemLink text="Annual Gender Sensitization" url="#" />
              <MenuItemLink text="Planning & Strategy" url="#" />
              <MenuItemLink text="Resource Mobilization" url="#" />
              <MenuItemLink text="E-Governance" url="#" />
              <MenuItemLink text="Environmental Policy" url="#" />
              <MenuItemLink text="Financial Assistance Policy" url="#" />
            </MenuItemWithSubmenu>
            <MenuItemLink text="Institutional Best Practices" url="#" />
            <MenuItemLink text="Institutional Distinctiveness" url="#" />
            <MenuItemLink text="Meeting Minutes" url="#" />
          </MenuItemWithSubmenu>

          <MenuItemWithSubmenu title="NAAC">
            <MenuItemLink text="SSR_FirstCycle_2018" url="#" />
            <MenuItemWithSubmenu title="SPMC Cycle 2">
              <MenuItemLink text="Supporting Documents for SSR" url="#" />
              <MenuItemLink text="DVV Clarifications" url="#" />
            </MenuItemWithSubmenu>
          </MenuItemWithSubmenu>

          <MenuItemLink text="NIRF" url="#" />
          <MenuItemLink text="Academics" url="#" />
        </motion.div>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <ListItemText primary="About Us" />
          <ExpandMoreIcon />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>IQAC</MenuItem>
        <MenuItem onClick={handleMenuClose}>NAAC</MenuItem>
        <MenuItem onClick={handleMenuClose}>NIRF</MenuItem>
      </Menu>
    </AppBar>
  );
};

const MenuItemLink = ({ text, url }) => (
  <MenuItem component="a" href={url}>
    <ListItemText primary={text} />
  </MenuItem>
);

const MenuItemWithSubmenu = ({ title, children }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMouseEnter = () => !isMobile && setSubmenuOpen(true);
  const handleMouseLeave = () => !isMobile && setSubmenuOpen(false);
  const handleClick = () => setSubmenuOpen((prev) => !prev);

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isMobile ? handleClick : null}
      sx={{ position: 'relative' }}
    >
      <MenuItem>
        <ListItemText primary={title} />
        <ExpandMoreIcon />
      </MenuItem>
      {submenuOpen && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          sx={{
            position: 'absolute',
            top: '100%', // Align to the bottom of the parent item
            left: 0,    // Position to the left of the parent item
            backgroundColor: 'white',
            color: 'black',
            boxShadow: 1,
            zIndex: 10,
            minWidth: 200,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
