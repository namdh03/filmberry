import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    original_title: yup.string().required("Original Title is required"),
    overview: yup.string().required("Overview is required"),
    original_language: yup.string().required("Original Language is required"),
    backdrop_path: yup.string().required("Backdrop Path is required"),
    poster_path: yup.string().required("Poster Path is required"),
    video_url: yup.string().required("Video URL is required"),
    vote_average: yup.number().required("Vote Average is required"),
    popularity: yup.number().required("Popularity is required"),
    vote_count: yup.number().required("Vote Count is required"),
    release_date: yup.date().required("Release Date is required"),
    type: yup.string(),
});

export default validationSchema;
