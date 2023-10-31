import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { useScrollTop } from "@/hooks/index";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const Router: FC = () => {
    useScrollTop();

    return useRoutes([...publicRoutes, ...privateRoutes]);
};

export default Router;
