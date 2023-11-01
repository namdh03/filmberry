import AddIcon from "@mui/icons-material/Add";

import Container from "@components/Container";
import Form from "@components/Movies/Form";
import { AddWrapper } from "./Add.styled";

const Add = () => {
    return (
        <AddWrapper>
            <Container>
                <Form
                    title="Add Movie"
                    icon={<AddIcon />}
                    modalTitle="Are you sure you want to add this movie?"
                    modalDescription="Adding this movie will save it to the list. Please confirm you want to add this new movie."
                />
            </Container>
        </AddWrapper>
    );
};

export default Add;
