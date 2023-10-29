import config from "@configs/index";
import GuestGuard from "@/guards/GuestGuard";
import MainLayout from "@layouts/MainLayout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Movies from "@pages/Movies";
import Movie from "@pages/Movie";
import Contact from "@pages/Contact";
import Suggest from "@pages/Suggest";

const publicRoutes = [
    {
        path: config.routes.public.login,
        element: (
            <GuestGuard>
                <Login />
            </GuestGuard>
        ),
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: config.routes.public.home,
                element: <Home />,
            },
            {
                path: config.routes.public.movies,
                element: <Movies />,
            },
            {
                path: config.routes.public.movie,
                element: <Movie />,
            },
            {
                path: config.routes.public.contact,
                element: <Contact />,
            },
            {
                path: config.routes.public.suggest,
                element: <Suggest />,
            },
        ],
    },
];

export default publicRoutes;
