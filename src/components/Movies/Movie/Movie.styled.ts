import { Box, styled } from "@mui/material";

export const MovieWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 12px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.palette.secondary.main};

    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: ${({ theme }) =>
            theme.palette.mode === "dark"
                ? theme.palette.background.paper
                : "rgba(149, 157, 165, 0.2)"}
        0px 8px 24px;

    & figure {
        margin: 0;
        min-width: 243px;
        width: 100%;
        height: 250px;

        & img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            object-fit: cover;
        }
    }

    & .MuiBox-root {
        margin-top: 20px;
    }

    & .MuiTypography-root {
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 18px;
        font-weight: 500;
    }

    & .MuiButton-root {
        margin-top: 40px;
    }
`;

export const MovieContent = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 12px;

    & .MuiTypography-root {
        font-size: 16px;
        color: ${({ theme }) => theme.palette.text.secondary};

        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 1);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
