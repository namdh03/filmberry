import nav from "./Header.navbar";
import { HeaderWrapper, HeaderInner, Navbar, NavItem } from "./Header.styled";

import { Link, NavLink } from "react-router-dom";
import { Typography, IconButton, Divider } from "@mui/material";
import {
    Brightness4,
    Brightness7,
    PlayArrowRounded,
} from "@mui/icons-material";

import logo from "@assets/svg/logo.svg";
import Container from "@components/Container";
import config from "@configs/index";
import useThemeContext from "@hooks/useThemeContext";

const Header = () => {
    const { mode, toggleColorMode } = useThemeContext();

    return (
        <HeaderWrapper component="header">
            <Container>
                <HeaderInner>
                    <Link to={config.routes.public.home}>
                        <img src={logo} alt="FILMBERRY" />
                    </Link>

                    <Navbar component="nav">
                        {nav.map((item) => (
                            <NavLink key={item.id} to={item.url}>
                                {({ isActive }) => (
                                    <NavItem>
                                        {isActive && (
                                            <IconButton>
                                                <PlayArrowRounded />
                                            </IconButton>
                                        )}

                                        <Typography>{item.label}</Typography>
                                    </NavItem>
                                )}
                            </NavLink>
                        ))}
                    </Navbar>

                    <IconButton onClick={toggleColorMode}>
                        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </HeaderInner>
            </Container>
            <Divider />
        </HeaderWrapper>
    );
};

export default Header;
