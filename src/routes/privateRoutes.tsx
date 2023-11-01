import config from "@configs/index";
import AuthGuard from "@/guards/AuthGuard";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@pages/Dashboard";
import Edit from "@pages/Edit";
import Add from "@pages/Add";

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
            {
                path: config.routes.private.add,
                element: (
                    <AuthGuard>
                        <Add />
                    </AuthGuard>
                ),
            },
        ],
    },
];

export default privateRoutes;
