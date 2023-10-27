import { Role } from "@utils/enums";

export interface GoogleUser {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    verified: boolean;
    locale: string;
}

export interface SystemUser extends GoogleUser {
    role: Role;
}

export interface LocalStorageValue<T> {
    key: string;
    initialValue: T;
}
