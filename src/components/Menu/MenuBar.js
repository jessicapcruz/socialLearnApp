import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import { searchContent } from '../../store/actions/menuBar.action';
import { searchContent } from '../../redux/slices/search.slice';
import useStyles from './MenuBarStyles';

export default function MenuBar() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const registarContent_onClick = useCallback(event => {
      setAnchorEl(null);      
      history.push('/content-list');
      handleMobileMenuClose();
    }, [history]);

    const login_onClick = useCallback(event => {
      setAnchorEl(null);      
      history.push('/login');
    }, [history]);

    const registerUser_onClick = useCallback(event => {
      setAnchorEl(null);      
      history.push('/user-add');
    }, [history]);

    
    const handleContentsMenuOpen_onClick = useCallback(event => {
      setAnchorEl(null);      
      history.push('/content-list');
    }, [history]);

    const handleHome_onClick = useCallback(event => {
      setAnchorEl(null);      
      history.push('/');
    }, [history]);
   

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
            dispatch(searchContent({ data: event.target.value }))
                .unwrap()
                .then((data) => {
                    localStorage.setItem('search_list', JSON.stringify(data));
                    history.push('/busca');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
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
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={registerUser_onClick}>Cadastre-se</MenuItem>
            <MenuItem onClick={login_onClick}>Entrar</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleHome_onClick}>
                <IconButton aria-label="home" color="inherit">
                    <HomeIcon />
                </IconButton>
                <p>Home</p>
            </MenuItem>
            <MenuItem onClick={handleContentsMenuOpen_onClick}>
                <IconButton aria-label="consteúdos" color="inherit">
                    <AccountTreeIcon />
                </IconButton>
                <p>Conteúdos</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Perfil</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <IconButton onClick={handleHome_onClick}
                  edge="end"
                  aria-label="home" 
                  color="inherit">
                    <HomeIcon />
              </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              SocialLearn
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="O que você quer aprender?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={onKeyUp}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              
             <IconButton  
                edge="end"
                aria-label="conteúdos" 
                color="inherit"
                onClick={handleContentsMenuOpen_onClick}>
                <AccountTreeIcon />
              </IconButton>              
              <IconButton
                edge="end"
                aria-label="usuário"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="mostrar mais"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
}
