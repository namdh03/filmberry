import { Box, Skeleton, Stack } from "@mui/material";

const MovieList = ({ count }: { count: number }) => {
    return Array.from(Array(count).keys()).map((key) => (
        <Box
            key={key}
            padding="12px"
            borderRadius="16px"
            bgcolor="secondary.main"
        >
            <Skeleton
                animation="wave"
                variant="rounded"
                width={243}
                height={250}
            />

            <Stack
                direction="row"
                justifyContent="space-between"
                marginTop="20px"
            >
                <Skeleton
                    animation="wave"
                    variant="text"
                    width={180}
                    height={24}
                />
                <Skeleton
                    animation="wave"
                    variant="text"
                    width={50}
                    height={24}
                />
            </Stack>

            <Skeleton
                animation="wave"
                variant="rounded"
                height={37}
                sx={{
                    marginTop: "20px",
                }}
            />
        </Box>
    ));
};

export default MovieList;
