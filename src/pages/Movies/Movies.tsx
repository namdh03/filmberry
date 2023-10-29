import { MovieList, MoviesInner, MoviesWrapper } from "./Movies.styled";

import { Pagination, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import Container from "@components/Container";
import Movie from "@components/Movies/Movie";
import useDebounce from "@hooks/useDebounce";
import { dummy } from "@components/Movies/Movies.dummy";

const Movies = () => {
    const [search, setSearch] = useState<string>("");
    const debouncedValue = useDebounce<string>(search, 500);

    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        console.log(event, page);
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
                        {dummy.results.map((movie) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </MovieList>
                    <Pagination
                        count={dummy.results.length}
                        shape="rounded"
                        size="large"
                        onChange={handleChangePage}
                    />
                </MoviesInner>
            </Container>
        </MoviesWrapper>
    );
};

export default Movies;
