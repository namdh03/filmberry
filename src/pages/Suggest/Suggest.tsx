import * as St from "./Suggest.styled";

import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

import Search from "@components/Search";
import Toast from "@components/Toast/Toast";

const Suggest = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
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

                    <Toast
                        message="New feature coming soon!"
                        type="info"
                        open={open}
                        setOpen={setOpen}
                    />
                </Box>
            </Container>
        </St.SuggestWrapper>
    );
};

export default Suggest;
