import {
    HomeIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/solid";

import { Home } from "@/pages"
export const routes = [{
        name: "EVENTO",
        path: "/home",
        element: <Home />,
    },{
        name: "PALESTRAS",
        path: "palestra",
    },{
        name: "MINICURSOS",
        path: "minicurso",
    },{
        name: "PROGRAMAÇÃO",
        path: "programacao",
    },{
        name: "DUVIDAS",
        path:"duvidas",
    },{
        name: "CONTATO",
        path:"contato",
    },
];

export default routes;
export const routesLink = [ {
        name: "O EVENTO",
        path: "/home",
        element: <Home />,
        href:"#evento"
    }, {
        name: "PALESTRAS",
        href: "#palestra",
        element: "",
    },{
        name: "MINICURSOS",
        href: "#minicursos",
    },{
        name: "PROGRAMAÇÃO",
        href: "#programacao",
    },{        
        name: "DUVIDAS",
        href: "#duvidas",
        element: "",
    },{
        name: "CONTATO",
        href: "#contato",        
        element: "",
    },
];