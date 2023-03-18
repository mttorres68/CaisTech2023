import { Carousel } from "flowbite-react";
import React from "react";
import { IconClose, IconMenu, Icons } from "./Icons";
import Link from "./link";
import Section from "./Sections/Sections";
export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const image = 'https://i.imgur.com/a8cF8aj.png'

    return (
        <div className="justify-center">
            <header className="bg-[#111024] pt-6 font-poppins">
                <nav className="flex justify-between items-center w-[92%] mx-auto">
                    <div className="w-16 cursor-pointer" >
                        <img src={`${image ? image : 'none'}`} alt="" />
                    </div>
                    <div 
                        className={
                            `duration-500 rounded shadow-lg md:static md:min-h-fit absolute min-h-[60vh] left-0 md:w-auto w-full felx items-center px-5
                            ${ navbarOpen 
                                ? "top-[12%] border-separate p-2 bg-gradient-to-t from-[#11203b] to-[#111024]" 
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
                                linkSection={'#galeria'}
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
                        <button  
                            className=" border-2 border-[#360454] hover:border-[#1fc47a] transform transition hover:scale-110 ease-in-out duration-300 font-bold bg-[#a6c1ee] text-gray-800  px-5 py-2 rounded-full hover:bg-[#87acec]"
                        >
                            Escrever-se
                        </button>
                        <Icons
                            onclick={() => setNavbarOpen(!navbarOpen)}
                            Icon={navbarOpen ?  IconClose : IconMenu}
                        />
                    </div>
                </nav>            
            </header>
            <div className={`${navbarOpen ? "hidden duration-500" : ""} `}>
                <Section idSection={'oevento'}/>
                <div className=" mx-5 lg:mx-15 xl:mx-20 "> 
                    <h1 className="text-xl lg:text-2xl xl:text-6xl text-white">Edições anteriores</h1>
                </div>
                <div id="galeria" className={` mx-2 h-[62vh] md:h-[64vh] lg:h-[68vh] grid grid-cols-1 lg:grid-cols-2 bg-background-grandient bg-clip-border `}>                    
                
                    <Carousel slideInterval={1000} >
                        <img 
                            src="https://i.imgur.com/cdwmL4D.jpg" 
                            alt="" 
                            />
                        <img
                            src="https://i.imgur.com/tJQS6w2.jpg"
                            alt="..."
                        />
                        <img
                            src="https://i.imgur.com/kHVz1Zc.jpg"
                            alt="..."
                            />
                        {/* <img
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="..."
                            />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="..."
                            /> */}
                    </Carousel>
                    <div
                        className="mx-4 text-white"
                    >
                        A inteligência artificial é uma ferramenta poderosa que nos permite resolver problemas complexos e criar soluções inovadoras para problemas que antes pareciam insolúveis. Com a IA, podemos melhorar a eficiência dos negócios, encontrar novas formas de explorar e utilizar recursos naturais e transformar a forma como trabalhamos e vivemos. A IA nos permite sonhar em grande e criar um mundo melhor e mais justo para todos.
                    </div>
                </div>
            </div>
            

        </div>


    );
}