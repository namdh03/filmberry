import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import config from "@configs/index";

const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
    const { isInitialized, isAuthenticated } = useAuth();

    if (!isInitialized) return <div>loading</div>;

    if (isAuthenticated) return <Navigate to={config.routes.public.home} />;

    return <>{children}</>;
};

export default GuestGuard;
