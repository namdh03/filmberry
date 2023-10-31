import {
    MenuItem,
    Typography,
    Avatar,
    Box,
    Container,
    Button,
    TextField,
    Switch,
    Stack,
} from "@mui/material";
import { useState, memo } from "react";
import { useFormik } from "formik";

import { darkTheme } from "@themes/index";
import { updateMovie } from "@/services/movieServices";
import { MovieItem } from "@components/Movies/Movie/Movie.type";
import { ToastProps } from "@components/Toast/Toast.type";
import Toast from "@components/Toast";
import DashboardModal from "@pages/Dashboard/Dashboard.modal";

import validationSchema from "./Form.schema";
import inputFields, { typeMovie } from "./Form.fields";

const Form = memo(
    ({
        title,
        icon,
        movie,
    }: {
        title: string;
        icon: JSX.Element;
        movie?: MovieItem;
    }) => {
        const formik = useFormik({
            enableReinitialize: true,
            initialValues: {
                title: movie?.title || "",
                original_title: movie?.original_title || "",
                overview: movie?.overview || "",
                original_language: movie?.original_language || "",
                backdrop_path: movie?.backdrop_path || "",
                poster_path: movie?.backdrop_path || "",
                video_url: movie?.video_url || "",
                vote_average: movie?.vote_average || 0,
                popularity: movie?.popularity || 0,
                vote_count: movie?.vote_count || 0,
                release_date: movie?.release_date || "",
                type: movie?.type || "",
                adult: movie?.adult || false,
                top: movie?.top || false,
            },
            validationSchema,
            onSubmit: async (values) => {
                try {
                    setLoading(true);

                    if (!movie) return;
                    await updateMovie(movie.id, values as MovieItem);

                    setToast({
                        ...toast,
                        message: "Movie deleted successfully!",
                        open: true,
                    });
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                    setOpenModal(false);
                }
            },
        });

        const [toast, setToast] = useState<ToastProps>({
            message: "",
            type: "success",
            open: false,
            setOpen: () => {
                setToast((prevToast) => ({ ...prevToast, open: false }));
            },
        });
        const [loading, setLoading] = useState<boolean>(false);
        const [openModal, setOpenModal] = useState(false);

        const handleUpdateMovie = async () => {
            if (!formik.isValid)
                return (
                    setToast({
                        ...toast,
                        message: "Form contains invalid fields!",
                        type: "error",
                        open: true,
                    }),
                    setOpenModal(false)
                );

            formik.submitForm();
        };

        return (
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: "primary.main",
                            color: darkTheme.text?.primary,
                        }}
                    >
                        {icon}
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: "text.primary" }}
                    >
                        {title}
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{
                            mt: 4,
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "24px",
                            width: "100%",
                        }}
                    >
                        {inputFields.map((inputField) => {
                            if (inputField.select) {
                                return (
                                    <TextField
                                        key={inputField.id}
                                        select={inputField.select}
                                        required
                                        fullWidth
                                        id={inputField.id}
                                        label={inputField.label}
                                        name={inputField.name}
                                        value={
                                            formik.values[
                                                inputField.id as keyof typeof formik.values
                                            ]
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={
                                            formik.touched[
                                                inputField.id as keyof typeof formik.values
                                            ] &&
                                            Boolean(
                                                formik.errors[
                                                    inputField.id as keyof typeof formik.values
                                                ]
                                            )
                                        }
                                        helperText={
                                            formik.touched[
                                                inputField.id as keyof typeof formik.values
                                            ] &&
                                            formik.errors[
                                                inputField.id as keyof typeof formik.values
                                            ]
                                        }
                                    >
                                        {typeMovie.map((type) => (
                                            <MenuItem
                                                key={type.value}
                                                value={type.value}
                                            >
                                                {type.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                );
                            } else if (inputField.switch) {
                                return (
                                    <Stack
                                        key={inputField.id}
                                        direction="row"
                                        alignItems="center"
                                    >
                                        <Typography
                                            sx={{ color: "text.primary" }}
                                        >
                                            {inputField.label}
                                        </Typography>
                                        <Switch
                                            key={inputField.id}
                                            required
                                            id={inputField.id}
                                            name={inputField.name}
                                            value={
                                                formik.values[
                                                    inputField.id as keyof typeof formik.values
                                                ]
                                            }
                                            checked={
                                                formik.values[
                                                    inputField.id as keyof typeof formik.values
                                                ] as boolean
                                            }
                                            onChange={formik.handleChange}
                                        />
                                    </Stack>
                                );
                            } else {
                                return (
                                    <TextField
                                        key={inputField.id}
                                        required
                                        fullWidth
                                        multiline={inputField.multiline}
                                        id={inputField.id}
                                        label={inputField.label}
                                        name={inputField.name}
                                        value={
                                            formik.values[
                                                inputField.id as keyof typeof formik.values
                                            ]
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={
                                            formik.touched[
                                                inputField.id as keyof typeof formik.values
                                            ] &&
                                            Boolean(
                                                formik.errors[
                                                    inputField.id as keyof typeof formik.values
                                                ]
                                            )
                                        }
                                        helperText={
                                            formik.touched[
                                                inputField.id as keyof typeof formik.values
                                            ] &&
                                            formik.errors[
                                                inputField.id as keyof typeof formik.values
                                            ]
                                        }
                                    />
                                );
                            }
                        })}
                    </Box>

                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => setOpenModal(true)}
                    >
                        Update
                    </Button>
                </Box>

                <DashboardModal
                    title="Are you sure you want to update this movie?"
                    description="Updating this movie will save the changes to it. Please confirm you want to update this movie."
                    loading={loading}
                    open={openModal}
                    setOpen={setOpenModal}
                    handleSubmit={handleUpdateMovie}
                />

                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        open={toast.open}
                        setOpen={toast.setOpen}
                    />
                )}
            </Container>
        );
    }
);

export default Form;
