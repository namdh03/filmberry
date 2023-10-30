import { Box, styled } from "@mui/material";

export const MoviesWrapper = styled(Box)`
    min-height: 100vh;
    padding-top: 170px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

export const MoviesInner = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 40px;
`;

export const MovieList = styled(Box)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
`;
