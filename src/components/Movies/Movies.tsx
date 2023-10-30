import Movie from "./Movie";
import { MoviesContainer, MoviesWrapper } from "./Movies.styled";
import { MoviesWrapperProps } from "./Movies.type";

import { IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import Container from "@components/Container";
import { MovieList } from "@pages/Movies/Movies.styled";
import { default as MovieListSkeleton } from "@components/Skeleton/MovieList";

const Movies = ({ title, list, loading }: MoviesWrapperProps) => {
    return (
        <MoviesWrapper component="section">
            <Container>
                {list.length > 0 && title && (
                    <MoviesContainer>
                        <IconButton>
                            <PlayArrowRounded />
                        </IconButton>
                        <Typography variant="h2">{title}</Typography>
                    </MoviesContainer>
                )}

                {loading && (
                    <MoviesContainer>
                        <Stack direction="row" columnGap="8px">
                            <Skeleton
                                variant="circular"
                                width={40}
                                height={40}
                            />
                            <Skeleton
                                variant="rounded"
                                width={200}
                                height={40}
                            />
                        </Stack>
                    </MoviesContainer>
                )}

                <MoviesContainer>
                    {loading ? (
                        <MovieList>
                            <MovieListSkeleton count={4} />
                        </MovieList>
                    ) : (
                        <Swiper
                            grabCursor
                            spaceBetween={24}
                            slidesPerView={4}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            {list.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <Movie movie={movie} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </MoviesContainer>
            </Container>
        </MoviesWrapper>
    );
};

export default Movies;
