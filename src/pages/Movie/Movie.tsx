import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Rating,
    Skeleton,
    Typography,
} from "@mui/material";

import config from "@configs/index";
import { darkTheme } from "@themes/index";
import useLocalStorage from "@hooks/useLocalStorage";
import { embedYoutubeURL } from "@utils/embedYoutubeURL";
import { getMovieById } from "@/services/movieServices";
import { MovieItem } from "@components/Movies/Movie/Movie.type";
import Toast from "@components/Toast";

import * as St from "./Movie.styled";

const Movie = () => {
    const [id] = useLocalStorage(config.localStorages.movieId, 0);
    const [movie, setMovie] = useState<MovieItem>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        (async () => {
            try {
                if (!id) return <Navigate to={config.routes.public.home} />;

                const { data } = await getMovieById(+id);

                setMovie(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    const movieInfo = [
        {
            id: 1,
            label: "Language",
            content: movie?.original_language,
        },
        {
            id: 2,
            label: "Release Date",
            content: movie?.release_date,
        },

        {
            id: 3,
            label: "Popularity",
            content: movie?.popularity,
        },

        {
            id: 4,
            label: "Vote Average",
            icon: <Rating max={1} value={1} sx={{ color: "warning.main" }} />,
            content: Number(movie?.vote_average).toFixed(1),
        },

        {
            id: 5,
            label: "Vote Count",
            content: movie?.vote_count,
        },
    ];

    return (
        <>
            {error && (
                <Toast
                    message="Error!"
                    type="error"
                    open={error}
                    setOpen={setError}
                />
            )}

            <St.BannerSection component="section">
                <Container>
                    <St.BannerInner>
                        {loading ? (
                            <Skeleton
                                variant="rounded"
                                height={480}
                                sx={{ borderRadius: "40px" }}
                            />
                        ) : (
                            <St.BannerImg component="figure">
                                <img
                                    src={movie?.backdrop_path}
                                    alt={movie?.title}
                                    loading="lazy"
                                />
                            </St.BannerImg>
                        )}

                        <St.BannerContent>
                            <Breadcrumbs aria-label="breadcrumb">
                                {loading ? (
                                    <Skeleton animation="wave" variant="text">
                                        <Link to={config.routes.public.home}>
                                            Filmberry
                                        </Link>
                                    </Skeleton>
                                ) : (
                                    <Link to={config.routes.public.home}>
                                        Filmberry
                                    </Link>
                                )}

                                {loading ? (
                                    <Skeleton animation="wave" variant="text">
                                        <Link to={config.routes.public.movies}>
                                            Movies
                                        </Link>
                                    </Skeleton>
                                ) : (
                                    <Link to={config.routes.public.movies}>
                                        Movies
                                    </Link>
                                )}
                            </Breadcrumbs>

                            <Typography variant="h1">
                                {loading ? (
                                    <Skeleton
                                        animation="wave"
                                        variant="text"
                                        width="100%"
                                    />
                                ) : (
                                    movie?.title
                                )}
                            </Typography>

                            <div>
                                {loading ? (
                                    <Skeleton
                                        animation="wave"
                                        variant="rounded"
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={handleOpen}
                                        >
                                            Watch Now
                                        </Button>
                                    </Skeleton>
                                ) : (
                                    <Button
                                        variant="contained"
                                        onClick={handleOpen}
                                    >
                                        Watch Now
                                    </Button>
                                )}

                                <St.MovieModal
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Box>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={embedYoutubeURL(
                                                movie?.video_url || ""
                                            )}
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
                            {loading ? (
                                <Skeleton
                                    variant="rounded"
                                    width={480}
                                    height={720}
                                    sx={{ borderRadius: "24px" }}
                                />
                            ) : (
                                <img
                                    src={movie?.poster_path}
                                    alt={movie?.title}
                                    loading="lazy"
                                />
                            )}
                        </St.Poster>

                        <St.Content>
                            <Typography variant="h2">
                                {loading ? (
                                    <Skeleton animation="wave" variant="text" />
                                ) : (
                                    movie?.original_title
                                )}
                            </Typography>

                            <Typography variant="body1">
                                {loading ? (
                                    <Skeleton
                                        animation="wave"
                                        variant="rounded"
                                        height={200}
                                    />
                                ) : (
                                    movie?.overview
                                )}
                            </Typography>

                            {movieInfo.map((item) => (
                                <St.Info key={item.id}>
                                    {loading ? (
                                        <Skeleton
                                            animation="wave"
                                            variant="text"
                                            width="50%"
                                        />
                                    ) : (
                                        <>
                                            <Typography variant="h3">
                                                {item.label}:
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.content}
                                                {item.icon && item.icon}
                                            </Typography>
                                        </>
                                    )}
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
