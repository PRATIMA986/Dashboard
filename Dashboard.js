import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../src/assets/images/SMK Solutions.png';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import Autofillup from './components/AutoComplete';
import TaskIcon from '@mui/icons-material/Task';
import Product from './components/Product';
import Post from './components/Post';
import CardComponent  from './components/Card';
import Switch from '@mui/material/Switch';
import Stack  from '@mui/material';
import ProfileCard from './components/ProfileCard';
import Grid1 from './components/Grid1';
import Grid2 from './components/Grid2';
import WebTabs from './components/Tabs';




const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const label = { inputProps: { 'aria-label': 'Switch demo' } };

// const icons = [<DashboardIcon />, <MailIcon />, <PeopleIcon />, <SettingsIcon />, <VerifiedUserIcon />, <PeopleOutlineIcon />, <PeopleIcon />, <AssessmentIcon />, <NotificationsIcon />, <AddBoxIcon />];



export default function MiniDrawer(props) {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState();
  const [collapse, setCollapse] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState(null);

  const logoutHandle = () => {
    props.setappState("Login")
    sessionStorage.setItem("loginState","Login")
  }


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl();
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOptionClick = (index) => {
    if (selectedItems === index) {
      setSelectedItems(null);
    } else {
      setSelectedItems(index);
    }
  }

  const menuItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon color="secondary"/>,
      subMenu: []
    },
    {
      name: "Manage Task",
      icon: <MailIcon color="secondary"/>,
      subMenu: [
        {
          name: "Add Task",
          icon: <TaskIcon color="secondary"/>
        },
        {
          name: "List Task",
          icon: <ListIcon color="secondary"/>
        }
      ]
    },
    {
      name: "Manage Post",
      icon: <TaskIcon color="secondary"/>,
      subMenu: []
    },
    {
      name: "Profile",
      icon: <AccountCircle color="secondary"/>,
      subMenu: []
    },
    {
      name: "Grid",
      icon: <MailIcon color="secondary"/>,
      subMenu: [
        {
          name: "Grid1",
          icon: <TaskIcon color="secondary"/>
        },
        {
          name: "Grid2",
          icon: <ListIcon color="secondary"/>
        }
      ]
    },
    {
      name: "Manage Tabs",
      icon: <AccountCircle color="secondary"/>,
      subMenu: []
    }
  ]


  const [dbState, setdbState] = React.useState(sessionStorage.getItem("dashboardState") || "dashboard")

  const handleChangeMenu = (menuname) => {
    sessionStorage.setItem("dashboardState", menuname)
    setdbState(sessionStorage.getItem("dashboardState"))
  }

  const changeMode = () =>{
    props.setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open} >
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >

            <MenuIcon style={{ color: 'whitesmoke' }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ color: 'whitesmoke', fontWeight: 'bold'}}>
            CMS
          </Typography>
          
          <div style={{marginLeft: '75%'}}>

          <Switch {...label} checked={props.mode === "dark"} onChange={(e) => changeMode()}/>

          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="secondary"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={() => logoutHandle()}>Logout</MenuItem>
            </Menu>
            </div>
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <img src={logo} id='logo' />
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}

          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          {menuItems.map((item, index) => (
          <>
            <ListItemButton 
              onClick={(e) => {handleOptionClick(index); handleChangeMenu(item.name)}  }
              // sx={[
              //   {
              //     minHeight: 48,
              //     px: 2.5,
              //   },
              //   open
              //     ? {
              //       justifyContent: 'initial',
              //     }
              //     : {
              //       justifyContent: 'center',
              //     },
              // ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icon}

              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />

              {item.subMenu.length > 0 && 

              (selectedItems === index ? 

              <ExpandLess/> 
                : 
                <ExpandMore 
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                 ]}
                 />)}

            </ListItemButton>

                {item.subMenu.length > 0 && 
                <Collapse in={selectedItems === index} timeout="auto" unmountOnExit>
                  {item.subMenu.map((subMenu) =>(
                    <List>
                      <ListItem 
                      button
                      sx={{
                        pl:4,
                      }}
                      onClick={()=> handleChangeMenu(subMenu.name)}
                      selected ={dbState === subMenu.name}
                      >
                        <ListItemIcon>
                            <Tooltip title={subMenu.name}>
                              {subMenu.icon}
                            </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary={subMenu.name}/>
                      </ListItem>

                    </List>
                  ))}
                </Collapse>
                }

         </>
         ))}
        </List>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {
          dbState === "Dashboard" && <CardComponent/>
        }
        {
          dbState === "Add Task" && <Autofillup/>
        }
        {
          dbState === "List Task" && <Product/>
        }
        {
          dbState === "Manage Post" && <Post/>
        }
        {
          dbState === "Profile" && <ProfileCard/>
        }
        {
          dbState === "Grid1" && <Grid1/>
        }
        {
          dbState === "Grid2" && <Grid2/>
        }
        {
          dbState === "Manage Tabs" && <WebTabs/>
        }
      </Box>
    </Box>
  );
}


{/* <Typography><div id="sidebar"><h1 style={{color: "black"}}> Welcome to SMK SOLUTIONS Dashboard</h1></div></Typography> */}