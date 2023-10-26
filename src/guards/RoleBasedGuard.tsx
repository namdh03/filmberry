import { FC } from "react";
import { RoleBasedGuardProps } from "./interface";
import { useAuth } from "@hooks/useAuth";

const RoleBasedGuard: FC<RoleBasedGuardProps> = ({
    children,
    accessibleRoles,
}) => {
    const { user } = useAuth();

    if (!accessibleRoles.includes(user!.role)) return <div>Not found!</div>;

    return <>{children}</>;
};

export default RoleBasedGuard;
