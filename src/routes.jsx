import {
    HomeIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/solid";

import { Home } from "@/pages"
export const routes = [
    {
        // icon: HomeIcon,
        name: "EVENTO",
        path: "/home",
        element: <Home />,
    },
    {
        // icon: UserCircleIcon,
        name: "PALESTRAS",
        path: "palestra",
        element: "",
    },
    {
        // icon: ArrowRightOnRectangleIcon,
        name: "MINICURSOS",
        path: "minicurso",
        // element: <SignIn />,
    },
    {
        // icon: UserPlusIcon,
        name: "PROGRAMAÇÃO",
        path: "programacao",
        // element: <SignUp />,
    },
    {
        // icon: DocumentTextIcon,
        name: "DUVIDAS",
        path:"duvidas",
        // href: "https://www.material-tailwind.com/docs/react/installation",
        target: "_blank",
        element: "",
    },{
        // icon: DocumentTextIcon,
        name: "CONTATO",
        path:"contato",
        // href: "https://www.material-tailwind.com/docs/react/installatio",
        target: "_blank",
        element: "",
    },
];

export default routes;
export const routesLink = [
    {
        // icon: HomeIcon,
        name: "O EVENTO",
        path: "/home",
        element: <Home />,
        href:"#evento"
    },
    {
        // icon: UserCircleIcon,
        name: "PALESTRAS",
        href: "#palestra",
        element: "",
    },
    {
        // icon: ArrowRightOnRectangleIcon,
        name: "MINICURSOS",
        href: "#sign-in",
        // element: <SignIn />,
    },
    {
        // icon: UserPlusIcon,
        name: "PROGRAMAÇÃO",
        href: "/programacao",
        // element: <SignUp />,
    },
    {
        // icon: DocumentTextIcon,
        name: "DUVIDAS",
        href: "#duvidas",

        // href: "https://www.material-tailwind.com/docs/react/installation",
        // target: "_blank",
        element: "",
    },{
        // icon: DocumentTextIcon,
        name: "CONTATO",
        href: "#contato",
        // href: "https://www.material-tailwind.com/docs/react/installatio",
        // target: "_blank",
        element: "",
    },
];