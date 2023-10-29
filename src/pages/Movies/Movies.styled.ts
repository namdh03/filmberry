import { Box, styled } from "@mui/material";

export const MoviesWrapper = styled(Box)`
    padding-top: 170px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

export const MoviesInner = styled(Box)`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`;

export const MovieList = styled(Box)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
`;
