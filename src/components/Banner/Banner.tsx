import { Box, Chip, Rating, Skeleton, Typography } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import config from "@configs/index";
import { useLocalStorage } from "@hooks/index";
import Container from "@components/Container";
import { MovieItem } from "@components/Movies/Movie/Movie.type";

import {
    RatingWrapper,
    BannerInner,
    BannerWrapper,
    WatchNow,
} from "./Banner.styled";

const Banner = ({ list, loading }: { list: MovieItem[]; loading: boolean }) => {
    const navigate = useNavigate();
    const [, setId] = useLocalStorage(config.localStorages.movieId, 0);

    const handleClickMovie = (id: number) => {
        setId(id);
        navigate(config.routes.public.movie);
    };

    return (
        <BannerWrapper component="section">
            <Container>
                {loading ? (
                    <Skeleton
                        variant="rounded"
                        height={530}
                        sx={{ borderRadius: "16px" }}
                    />
                ) : (
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
                        {list.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <BannerInner component="section">
                                    <figure>
                                        <img
                                            src={movie.backdrop_path}
                                            alt={movie.title}
                                            loading="lazy"
                                        />
                                    </figure>

                                    <Box>
                                        {movie.top && (
                                            <Chip label="TOP" color="primary" />
                                        )}

                                        <Typography variant="h1">
                                            {movie.title}
                                        </Typography>

                                        <Typography>
                                            {movie.overview}
                                        </Typography>

                                        <RatingWrapper>
                                            <Rating
                                                max={1}
                                                value={1}
                                                size="large"
                                                sx={{ color: "warning.main" }}
                                            />
                                            <Typography>
                                                {Number(
                                                    movie.vote_average
                                                ).toFixed(1)}
                                            </Typography>
                                        </RatingWrapper>

                                        <WatchNow
                                            variant="contained"
                                            onClick={() =>
                                                handleClickMovie(movie.id)
                                            }
                                        >
                                            <PlayArrowRounded />
                                            <Typography>WATCH</Typography>
                                        </WatchNow>
                                    </Box>
                                </BannerInner>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Container>
        </BannerWrapper>
    );
};

export default Banner;
