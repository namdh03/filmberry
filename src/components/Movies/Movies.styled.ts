import { Box, styled } from "@mui/material";

export const MoviesWrapper = styled(Box)`
    padding-top: 30px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

export const MoviesContainer = styled(Box)`
    &.MuiBox-root {
        display: flex;
        align-items: center;
        padding: 20px 0;
    }

    & > .MuiButtonBase-root .MuiSvgIcon-root {
        color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiTypography-h2 {
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33333;
    }
`;
