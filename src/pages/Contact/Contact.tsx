import { ContactWrapper } from "./Contact.styled";

import { Button, Typography } from "@mui/material";

const Contact = () => {
    return (
        <ContactWrapper component="section">
            <div className="container">
                <Typography variant="h1">Contact With Us</Typography>
                <Typography>
                    Making the right move at the right time secures your
                    investment. Experience the thrill of growing your business
                    and live the dream.
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
                        <Button type="submit" variant="contained" size="large">
                            Contact us
                        </Button>
                    </div>
                </form>
            </div>
        </ContactWrapper>
    );
};

export default Contact;
