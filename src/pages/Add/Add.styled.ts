import { Box, styled } from "@mui/material";

export const AddWrapper = styled(Box)`
    min-height: 100vh;
    padding-top: 170px;
    background: ${({ theme }) => theme.palette.background.paper};
`;
