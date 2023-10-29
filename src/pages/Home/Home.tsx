import Banner from "@components/Banner";
import Movies from "@components/Movies";
import { dummy } from "@components/Movies/Movies.dummy";

const Home = () => {
    return (
        <>
            <Banner list={dummy} />

            <Movies title="Now Playing" list={dummy} />
            <Movies title="Popular" list={dummy} />
            <Movies title="Top Rated" list={dummy} />
            <Movies title="Upcoming" list={dummy} />
        </>
    );
};

export default Home;
