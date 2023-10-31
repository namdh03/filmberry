import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, FormEvent } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import { darkTheme } from "@themes/index";
import useAuth from "@hooks/useAuth";
import cookies from "@utils/cookies";
import { SystemUser } from "@utils/interfaces";
import { signIn } from "@contexts/auth/reducers";
import Toast from "@components/Toast";

import { SignInWrapper } from "./SignIn.styled";

export default function SignIn() {
    const [open, setOpen] = useState<boolean>(false);
    const { dispatch } = useAuth();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get("email"),
        //     password: data.get("password"),
        // });
    };

    const handleLogin = async (credentialResponse: CredentialResponse) => {
        try {
            const { credential } = credentialResponse;
            cookies.setToken(credential);

            const user = cookies.decodeJwt() as SystemUser;
            dispatch(signIn({ user }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SignInWrapper>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: "primary.main",
                            color: darkTheme.text?.primary,
                        }}
                    >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: "text.primary" }}
                    >
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            sx={{ color: "text.secondary" }}
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
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                            sx={{ color: "text.primary" }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => setOpen(true)}
                        >
                            Sign In
                        </Button>
                        <Toast
                            message="New feature coming soon!"
                            type="info"
                            open={open}
                            setOpen={setOpen}
                        />
                        <Grid container>
                            <Grid item xs>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Divider sx={{ margin: "30px 0", color: "text.primary" }}>
                    OR
                </Divider>

                <Stack alignItems="center">
                    <GoogleLogin
                        size="large"
                        locale="en"
                        shape="rectangular"
                        useOneTap
                        itp_support
                        onSuccess={handleLogin}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </Stack>
            </Container>
        </SignInWrapper>
    );
}
