import configs from "@configs/index";
import { NavItem } from "./Header.interface";

const nav: NavItem[] = [
    {
        id: configs.routes.public.home,
        url: configs.routes.public.home,
        label: "Home",
    },
    {
        id: configs.routes.public.movies,
        url: configs.routes.public.movies,
        label: "Movies",
    },
    {
        id: configs.routes.public.contact,
        url: configs.routes.public.contact,
        label: "Contact",
    },
    {
        id: configs.routes.public.suggest,
        url: configs.routes.public.suggest,
        label: "Suggest",
    },
];

export default nav;
