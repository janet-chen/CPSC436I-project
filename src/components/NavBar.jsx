import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import travelr from '../travelr.svg';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navBar: {
    backgroundColor: 'white'
  },
  navButton: {
    "margin-right": 20,
    "margin-top": "5px"
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/login">
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Link>
      <Link to="/register">
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <img src={travelr} />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/calendar" className={classes.navButton}>
              <Button variant="outlined" >Calendar</Button>
            </Link>
            <Link to="/register" className={classes.navButton}>
              <Button variant="outlined" >Sign Up</Button>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className="MuiIconButton-colorSecondary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
