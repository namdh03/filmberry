import { Role } from "@utils/enums";

export interface GoogleUser {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    locale: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}

export interface SystemUser extends GoogleUser {
    role: Role;
}

export interface LocalStorageValue<T> {
    key: string;
    initialValue: T;
}
