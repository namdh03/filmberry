import {
    RatingWrapper,
    BannerInner,
    BannerWrapper,
    WatchNow,
} from "./Banner.styled";

import { Box, Chip, Rating, Typography } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import Container from "@components/Container";
import { MoviesType } from "@components/Movies/Movies.type";

const Banner = ({ list }: { list: MoviesType }) => {
    return (
        <BannerWrapper component="section">
            <Container>
                <Swiper
                    grabCursor
                    spaceBetween={20}
                    centeredSlides={true}
                    effect={"fade"}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Pagination]}
                >
                    {list.results.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <BannerInner component="section">
                                <figure>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt={movie.title}
                                    />
                                </figure>

                                <Box>
                                    <Chip label="TOP" color="primary" />

                                    <Typography variant="h1">
                                        {movie.title}
                                    </Typography>

                                    <Typography>{movie.overview}</Typography>

                                    <RatingWrapper>
                                        <Rating
                                            max={1}
                                            value={1}
                                            size="large"
                                        />
                                        <Typography>5.8</Typography>
                                    </RatingWrapper>

                                    <WatchNow variant="contained">
                                        <PlayArrowRounded />
                                        <Typography>WATCH</Typography>
                                    </WatchNow>
                                </Box>
                            </BannerInner>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;
