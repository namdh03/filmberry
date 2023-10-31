import { Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridToolbar,
} from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";

import {
    deleteMovie,
    getAllMovies,
    markMovieTop,
} from "@/services/movieServices";
import { MovieItem } from "@components/Movies/Movie/Movie.type";
import Container from "@components/Container";

import DashboardModal from "./Dashboard.modal";
import dashboardColumns from "./Dashboard.columns";
import IOSSwitch from "./Dashboard.switch";
import { DashboardWrapper } from "./Dashboard.styled";

const Dashboard = () => {
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
                                />
                                <Delete
                                    cursor="pointer"
                                    sx={{ color: "error.main" }}
                                    onClick={() =>
                                        handleOpenModal(props.row.id)
                                    }
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
    }, []);

    const handleOpenModal = (id: number) => {
        setOpenModal(true);
        movieId.current = id;
    };

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
                loading={loading}
                open={openModal}
                setOpen={setOpenModal}
                handleSubmit={handleDeleteMovie}
            />
        </DashboardWrapper>
    );
};

export default Dashboard;
