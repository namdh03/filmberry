import publicRoutes from "./publicRoutes";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { useScrollTop } from "@/hooks/index";

const Router: FC = () => {
    useScrollTop();

    return useRoutes([...publicRoutes]);
};

export default Router;
