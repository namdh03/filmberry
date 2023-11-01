import { AlertColor } from "@mui/material";

export type ToastProps = {
    message: string;
    type?: AlertColor;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
