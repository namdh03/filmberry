import { get, put, remove } from "@utils/api";

type ParamType = {
    page?: number;
    limit?: number;
    search?: string;
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

export const deleteMovie = (id: number) => {
    return remove(`/movies/${id}`);
};

export const markMovieTop = (id: number, status: boolean) => {
    return put(`/movies/${id}`, { top: status });
};
