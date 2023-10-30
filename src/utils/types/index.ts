import { MovieItem } from "@components/Movies/Movie/Movie.type";

export type MovieList = {
    top: MovieItem[];
    upcoming: MovieItem[];
    nowPlaying: MovieItem[];
    popular: MovieItem[];
    topRated: MovieItem[];
};
