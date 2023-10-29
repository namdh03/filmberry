import { ContactWrapper } from "./Contact.styled";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Container from "@components/Container";

const Contact = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <ContactWrapper component="section">
            <Container>
                <div className="container">
                    <Typography variant="h1">Contact With Us</Typography>
                    <Typography>
                        Unleash the world of cinema and indulge your passion
                        with an exceptional movie website, where you can enjoy
                        thousands of captivating films, from timeless classics
                        to the latest releases. Experience the ultimate
                        cinematic journey with advanced technology and
                        user-friendly interface.
                    </Typography>
                    <form action="" method="POST" className="contact__form">
                        <div className="contact__form-group">
                            <input
                                type="text"
                                className="contact__form-input"
                                name="firstName"
                                id="firstName"
                                placeholder="First name"
                                required
                            />

                            <input
                                type="text"
                                className="contact__form-input"
                                name="lastName"
                                id="lastName"
                                placeholder="Last name"
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <input
                                type="email"
                                className="contact__form-input"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            />

                            <input
                                type="tel"
                                className="contact__form-input"
                                name="phone"
                                id="phone"
                                placeholder="Phone number"
                                required
                                pattern="^(0|\+?84)(3|5|7|8|9)[0-9]{8}$"
                            />
                        </div>
                        <div className="contact__form-group">
                            <textarea
                                className="contact__form-textarea"
                                name="yourself"
                                id="yourself"
                                placeholder="Tell us about yourself"
                                minLength={10}
                            />
                        </div>
                        <div className="contact__form-group">
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                onClick={handleClick}
                            >
                                Contact us
                            </Button>

                            <Snackbar
                                open={open}
                                autoHideDuration={2000}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="info"
                                    sx={{ width: "100%" }}
                                >
                                    New feature coming soon!
                                </Alert>
                            </Snackbar>
                        </div>
                    </form>
                </div>
            </Container>
        </ContactWrapper>
    );
};

export default Contact;
