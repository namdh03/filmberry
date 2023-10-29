import * as St from "./Movie.styled";

import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Rating,
    Typography,
} from "@mui/material";

import config from "@configs/index";
import { darkTheme } from "@themes/index";
import { dummy } from "@components/Movies/Movies.dummy";

const Movie = () => {
    const id = localStorage.getItem(config.localStorages.movieId);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (!id) return <Navigate to={config.routes.public.home} />;

    const movie = dummy.results.find((item) => item.id === +id);

    if (!movie) return <Navigate to={config.routes.public.home} />;

    const movieInfo = [
        {
            id: 1,
            label: "Language",
            content: movie.original_language,
        },
        {
            id: 2,
            label: "Release Date",
            content: movie.release_date,
        },

        {
            id: 3,
            label: "Popularity",
            content: movie.popularity,
        },

        {
            id: 4,
            label: "Vote Average",
            icon: <Rating max={1} value={1} size="small" />,
            content: movie.vote_average.toFixed(1),
        },

        {
            id: 5,
            label: "Vote Count",
            content: movie.vote_count,
        },
    ];

    return (
        <>
            <St.BannerSection component="section">
                <Container>
                    <St.BannerInner>
                        <St.BannerImg component="figure">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                        </St.BannerImg>

                        <St.BannerContent>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link to={config.routes.public.home}>
                                    Filmberry
                                </Link>
                                <Link to={config.routes.public.movies}>
                                    Movies
                                </Link>
                            </Breadcrumbs>

                            <Typography variant="h1">{movie.title}</Typography>

                            <div>
                                <Button
                                    variant="contained"
                                    onClick={handleOpen}
                                >
                                    Watch Now
                                </Button>

                                <St.MovieModal
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Box>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={movie.video_url}
                                            style={{
                                                borderRadius: "40px",
                                                border: "none",
                                                boxShadow:
                                                    darkTheme.background
                                                        ?.default,
                                            }}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </Box>
                                </St.MovieModal>
                            </div>
                        </St.BannerContent>
                    </St.BannerInner>
                </Container>
            </St.BannerSection>

            <St.BodySection component="section">
                <Container>
                    <St.BodyInner>
                        <St.Poster component="figure">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </St.Poster>

                        <St.Content>
                            <Typography variant="h2">
                                {movie.original_title}
                            </Typography>

                            <Typography variant="body1">
                                {movie.overview}
                            </Typography>

                            {movieInfo.map((item) => (
                                <St.Info key={item.id}>
                                    <Typography variant="h3">
                                        {item.label}:
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.content}
                                        {item.icon && item.icon}
                                    </Typography>
                                </St.Info>
                            ))}
                        </St.Content>
                    </St.BodyInner>
                </Container>
            </St.BodySection>
        </>
    );
};

export default Movie;
