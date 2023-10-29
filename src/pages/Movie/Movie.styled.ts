import { Box, Modal, styled } from "@mui/material";
import { darkTheme } from "@themes/index";

export const BannerSection = styled(Box)`
    padding-top: 150px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

export const BodySection = styled(Box)`
    padding: 152px 0 160px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

export const BannerInner = styled(Box)`
    position: relative;
`;

export const BannerImg = styled(Box)`
    position: relative;
    width: 100%;
    height: 480px;
    margin: 0;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: cover;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: linear-gradient(
            180deg,
            rgba(54, 44, 146, 0.4) 0%,
            rgba(18, 98, 151, 0.4) 100%
        );
    }
`;

export const BannerContent = styled(Box)`
    position: absolute;
    left: 80px;
    bottom: -72px;
    min-width: 560px;
    padding: 40px;
    border-radius: 24px;
    background: ${({ theme }) => theme.palette.background.default};
    backdrop-filter: blur(12px);

    & li,
    & a {
        color: ${darkTheme.text?.primary};
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
    }

    & h1.MuiTypography-h1 {
        margin: 16px 0 24px;
        color: ${darkTheme.text?.primary};
        font-size: 36px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.64px;
    }
`;

export const MovieModal = styled(Modal)`
    & .MuiBox-root {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1200px;
        height: 680px;
        border-radius: 40px;
        padding: 20px;
        background: linear-gradient(
            180deg,
            rgba(54, 44, 146, 0.4) 0%,
            rgba(18, 98, 151, 0.4) 100%
        );

        & video {
            border-radius: 40px;
        }
    }
`;

export const BodyInner = styled(Box)`
    display: flex;
    column-gap: 80px;
`;

export const Poster = styled(Box)`
    max-width: 480px;
    height: 720px;
    margin: 0;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        object-fit: cover;
    }
`;

export const Content = styled(Box)`
    display: flex;
    flex-direction: column;
    max-width: 480px;

    & > .MuiTypography-h2 {
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 30px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: -0.36px;

        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 1);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    & > .MuiTypography-body1 {
        margin: 24px 0;
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;

        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 7);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const Info = styled(Box)`
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-top: 18px;

    & .MuiTypography-h3 {
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 16px;
        font-weight: 400;
    }

    & .MuiTypography-body1 {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 4px;

        color: ${({ theme }) => theme.palette.primary.main};
        font-size: 20px;
        font-weight: 400;
    }
`;
