import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Dispatch, MouseEventHandler, SetStateAction, memo } from "react";

const DashboardModal = memo(
    ({
        loading,
        open,
        setOpen,
        handleSubmit,
    }: {
        loading: boolean;
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
        handleSubmit: MouseEventHandler<HTMLButtonElement>;
    }) => {
        return (
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to delete this movie?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting this movie will permanently remove it and
                        cannot be undone. Please confirm you understand.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Disagree</Button>

                    <LoadingButton loading={loading} onClick={handleSubmit}>
                        Agree
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        );
    }
);

export default DashboardModal;
