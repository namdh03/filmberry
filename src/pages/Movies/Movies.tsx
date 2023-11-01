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
    const [totalPage, setTotalPage] = useState<number>(0);
    const currentPage = useRef<number>(1);

    const [loading, setLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const debouncedValue = useDebounce<string>(search, 500);

    // Get all movies (fake get total pages)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const { data } = await getMoviesByParams({
                    search: debouncedValue,
                });

                setTotalPage(data.length);
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
                    page: currentPage.current,
                    limit: 8,
                    search: debouncedValue,
                    sortBy: "id",
                    order: "desc",
                });

                setMovies(data);
            } finally {
                setLoading(false);
            }
        })();
    }, [reload, debouncedValue]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        currentPage.current = 1;
        setSearch(value);
    };

    const handleChangePage = (
        _event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        currentPage.current = page;
        setReload(!reload);
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

                    {totalPage > 8 && (
                        <Pagination
                            count={Math.ceil(totalPage / 8)}
                            shape="rounded"
                            size="large"
                            onChange={handleChangePage}
                            disabled={loading}
                        />
                    )}

                    {movies.length === 0 && !loading && (
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
