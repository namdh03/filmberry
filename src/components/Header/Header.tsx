import {
    Typography,
    IconButton,
    Divider,
    Stack,
    Button,
    Avatar,
    styled,
    Badge,
    Menu,
    MenuItem,
} from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";
import { MouseEvent, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

import nav from "./Header.navbar";
import { HeaderWrapper, HeaderInner, Navbar, NavItem } from "./Header.styled";

import logo from "@assets/svg/logo.svg";
import config from "@configs/index";
import { useAuth, useThemeContext } from "@hooks/index";
import { signOut } from "@contexts/auth/reducers";
import Container from "@components/Container";
import MaterialUISwitch from "./Header.switch";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const Header = () => {
    const navigate = useNavigate();
    const { mode, toggleColorMode } = useThemeContext();
    const { user, dispatch } = useAuth();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDashboard = () => {
        navigate(config.routes.private.dashboard);
        handleClose();
    };

    const handleLogout = () => {
        handleClose();
        dispatch(signOut());
        googleLogout();
    };

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

                    <Stack direction="row" alignItems="center">
                        <MaterialUISwitch
                            defaultChecked={mode !== "dark"}
                            onClick={toggleColorMode}
                        />

                        {user ? (
                            <>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={
                                        open ? "basic-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "right",
                                            }}
                                            variant="dot"
                                        >
                                            <Avatar src={user.picture} />
                                        </StyledBadge>
                                    </Stack>
                                </IconButton>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleDashboard}>
                                        Dashboard
                                    </MenuItem>

                                    <Divider />
                                    <MenuItem onClick={handleLogout}>
                                        Sign Out
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={() =>
                                    navigate(config.routes.public.login)
                                }
                            >
                                Sign In
                            </Button>
                        )}
                    </Stack>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
