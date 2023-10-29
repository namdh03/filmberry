import { Box, styled } from "@mui/material";
import { darkTheme, lightTheme } from "@themes/index";

export const ContactWrapper = styled(Box)`
    & {
        padding: 170px 0 20px;
        text-align: center;
        background: ${({ theme }) => theme.palette.background.paper};
    }

    & .MuiTypography-h1 {
        font-weight: 600;
        font-size: 50px;
        line-height: 1.08;
        color: ${({ theme }) => theme.palette.text.primary};
    }

    & .MuiTypography-body1 {
        margin: 20px auto 0 auto;
        width: 800px;
        font-size: 16px;
        line-height: 1.62;
        color: ${({ theme }) => theme.palette.text.primary};
    }

    .contact__form {
        margin-top: 50px;
    }

    .contact__form-group {
        display: flex;
        justify-content: center;
        column-gap: 30px;
    }

    .contact__form-group + .contact__form-group {
        margin-top: 24px;
    }

    .contact__form-textarea,
    .contact__form-input {
        padding: 22px 31px;
        background: ${darkTheme.text?.primary};
        outline: transparent;
        border: transparent;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
        color: ${lightTheme.text?.primary};
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
        border-radius: 4px;
    }

    .contact__form-input {
        min-width: 430px;
        height: 60px;
    }

    .contact__form-textarea {
        resize: none;
        width: 890px;
        height: 150px;
        max-height: 300px;
        cursor: auto;
    }

    .contact__form-textarea::-webkit-scrollbar {
        width: 4px;
    }

    .contact__form-textarea::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.primary.main};
        border-radius: 99px;
    }

    .contact__form-submit {
        margin-top: 16px;
        outline: transparent;
        border: transparent;
    }

    .contact__form-submit:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    input,
    select,
    textarea,
    button {
        font-size: inherit;
        font-family: inherit;
    }
`;
