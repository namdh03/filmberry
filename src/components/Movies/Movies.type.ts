import { MovieItem } from "./Movie/Movie.type";

export type MoviesWrapperProps = {
    title?: string;
    list: MovieItem[];
    loading: boolean;
};
