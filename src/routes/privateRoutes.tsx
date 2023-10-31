import config from "@configs/index";
import AuthGuard from "@/guards/AuthGuard";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@pages/Dashboard";
import Edit from "@pages/Edit";

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
            {
                path: config.routes.private.edit,
                element: (
                    <AuthGuard>
                        <Edit />
                    </AuthGuard>
                ),
            },
        ],
    },
];

export default privateRoutes;
