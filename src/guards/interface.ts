import { Role } from "@utils/enums";

export interface RoleBasedGuardProps {
    accessibleRoles: Array<Role>;
    children: React.ReactNode;
}
