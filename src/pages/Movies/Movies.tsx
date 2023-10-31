import { Pagination, TextField, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";

import useDebounce from "@hooks/useDebounce";
import { getMoviesByParams } from "@/services/movieServices";
import { MovieItem } from "@components/Movies/Movie/Movie.type";
import Container from "@components/Container";
import Movie from "@components/Movies/Movie";
import { default as MovieListSkeleton } from "@components/Skeleton/MovieList";

import { MovieList, MoviesInner, MoviesWrapper } from "./Movies.styled";

const Movies = () => {
    const [movies, setMovies] = useState<MovieItem[]>([]);
    const totalPage = useRef<number>(0);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const debouncedValue = useDebounce<string>(search, 500);

    // Get all movies (fake get total pages)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const { data } = await getMoviesByParams({
                    search: debouncedValue,
                });

                totalPage.current = data.length;
            } finally {
                setLoading(false);
            }
        })();
    }, [debouncedValue]);

    // Get movies by params
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const { data } = await getMoviesByParams({
                    page: currentPage,
                    limit: 8,
                    search: debouncedValue,
                });

                setMovies(data);
            } finally {
                setLoading(false);
            }
        })();
    }, [currentPage, debouncedValue]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    };

    const handleChangePage = (
        _event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        setCurrentPage(page);
    };

    return (
        <MoviesWrapper>
            <Container>
                <MoviesInner>
                    <TextField
                        value={search}
                        onChange={handleSearch}
                        fullWidth
                        hiddenLabel
                        variant="outlined"
                        placeholder="Type here to search..."
                    />

                    <MovieList>
                        {loading ? (
                            <MovieListSkeleton count={8} />
                        ) : (
                            movies.map((movie) => (
                                <Movie key={movie.id} movie={movie} />
                            ))
                        )}
                    </MovieList>

                    {movies.length > 0 ? (
                        <Pagination
                            count={Math.ceil(totalPage.current / 8)}
                            shape="rounded"
                            size="large"
                            onChange={handleChangePage}
                            disabled={loading}
                        />
                    ) : (
                        <Typography
                            sx={{
                                color: "text.primary",
                                fontSize: "20px",
                            }}
                        >
                            Not Found!
                        </Typography>
                    )}
                </MoviesInner>
            </Container>
        </MoviesWrapper>
    );
};

export default Movies;
