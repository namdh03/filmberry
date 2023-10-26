import config from "@configs/index";
import GuestGuard from "@/guards/GuestGuard";
import Login from "@pages/Login";
import Home from "@pages/Home";
import AuthGuard from "@/guards/AuthGuard";

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
        path: config.routes.public.home,
        element: (
            <AuthGuard>
                <Home />
            </AuthGuard>
        ),
    },
];

export default publicRoutes;
