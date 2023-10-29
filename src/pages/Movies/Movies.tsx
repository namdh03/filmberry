import { MovieList, MoviesInner, MoviesWrapper } from "./Movies.styled";

import { TextField } from "@mui/material";
import Container from "@components/Container";

const Movies = () => {
    return (
        <MoviesWrapper>
            <Container>
                <MoviesInner>
                    <TextField
                        hiddenLabel
                        variant="outlined"
                        placeholder="Type here to search..."
                    />

                    <MovieList>Movie Item</MovieList>
                </MoviesInner>
            </Container>
        </MoviesWrapper>
    );
};

export default Movies;
