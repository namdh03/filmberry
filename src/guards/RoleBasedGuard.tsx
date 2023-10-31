import { FC } from "react";
import { useAuth } from "@hooks/index";
import { RoleBasedGuardProps } from "./interface";

const RoleBasedGuard: FC<RoleBasedGuardProps> = ({
    children,
    accessibleRoles,
}) => {
    const { user } = useAuth();

    if (!accessibleRoles.includes(user!.role)) return <div>Not found!</div>;

    return <>{children}</>;
};

export default RoleBasedGuard;
