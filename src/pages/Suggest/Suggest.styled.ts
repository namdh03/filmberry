import { Box, styled } from "@mui/material";

export const SuggestWrapper = styled(Box)`
    min-height: 100vh;
    padding: 170px 0 20px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .MuiAlert-message {
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;
