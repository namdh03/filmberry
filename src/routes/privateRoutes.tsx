import config from "@configs/index";
import AuthGuard from "@/guards/AuthGuard";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@pages/Dashboard";

const privateRoutes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: config.routes.private.dashboard,
                element: (
                    <AuthGuard>
                        <Dashboard />
                    </AuthGuard>
                ),
            },
        ],
    },
];

export default privateRoutes;
