import React, { useState } from "react";
import {
    Grid2,
    Box,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import loginImage from "../images/Login.png";
import GoogleIcon from "@mui/icons-material/Google";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Image = styled.img`
@media (max-width: 576px) {
    width: 100%;
    height: auto;
}
`

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

    }



    return (
        <Container maxWidth="lg">
            <Grid2 container spacing={2} sx={{ marginTop: "3rem" }}>
                <Grid2 container md={6} xs={12}>
                    <Box>
                        <h1>Login</h1>
                        <p>See your growth and get support!</p>
                        <Link to='https://accounts.google.com/signin'>
                            <Button
                                variant="contained"
                                color="info"
                                fullWidth
                                endIcon={<GoogleIcon />}
                            >
                                Login with Google
                            </Button>
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="email"
                                id="email"
                                label="Email"
                                variant="outlined"
                                placeholder="Enter your Email"
                                required
                                margin="normal"
                                fullWidth
                                inputProps={{
                                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
                                    title: "email must have @ and . in it "
                                }}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                name="password"
                                id="password"
                                label="Password"
                                variant="outlined"
                                placeholder="Enter your password"
                                required
                                margin="normal"
                                type="password"
                                fullWidth
                                inputProps={{
                                    pattern: "^[A-Z].*123$",

                                    title: "password must start with Cl and end with 123"
                                }}
                                onChange={handleChange}
                            />
                            <Box display="flex" mx="" my="" sx="">
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Remember me          Forgot Password"
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ background: "#111641", marginTop: ".5rem" }}
                            >
                                Login
                            </Button>
                            <Box display="flex" mx="" my="" sx="">
                                <p>
                                    Not regestered yet?{" "}
                                    <a href="/signup" style={{ textDecoration: "none" }}>
                                        Create a new account
                                    </a>
                                </p>
                            </Box>
                        </form>
                    </Box>
                </Grid2>

                <Grid2 item md={6} xs={12}>
                    <Image src={loginImage} height={650} style={{
                        marginLeft: "1 rem",

                    }} alt="" />
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Login;
