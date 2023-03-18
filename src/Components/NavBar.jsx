import React from "react";
import { IconClose, IconMenu, Icons } from "./Icons";
import Link from "./link";
import Section from "./Sections/Sections";
export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <div className="justify-center">
            <header className="bg-[#111024] pt-6 font-poppins">
                <nav className="flex justify-between items-center w-[92%] mx-auto">
                    <div className="w-16 cursor-pointer" >
                        <img src="https://i.imgur.com/a8cF8aj.png" alt="" />
                    </div>
                    <div 
                        className={
                            `duration-500 rounded shadow-lg md:static md:min-h-fit absolute min-h-[60vh] left-0 md:w-auto w-full felx items-center px-5
                            ${ navbarOpen 
                                ? "top-[10%] border-separate p-2 bg-gradient-to-t from-[#11203b] to-[#111024]" 
                                : "top-[-100%]"
                            }`
                        }
                    >
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white">
                            <Link
                                nome='O EVENTO'
                                linkSection={'#oevento'}
                            />
                            <Link
                                nome='PALESTRAS'
                            />
                            <Link
                                nome='MINICURSOS'
                            />
                            <Link
                                nome='PROGRAMAÇÃO'
                            />
                            <Link
                                nome='DUVIDAS'
                            />
                            <Link
                                nome='CONTATO'
                            />
            
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        <button  className=" ease-in-out duration-300 font-bold bg-[#a6c1ee] text-gray-800  px-5 py-2 rounded-full hover:bg-[#87acec]">
                            Escrever-se
                        </button>
                        <Icons
                            onclick={() => setNavbarOpen(!navbarOpen)}
                            Icon={navbarOpen ?  IconClose : IconMenu}
                        />
                    </div>
                </nav>            
            </header>

            <Section />
            <Section idSection={'oevento'}/>

        </div>


    );
}