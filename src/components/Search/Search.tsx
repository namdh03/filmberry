import { InputAdornment, InputLabel } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { SearchWrapper } from "./Search.styled";

const Search = () => {
    return (
        <SearchWrapper
            id="banner-search"
            placeholder="Search Movies or TV Shows"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <InputLabel htmlFor="banner-search">
                            <SearchOutlined />
                        </InputLabel>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
