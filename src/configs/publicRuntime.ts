const publicRuntime = {
    NODE_ENV: import.meta.env.NODE_ENV || "production",
    API_URL: import.meta.env.VITE_API_URL,
    CLIENT_ID: import.meta.env.VITE_CLIENT_ID,
};

export default publicRuntime;
