import * as St from "./Suggest.styled";

import {
    Alert,
    Box,
    Button,
    Container,
    Snackbar,
    Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

import Search from "@components/Search";

const Suggest = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <St.SuggestWrapper>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        color: "text.primary",
                        fontSize: "64px",
                        fontWeight: 600,
                        lineHeight: 1.25,
                        letterSpacing: "-1.28px",
                    }}
                    variant="h1"
                >
                    Suggest me
                </Typography>

                <Typography
                    sx={{
                        display: "block",
                        marginTop: "16px",
                        color: "text.primary",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.5,
                    }}
                    variant="caption"
                >
                    I will really appreciate it if you take time to suggest me
                    something good to watch.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "16px",
                        marginTop: "30px",
                    }}
                >
                    <Search />
                    <Button
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            background: "primary.main",
                        }}
                        variant="contained"
                        size="large"
                        onClick={handleClick}
                    >
                        Search
                    </Button>

                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        <Alert
                            onClose={handleClose}
                            severity="info"
                            sx={{ width: "100%" }}
                        >
                            New feature coming soon!
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
        </St.SuggestWrapper>
    );
};

export default Suggest;
