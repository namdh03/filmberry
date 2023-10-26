import { Dispatch } from "react";
import { AuthActionType } from "./enums";
import { SystemUser } from "@utils/interfaces";

export interface AuthState {
    isAuthenticated?: boolean;
    isInitialized?: boolean;
    user: SystemUser | null;
}

export interface PayloadAction<T> {
    type: AuthActionType;
    payload: T;
}

export interface AuthContextType extends AuthState {
    dispatch: Dispatch<PayloadAction<AuthState>>;
}

export interface ReducerHandler {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_OUT(state: AuthState): AuthState;
}
