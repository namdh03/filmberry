import { TextField, styled } from "@mui/material";

export const SearchWrapper = styled(TextField)`
    position: relative;
    min-width: 344px;

    & .MuiInputBase-root {
        padding: 0;
    }

    &.MuiTextField-root {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
        background-color: transparent;
    }

    & .MuiInputBase-input {
        padding: 12px 12px 12px 8px;
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.14286;
    }

    & .MuiInputBase-input::placeholder {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    & .MuiOutlinedInput-notchedOutline {
        border: transparent;
    }

    & .MuiFormLabel-root {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 16px;
    }

    & svg {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;
