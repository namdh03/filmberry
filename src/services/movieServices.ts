import { get } from "@utils/api";

type ParamType = {
    page: number;
    limit: number;
    search: string;
};

export const filterMovies = (params: object) => {
    return get("/movies", params);
};

export const getMovieById = (id: number) => {
    return get(`/movies/${id}`);
};

export const getMoviesByParams = (params: ParamType) => {
    return get(`/movies`, params);
};

export const getAllMovies = () => {
    return get(`/movies`);
};
