import {
    FC,
    PropsWithChildren,
    createContext,
    useLayoutEffect,
    useReducer,
} from "react";
import cookies from "@utils/cookies";
import { SystemUser } from "@utils/interfaces";
import { AuthContextType, AuthState } from "./interface";
import { initialize, reducer } from "./reducers";

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null,
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useLayoutEffect(() => {
        (() => {
            const accessToken = cookies.getToken();

            if (!accessToken) {
                return dispatch(
                    initialize({ isAuthenticated: false, user: null })
                );
            }

            try {
                const user = cookies.decodeJwt()! as SystemUser;

                dispatch(initialize({ isAuthenticated: true, user }));
            } catch (error) {
                dispatch(initialize({ isAuthenticated: false, user: null }));
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
