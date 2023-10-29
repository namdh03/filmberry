import Movie from "./Movie";
import { MoviesContainer, MoviesWrapper } from "./Movies.styled";
import { MoviesWrapperProps } from "./Movies.type";

import { IconButton, Typography } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import Container from "@components/Container";

const Movies = ({ title, list }: MoviesWrapperProps) => {
    return (
        <MoviesWrapper component="section">
            <Container>
                {title && (
                    <MoviesContainer>
                        <IconButton>
                            <PlayArrowRounded />
                        </IconButton>
                        <Typography variant="h2">{title}</Typography>
                    </MoviesContainer>
                )}

                <MoviesContainer>
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
                        {list.results.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <Movie movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MoviesContainer>
            </Container>
        </MoviesWrapper>
    );
};

export default Movies;
