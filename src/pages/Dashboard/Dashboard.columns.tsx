import { Avatar, Rating, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MovieItem } from "@components/Movies/Movie/Movie.type";

const dashboardColumns: GridColDef[] = [
    {
        field: "no",
        headerName: "No",
        type: "number",
        width: 70,
        hideable: false,
    },
    {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 70,
    },
    { field: "title", headerName: "Title", width: 230 },
    { field: "original_title", headerName: "Original Title", width: 230 },
    { field: "overview", headerName: "Overview", width: 130 },
    { field: "original_language", headerName: "Language", width: 130 },
    {
        field: "backdrop_path",
        headerName: "Backdrop Path",
        width: 330,
        sortable: false,
        filterable: false,
        renderCell: (props: GridRenderCellParams<MovieItem>) => (
            <Avatar
                variant="rounded"
                src={props.row.backdrop_path}
                sx={{ width: "85%", height: "85%" }}
                alt={props.row.title}
            />
        ),
    },
    {
        field: "poster_path",
        headerName: "Poster Path",
        width: 330,
        sortable: false,
        filterable: false,
        renderCell: (props: GridRenderCellParams<MovieItem>) => (
            <Avatar
                variant="rounded"
                src={props.row.backdrop_path}
                sx={{ width: "85%", height: "85%" }}
                alt={props.row.title}
            />
        ),
    },
    {
        field: "release_date",
        headerName: "Release Date",
        type: "string",
        width: 130,
    },
    {
        field: "type",
        headerName: "Type",
        width: 70,
        sortable: false,
        renderCell: (props: GridRenderCellParams<MovieItem>) =>
            props.row.type.length === 0 ? "None" : props.row.type,
    },
    {
        field: "video_url",
        headerName: "Video URL",
        width: 130,
        sortable: false,
        filterable: false,
    },
    {
        field: "vote_average",
        headerName: "Vote Average",
        width: 130,
        type: "number",
        renderCell: (props: GridRenderCellParams<MovieItem>) => (
            <>
                <Typography>
                    {Number(props.row.vote_average).toFixed(1)}
                </Typography>
                <Rating
                    max={1}
                    value={1}
                    precision={0.5}
                    readOnly
                    sx={{ color: "warning.main" }}
                />
            </>
        ),
    },
    {
        field: "popularity",
        headerName: "Popularity",
        type: "number",
        width: 130,
    },
    {
        field: "vote_count",
        headerName: "Vote Count",
        type: "number",
        width: 130,
    },
    {
        field: "adult",
        headerName: "Adult",
        type: "boolean",
        width: 70,
        sortable: false,
    },
];

export default dashboardColumns;
