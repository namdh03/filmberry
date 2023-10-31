import { Avatar, Rating } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MovieItem } from "@components/Movies/Movie/Movie.type";

const dashboardColumns: GridColDef[] = [
    {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 70,
    },
    { field: "title", headerName: "Title", width: 330 },
    {
        field: "adult",
        headerName: "Adult",
        type: "boolean",
        width: 70,
        sortable: false,
    },
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
    { field: "original_language", headerName: "Language", width: 130 },
    { field: "original_title", headerName: "Original Title", width: 230 },
    { field: "overview", headerName: "Overview", width: 130 },
    {
        field: "popularity",
        headerName: "Popularity",
        type: "number",
        width: 130,
    },
    {
        field: "poster_path",
        headerName: "Poster Path",
        width: 330,
        sortable: false,
        filterable: false,
    },
    {
        field: "release_date",
        headerName: "Release Date",
        type: "string",
        width: 130,
    },
    { field: "type", headerName: "Type", width: 70, sortable: false },
    {
        field: "video_url",
        headerName: "Video Url",
        width: 130,
        sortable: false,
        filterable: false,
    },
    {
        field: "vote_average",
        headerName: "Vote Average",
        width: 130,
        align: "center",
        renderCell: (props: GridRenderCellParams<MovieItem>) => (
            <Rating
                max={5}
                defaultValue={+props.row.vote_average.toFixed(1)}
                precision={0.5}
                readOnly
                sx={{ color: "warning.main" }}
            />
        ),
    },
    {
        field: "vote_count",
        headerName: "Vote Count",
        type: "number",
        width: 130,
    },
];

export default dashboardColumns;
