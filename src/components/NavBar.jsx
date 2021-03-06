import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import travelr from '../travelr.svg';
import Searchbar from './Searchbar';
import { connect } from 'react-redux';

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
    backgroundColor: 'white',
    "margin-bottom": "2em"
  },
  navButton: {
    "margin-right": 20,
    "margin-top": "5px"
  },
  searchbar: {
    "margin-left": 50
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

function PrimarySearchAppBar({signedIn}) {
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
      {signedIn ?
        <div>
          <Link to="/profile" color="inherit">
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/saved" color="inherit">
            <MenuItem onClick={handleMenuClose}>Favourites</MenuItem>
          </Link>
          <Link to="/logout" color="inherit">
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Link>
        </div>
        : <Link to="/login" color="inherit">
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>
      }
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <img src={travelr} />
          </Link>
          <Searchbar />
          <div className={classes.grow} />
          {
            signedIn ?
              <div className={classes.sectionDesktop}>
                <Link to="/saved" className={classes.navButton}>
                  <Button variant="outlined" >Saved</Button>
                </Link>
                <Link to="/calendar" className={classes.navButton}>
                  <Button variant="outlined" >Calendar</Button>
                </Link>
                <Link to="/trips" className={classes.navButton}>
                  <Button variant="outlined" >Trips</Button>
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
              </div> :
              <div className={classes.sectionDesktop}>
                <Link to="/login" color="inherit">
                  <Button variant="outlined" >Login</Button>
                </Link>
              </div>
          }
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signedIn: state.user.signedIn,
  };
};

export default connect(mapStateToProps, null)(PrimarySearchAppBar);;