import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import swal from 'sweetalert';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://suvarn.3bbddns.com:12900/">
        Udomsuk Services
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// handle api
async function loginUser(credentials) {
  return fetch('https://udomsukservice.herokuapp.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 } 

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('token' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then(() => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('username', response['username']);
        localStorage.setItem('email', response['email']);
        localStorage.setItem('level', response['level']);
        localStorage.setItem('firstname', response['firstname']);
        localStorage.setItem('surname', response['surname']);
        localStorage.setItem('address', response['address']);
        localStorage.setItem('tel', response['tel']);
        window.location.href = "/home";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)
  
  return (
    <>
      <Navbar />
      <div class="md:flex h-full flex-col bg-cream bg-opacity-50 py-10">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: '#003B74' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleEmailChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                    <Link to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 0    }} />
          </Container>
        </ThemeProvider>
      </div>
      <Footer/>
    </>

  );
}



