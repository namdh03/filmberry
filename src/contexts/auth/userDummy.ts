import { GoogleUser } from "@utils/interfaces";

export interface AuthDto {
    accessToken: string;
    user: GoogleUser;
}

export const USER: GoogleUser = {
    email: "duonghoangnam503@gmail.com",
    name: "Hoang Nam",
    picture: "https://avatars.githubusercontent.com/u/47280557?v=4",
    family_name: "Duong",
    given_name: "Hoang",
    locale: "en",
    sub: "google-oauth2|1165465456456456",
    verified: true,
};

class AuthService {
    async signIn(): Promise<AuthDto> {
        return Promise.resolve({
            accessToken: "ACCESS_TOKEN",
            user: USER,
        });
    }
}

export const authService = new AuthService();
