import { Button, Rating, Stack, Typography } from "@mui/material";
import { MovieContent, MovieWrapper } from "./Movie.styled";
import { MovieItem } from "./Movie.type";

const Movie = ({ movie }: { movie: MovieItem }) => {
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

            <Button variant="contained">Watch Now</Button>
        </MovieWrapper>
    );
};

export default Movie;
