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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import config from "@configs/index";
import { darkTheme } from "@themes/index";
import { createMovie, updateMovie } from "@/services/movieServices";
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
        modalTitle,
        modalDescription,
    }: {
        title: string;
        icon: JSX.Element;
        movie?: MovieItem;
        modalTitle?: string;
        modalDescription?: string;
    }) => {
        const navigate = useNavigate();
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

                    if (!movie) {
                        await createMovie(values as MovieItem);
                        setToast({
                            ...toast,
                            message: "Movie added successfully!",
                            open: true,
                        });
                        formik.resetForm();
                        return;
                    }

                    await updateMovie(movie.id, values as MovieItem);
                    setToast({
                        ...toast,
                        message: "Movie updated successfully!",
                        open: true,
                    });
                    navigate(config.routes.private.dashboard);
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
                    >
                        {inputFields.map((inputField) => {
                            if (inputField.select) {
                                return (
                                    <TextField
                                        margin="normal"
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
                                        margin="normal"
                                        key={inputField.id}
                                        direction="row"
                                        alignItems="center"
                                    >
                                        <Typography
                                            sx={{
                                                minWidth: "50px",
                                                color: "text.primary",
                                            }}
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
                                        margin="normal"
                                        key={inputField.id}
                                        required
                                        fullWidth
                                        multiline={inputField.multiline}
                                        maxRows={10}
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
                        {movie ? "Update" : "Add"}
                    </Button>
                </Box>

                <DashboardModal
                    title={modalTitle || ""}
                    description={modalDescription || ""}
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
