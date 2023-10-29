import { Dates } from "@utils/interfaces";
import { MovieItem } from "./Movie/Movie.type";

export type MoviesType = {
    dates: Dates;
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
};

export type MoviesWrapperProps = {
    title?: string;
    list: MoviesType;
};
