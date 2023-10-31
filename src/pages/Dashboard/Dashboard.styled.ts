import { Box, styled } from "@mui/material";

export const DashboardWrapper = styled(Box)`
    min-height: 100vh;
    padding-top: 170px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .MuiDataGrid-toolbarContainer {
        margin-left: auto;
        margin-right: auto;
    }

    & .MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="true"] {
        color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="false"] {
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;
