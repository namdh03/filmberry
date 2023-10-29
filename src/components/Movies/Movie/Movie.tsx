import { MovieContent, MovieWrapper } from "./Movie.styled";
import { MovieItem } from "./Movie.type";

import { Button, Rating, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import config from "@configs/index";
import useLocalStorage from "@hooks/useLocalStorage";

const Movie = ({ movie }: { movie: MovieItem }) => {
    const navigate = useNavigate();
    const [, setId] = useLocalStorage(config.localStorages.movieId, movie.id);

    const handleClickMovie = () => {
        setId(movie.id);
        navigate(config.routes.public.movie);
    };

    return (
        <MovieWrapper component="article">
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                />
            </figure>

            <MovieContent>
                <Typography>{movie.title}</Typography>

                <Stack direction="row" alignItems="center">
                    <Rating max={1} value={1} size="small" />
                    <Typography>{movie.vote_average.toFixed(1)}</Typography>
                </Stack>
            </MovieContent>

            <Button variant="contained" onClick={handleClickMovie}>
                Watch Now
            </Button>
        </MovieWrapper>
    );
};

export default Movie;
