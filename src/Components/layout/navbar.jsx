import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {
    Navbar as NavBarMt,
    MobileNav,
    Typography,
    Button,
    IconButton
} from '@material-tailwind/react';
import { routesLink } from "@/routes";

export function Navbar({brandName, routes, action}){
    const [openNav, setOpenNav] = useState(false);
    
    useEffect(() =>{
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    },[]);


    const navList = (
        <ul className=" mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {routesLink.map(({ name, path, icon, href, target }) => (
                <Typography
                    key={name}
                    as="li"
                    variant="lead"
                    color="inherit"
                    className="capitalize link-underline originFont"
                >
                    {href ? (
                        <a
                            href={href}
                            target={target}
                            className="flex items-center gap-1 p-1 font-normal"
                        >
                        {icon &&
                                React.createElement(icon, {
                                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                                })}
                            {name}
                        </a>
                    ) : (
                        <a
                            href={href}                        
                            className="flex items-center gap-1 p-1 font-normal"
                        >
                        {icon &&
                            React.createElement(icon, {
                            className: "w-[18px] h-[18px] opacity-75 mr-1",
                            })}
                            {name}
                        </a>
                    )}
                </Typography>
            ))}
    </ul>
    )

    return (
        <NavBarMt color="transparent" className="p-3 w-screen">
            <div className="container mx-auto flex items-center justify-between text-white ">
                <Link to="/">
                    <Typography className=" w-16 cursor-pointer">
                        <img src="https://i.imgur.com/a8cF8aj.png" />
                        {/* {brandName} */}
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden gap-2 lg:flex mr-4">
                    {React.cloneElement(action, {
                        className: "hidden lg:inline-block",
                    })}
                </div>
                <IconButton
                    variant="text"
                    size="lead"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent hover:text-green-500 focus:bg-transparent active:bg-transparent lg:hidden "
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <MobileNav
                className="rounded-xl bg-gray-300 px-4 pt-2 pb-4 text-blue-gray-900 lg:hidden"
                open={openNav}
            >
                <div className="container mx-auto">
                    {navList}
                    {React.cloneElement(action, {
                        className: "w-full block",
                    })}
                </div>
            </MobileNav>
        </NavBarMt>
    )
}

Navbar.defaultProps = {
    brandName: "CAISTECH 2023",
    action: (
        <a
            href=""
            target=""
            className=""
        >
            <Button
                id=""
                // color="purple"
                className="text-sm bg-[#3e008a] text-white hover:text-white originFont"

                
                // variant="outlined" 
                size="md" 
                fullWidth
            >
                Inscrever-se
            </Button>
        </a>
    ),
};

Navbar.propTypes = {
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.node,
};

Navbar.displayName = "/src/Components/layout/navbar.jsx";

export default Navbar;