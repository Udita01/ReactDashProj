import React from 'react';
import NavComp from './NavComp'
import { Outlet, useNavigate } from 'react-router-dom'
import { IconButton, Badge, Container, Grid, Paper, styled, createTheme, ThemeProvider, CssBaseline, Toolbar, List, Typography, Divider, Box} from '@mui/material';
import { ChevronLeft, LogoutOutlined, Menu } from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Images from '../shared/constant/constantData';
import FooterComp from './FooterComp';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Dash = () => {
    const nav= useNavigate()
    const gotoLogin= ()=>{
        if(window.confirm(`Are You Sure You Want To Logout?`)){
            sessionStorage.clear()
            nav('/')
        }
     
    }
    const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{backgroundColor:'dimgray'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              style={{zIndex:'+1', textAlign:'center', padding:'5px'}}
            >
              <img src={Images.Logo} style={{height:'80px', width:'80px', borderRadius:'50%', border:'2px groove dimgray '}}/> &nbsp;&nbsp;&nbsp;&nbsp;
              <strong>AUSTT</strong>
            </Typography>
            <p style={{marginTop:'15px',marginRight:'20px',fontSize:'18px'}}>{`Welcome ${sessionStorage.getItem('user')}`}</p>{' '}
            <IconButton color="inherit">
              <Badge onClick={()=>gotoLogin()}>
                <LogoutOutlined />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{backgroundColor:'azure', overflow:'hidden'}}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <NavComp component="nav">
          <Divider sx={{ my: 1 }} />
            {NavComp}
          <Divider sx={{ my: 1 }} />
          </NavComp>
          
          {/* <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List> */}
          
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }} style={{backgroundColor:'lightgray'}}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  style={{backgroundColor:'aliceblue'}}>
                  
                <Outlet />
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              
            </Grid>
            <FooterComp />
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
        </div>
    )
}

export default Dash
