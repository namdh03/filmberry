import { Edit as EditIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import config from "@configs/index";
import useLocalStorage from "@hooks/useLocalStorage";
import Container from "@components/Container";
import Form from "@components/Movies/Form";
import { EditWrapper } from "./Edit.styled";
import { getMovieById } from "@/services/movieServices";
import { MovieItem } from "@components/Movies/Movie/Movie.type";

const Edit = () => {
    const [id] = useLocalStorage(config.localStorages.movieId, 0);
    const [movie, setMovie] = useState<MovieItem>();

    useEffect(() => {
        (async () => {
            try {
                if (!id) return <Navigate to={config.routes.public.home} />;

                const { data } = await getMovieById(+id);

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
        <EditWrapper>
            <Container>
                <Form title="Update Movie" icon={<EditIcon />} movie={movie} />
            </Container>
        </EditWrapper>
    );
};

export default Edit;
