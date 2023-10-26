import { FC } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const Router: FC = () => {
    return useRoutes([...publicRoutes]);
};

export default Router;
