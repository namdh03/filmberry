export const typeMovie = [
    {
        value: "upcoming",
        label: "Upcoming",
    },
    {
        value: "now_playing",
        label: "Now Playing",
    },
    {
        value: "popular",
        label: "Popular",
    },
    {
        value: "top_rated",
        label: "Top Rated",
    },
];

const inputFields = [
    {
        id: "title",
        label: "Title",
        name: "title",
    },
    {
        id: "original_title",
        label: "Original Title",
        name: "original_title",
    },
    {
        id: "overview",
        label: "Overview",
        name: "overview",
        multiline: true,
    },
    {
        id: "original_language",
        label: "Original Language",
        name: "original_language",
    },
    {
        id: "backdrop_path",
        label: "Backdrop Path",
        name: "backdrop_path",
    },
    {
        id: "poster_path",
        label: "Poster Path",
        name: "poster_path",
    },
    {
        id: "video_url",
        label: "Video URL",
        name: "video_url",
    },
    {
        id: "vote_average",
        label: "Vote Average",
        name: "vote_average",
    },
    {
        id: "popularity",
        label: "Popularity",
        name: "popularity",
    },
    {
        id: "vote_count",
        label: "Vote Count",
        name: "vote_count",
    },
    {
        id: "release_date",
        label: "Release Date",
        name: "release_date",
    },
    {
        id: "type",
        label: "Type",
        name: "type",
        select: true,
    },
    {
        id: "adult",
        label: "Adult",
        name: "adult",
        switch: true,
    },
    {
        id: "top",
        label: "Top",
        name: "top",
        switch: true,
    },
];

export default inputFields;
