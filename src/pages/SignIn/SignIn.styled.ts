import { Box, styled } from "@mui/material";

export const SignInWrapper = styled(Box)`
    min-height: 100vh;
    padding-top: 170px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .MuiFormLabel-root {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    & .MuiFormControl-root:has(:focus-within) .MuiFormLabel-root {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;
