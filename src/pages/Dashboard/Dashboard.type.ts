import { MouseEventHandler, SetStateAction, Dispatch } from "react";
export type DashboardProps = {
    title: string;
    description: string;
    loading: boolean;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
};
