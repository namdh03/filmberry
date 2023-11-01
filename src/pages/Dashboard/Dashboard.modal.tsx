import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { memo } from "react";
import { DashboardProps } from "./Dashboard.type";

const DashboardModal = memo(
    ({
        title,
        description,
        loading,
        open,
        setOpen,
        handleSubmit,
    }: DashboardProps) => {
        return (
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton loading={loading} onClick={handleSubmit}>
                        Agree
                    </LoadingButton>
                    <Button variant="contained" onClick={() => setOpen(false)}>
                        Disagree
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
);

export default DashboardModal;
