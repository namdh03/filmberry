import { NavItem } from "./Header.interface";
import configs from "@configs/index";

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
        label: "Contact Us",
    },
    {
        id: configs.routes.public.blog,
        url: configs.routes.public.blog,
        label: "Blog",
    },
    {
        id: configs.routes.public.about,
        url: configs.routes.public.about,
        label: "About Us",
    },
];

export default nav;
