import { Divider, Typography } from "@mui/material";
import { FooterWrapper } from "./Footer.styled";
import Container from "@components/Container";

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
