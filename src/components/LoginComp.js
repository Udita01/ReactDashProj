import React from 'react'
import { Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Box,Grid,Typography,createTheme,ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Images from '../shared/constant/constantData';
 
const defaultTheme = createTheme();
 
 
const LoginComp = () => {
    const nav=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
          let currentUname=data.get("uname")
            let currentUpass=data.get("password")
            axios.get("http://localhost:8888/users").then((res)=>{
                console.log(res.data);
                const userData=res.data;
                const data=userData.filter((val)=>{return val.name===currentUname && val.password===currentUpass})
                if(data.length >0){
                    sessionStorage.setItem("user",currentUname)
                    sessionStorage.setItem("pass",currentUpass)
                    nav('/main')
                }else{
                    window.alert("Wrong Credentials Inserted!")
                }
            }).catch((error)=>{})
 
       
       
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
      };
   
    return (
        <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             <img src={Images.Logo} style={{height:'60px', width:'60px', borderRadius:'50%'}} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="uname"
                label="User Name"
                name="uname"
                autoComplete="uname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    )
}
 
export default LoginComp