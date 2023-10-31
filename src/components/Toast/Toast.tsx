import { Alert, Snackbar } from "@mui/material";
import { SyntheticEvent, memo } from "react";
import { ToastProps } from "./Toast.type";

const Toast = memo(
    ({ message, type = "success", open, setOpen }: ToastProps) => {
        const handleClose = (
            _event?: SyntheticEvent | Event,
            reason?: string
        ) => {
            if (reason === "clickaway") {
                return;
            }

            setOpen(false);
        };

        return (
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                style={{ right: "35px" }}
            >
                <Alert
                    severity={type}
                    sx={{ width: "100%" }}
                    onClose={handleClose}
                >
                    {message}
                </Alert>
            </Snackbar>
        );
    }
);

export default Toast;
