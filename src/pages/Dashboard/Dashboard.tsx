import { Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridToolbar,
} from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import config from "@configs/index";
import useLocalStorage from "@hooks/useLocalStorage";
import {
    deleteMovie,
    getAllMovies,
    markMovieTop,
} from "@/services/movieServices";
import { ToastProps } from "@components/Toast/Toast.type";
import { MovieItem } from "@components/Movies/Movie/Movie.type";
import Container from "@components/Container";
import Toast from "@components/Toast";

import DashboardModal from "./Dashboard.modal";
import dashboardColumns from "./Dashboard.columns";
import IOSSwitch from "./Dashboard.switch";
import { DashboardWrapper } from "./Dashboard.styled";

const Dashboard = () => {
    const navigate = useNavigate();
    const [, setMovie] = useLocalStorage(config.localStorages.movieId, 0);
    const [toast, setToast] = useState<ToastProps>({
        message: "",
        type: "success",
        open: false,
        setOpen: () => {
            setToast((prevToast) => ({ ...prevToast, open: false }));
        },
    });

    const [rows, setRows] = useState<MovieItem[]>([]);
    const columns = useRef<GridColDef[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const movieId = useRef<number>(0);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getAllMovies();
                columns.current = [
                    ...dashboardColumns,
                    {
                        field: "top",
                        headerName: "Top",
                        type: "boolean",
                        width: 130,
                        sortable: false,
                        renderCell: (
                            props: GridRenderCellParams<MovieItem>
                        ) => (
                            <IOSSwitch
                                disabled={loading}
                                defaultChecked={props.row.top}
                                onChange={() =>
                                    handleToggleTopMovie(
                                        props.row.id,
                                        props.value
                                    )
                                }
                            />
                        ),
                    },
                    {
                        field: "actions",
                        headerName: "Actions",
                        width: 130,
                        hideable: false,
                        renderCell: (
                            props: GridRenderCellParams<MovieItem>
                        ) => (
                            <Stack
                                direction="row"
                                alignItems="center"
                                columnGap="6px"
                            >
                                <Edit
                                    cursor="pointer"
                                    sx={{ color: "warning.main" }}
                                    onClick={() => {
                                        setMovie(props.row.id);
                                        navigate(config.routes.private.edit);
                                    }}
                                />
                                <Delete
                                    cursor="pointer"
                                    sx={{ color: "error.main" }}
                                    onClick={() => {
                                        setOpenModal(true);
                                        movieId.current = props.row.id;
                                    }}
                                />
                            </Stack>
                        ),
                    },
                ];
                setRows(data);
            } catch (error) {
                console.log(error);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleTopMovie = async (id: number, value: boolean) => {
        try {
            setLoading(true);

            await markMovieTop(id, !value);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteMovie = async () => {
        try {
            setLoading(true);

            if (movieId.current === 0) return;

            await deleteMovie(movieId.current);

            setRows((prevRows) =>
                prevRows.filter((row) => row.id !== movieId.current)
            );

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
    };

    return (
        <DashboardWrapper>
            <Container>
                <DataGrid
                    rows={rows}
                    columns={columns.current}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                        columns: {
                            columnVisibilityModel: {
                                adult: false,
                                original_language: false,
                                original_title: false,
                                overview: false,
                                popularity: false,
                                poster_path: false,
                                release_date: false,
                                type: false,
                                video_url: false,
                                vote_count: false,
                            },
                        },
                    }}
                    pageSizeOptions={[10, 20, 30, 40, 50]}
                    density="comfortable"
                    hideFooterSelectedRowCount
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    rowHeight={130}
                />
            </Container>

            <DashboardModal
                title="Are you sure you want to delete this movie?"
                description="Deleting this movie will permanently remove it and
                cannot be undone. Please confirm you understand."
                loading={loading}
                open={openModal}
                setOpen={setOpenModal}
                handleSubmit={handleDeleteMovie}
            />

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    open={toast.open}
                    setOpen={toast.setOpen}
                />
            )}
        </DashboardWrapper>
    );
};

export default Dashboard;
