import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import config from "@configs/index";

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
    const { isInitialized, isAuthenticated } = useAuth();

    if (!isInitialized) return <div>loading</div>;

    if (isAuthenticated) return <Navigate to={config.routes.public.login} />;

    return <>{children}</>;
};

export default AuthGuard;
