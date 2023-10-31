import { useEffect, useState } from "react";

import { MovieList } from "@utils/types";
import { MovieType } from "@utils/enums";
import { filterMovies } from "@/services/movieServices";
import Banner from "@components/Banner";
import Movies from "@components/Movies";
import Toast from "@components/Toast";

const Home = () => {
    const [movies, setMovies] = useState<MovieList>({
        top: [],
        upcoming: [],
        nowPlaying: [],
        popular: [],
        topRated: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const { data: topList } = await filterMovies({ top: true });
                const { data: upcomingList } = await filterMovies({
                    type: MovieType.UPCOMING,
                });
                const { data: nowPlayingList } = await filterMovies({
                    type: MovieType.NOW_PLAYING,
                });
                const { data: popularList } = await filterMovies({
                    type: MovieType.POPULAR,
                });
                const { data: topRatedList } = await filterMovies({
                    type: MovieType.TOP_RATED,
                });

                setMovies((prevMovies) => ({
                    ...prevMovies,
                    top: topList,
                    upcoming: upcomingList,
                    nowPlaying: nowPlayingList,
                    popular: popularList,
                    topRated: topRatedList,
                }));
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            {error && (
                <Toast
                    message="Error!"
                    type="error"
                    open={error}
                    setOpen={setError}
                />
            )}

            <Banner list={movies.top} loading={loading} />

            <Movies title="Upcoming" list={movies.upcoming} loading={loading} />
            <Movies
                title="Now Playing"
                list={movies.nowPlaying}
                loading={loading}
            />
            <Movies title="Popular" list={movies.popular} loading={loading} />
            <Movies
                title="Top Rated"
                list={movies.topRated}
                loading={loading}
            />
        </>
    );
};

export default Home;
