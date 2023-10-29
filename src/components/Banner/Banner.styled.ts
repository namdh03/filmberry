import { Box, Button, styled } from "@mui/material";
import { darkTheme } from "@themes/index";

export const BannerWrapper = styled(Box)`
    height: 100vh;
    padding-top: 150px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .swiper-pagination-bullet-active {
        background: ${({ theme }) => theme.palette.primary.main};
    }
`;

export const BannerInner = styled(Box)`
    position: relative;

    & figure {
        position: relative;
        top: 0;
        margin: 0;
        width: 100%;
        height: 530px;

        & img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            object-fit: cover;
        }

        &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: linear-gradient(
                to top,
                ${({ theme }) => theme.palette.background.default},
                ${({ theme }) => theme.palette.background.default}
            );
        }
    }

    & > .MuiBox-root {
        position: absolute;
        left: 36px;
        bottom: 36px;

        & > .MuiTypography-h1 {
            margin-top: 4px;
            color: ${darkTheme.text?.primary};
            font-size: 50px;
            font-weight: 600;

            text-shadow: 2px 4px 3px
                ${({ theme }) => theme.palette.text.disabled};
        }

        & > .MuiTypography-body1 {
            margin-top: 10px;
            max-width: 424px;
            color: ${darkTheme.text?.primary};
            font-size: 14px;
            font-weight: 400;

            text-shadow: 2px 4px 3px
                ${({ theme }) => theme.palette.text.disabled};

            display: -webkit-box;
            -webkit-line-clamp: var(--line-clamp, 10);
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    & .MuiChip-root {
        width: 50px;
        height: 20px;

        & .MuiChip-label {
            font-size: 12px;
            font-weight: 700;
        }
    }
`;

export const RatingWrapper = styled(Box)`
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-top: 22px;

    & > .MuiTypography-root {
        margin-top: 0;
        color: ${darkTheme.text?.primary};
        font-size: 24px;
        font-weight: 600;
    }
`;

export const WatchNow = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 4px;
    margin-top: 37px;

    & .MuiTypography-root {
        margin-top: 0;
        color: ${darkTheme.text?.primary};
        font-size: 14px;
        font-weight: 600;
    }
`;
