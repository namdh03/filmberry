import { Divider, Typography } from "@mui/material";
import Container from "@components/Container";
import { FooterWrapper } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterWrapper component="footer">
            <Divider />
            <Container>
                <Typography>© Filmberry.com - 2023</Typography>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
