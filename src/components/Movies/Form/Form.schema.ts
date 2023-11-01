import * as yup from "yup";

const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    original_title: yup.string().required("Original Title is required"),
    overview: yup.string().max(500).required("Overview is required"),
    original_language: yup.string().required("Original Language is required"),
    backdrop_path: yup.string().url().required("Backdrop Path is required"),
    poster_path: yup.string().url().required("Poster Path is required"),
    video_url: yup.string().url().required("Video URL is required"),
    vote_average: yup
        .number()
        .min(0)
        .max(10)
        .required("Vote Average is required"),
    popularity: yup.number().min(0).required("Popularity is required"),
    vote_count: yup
        .number()
        .min(0)
        .integer()
        .required("Vote Count is required"),
    release_date: yup
        .string()
        .required()
        .matches(
            /^(\d{2})\/(\d{2})\/(\d{4})$/,
            "Must be a valid date in DD/MM/YYYY format"
        ),
    type: yup.string(),
});

export default validationSchema;
