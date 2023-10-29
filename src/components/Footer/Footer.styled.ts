import { Box, styled } from "@mui/material";

export const FooterWrapper = styled(Box)`
    padding: 100px 0 40px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .MuiTypography-root {
        padding-top: 40px;
        text-align: center;
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;
