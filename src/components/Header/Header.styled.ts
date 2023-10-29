import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)`
    position: fixed;
    width: 100%;
    background: ${({ theme }) => theme.palette.background.paper};
    z-index: 9999;
`;

export const HeaderInner = styled(Box)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 28px 0 24px;

    & .MuiSvgIcon-root {
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;

export const Navbar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
        text-decoration: none;
    }
`;

export const NavItem = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 11px;

    & .MuiSvgIcon-root {
        color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiTypography-root {
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 16px;
        font-weight: 600;
    }
`;
