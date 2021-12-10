import React, { useState } from 'react';
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
import swal from 'sweetalert';
import {
    // eslint-disable-next-line
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


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

async function register(credentials) {

    return await fetch("https://udomsukservice.herokuapp.com/auth/register", {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(credentials),
    })
        .then((res) => res.json())
        .then((result) => {
            return result
        });
}

export default function Signup() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [address, setAddress] = useState();
    const [tel, setTel] = useState();

    const handleSubmit = async () => {

        const response = await register({
            email: email,
            password: password,
            username: username,
            firstname: fname,
            surname: lname,
            address: address,
            tel: tel
        });
        if (response.result === "success") {
            swal("Success", response.result, "success", {
                buttons: false,
                timer: 2000,
            })
                .then(() => {
                    window.location.href = "/login";
                });
        } else {
            swal("Failed", response.result, "error");
        }
    }

    // onChange handle
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)
    const handleFnameChange = (event) => setFname(event.target.value)
    const handleLnameChange = (event) => setLname(event.target.value)
    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handleAddressChange = (event) => setAddress(event.target.value)
    const handleTelChange = (event) => setTel(event.target.value)

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
                                Sign up
                            </Typography>
                            <Box noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={fname}
                                            onChange={handleFnameChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            value={lname}
                                            autoComplete="family-name"
                                            onChange={handleLnameChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={email}
                                            autoComplete="email"
                                            onChange={handleEmailChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            value={username}
                                            autoComplete="username"
                                            onChange={handleUsernameChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Address"
                                            name="address"
                                            value={address}
                                            autoComplete="address"
                                            onChange={handleAddressChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="tel"
                                            label="Phone Number"
                                            name="tel"
                                            value={tel}
                                            autoComplete="tel"
                                            onChange={handleTelChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={password}
                                            autoComplete="new-password"
                                            onChange={handlePasswordChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={async () => await handleSubmit()}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 5 }} />
                    </Container>
                </ThemeProvider>
            </div>
            <Footer />
        </>
    );
}