import { Box, styled } from "@mui/material";

export const DashboardWrapper = styled(Box)`
    min-height: 100vh;
    padding-top: 130px;
    background: ${({ theme }) => theme.palette.background.paper};

    & .MuiDataGrid-columnHeaderTitle {
        color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="true"] {
        color: ${({ theme }) => theme.palette.primary.main};
    }

    & .MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="false"] {
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;
