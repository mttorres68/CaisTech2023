import { Carousel } from "flowbite-react";
import React from "react";
import { IconClose, IconMenu, Icons } from "./Icons";
import Link from "./link";
import Section from "./Sections/Sections";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const image = "https://i.imgur.com/a8cF8aj.png";

  return (
    <div className="justify-center">
      <header className="bg-[#111024] pt-6 font-poppins">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="w-16 cursor-pointer">
            <img src={`${image ? image : "none"}`} alt="" />
          </div>
          <div
            className={`duration-500 rounded shadow-lg md:static md:min-h-fit absolute min-h-[60vh] left-0 md:w-auto w-full felx items-center px-5
                            ${
                              navbarOpen
                                ? "top-[12%] border-separate p-2 bg-gradient-to-t from-[#11203b] to-[#111024]"
                                : "top-[-100%]"
                            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white">
              <Link nome="O EVENTO" linkSection={"#oevento"} />
              <Link nome="PALESTRAS" linkSection={"#galeria"} />
              <Link nome="MINICURSOS" />
              <Link nome="PROGRAMAÇÃO" />
              <Link nome="DUVIDAS" />
              <Link nome="CONTATO" />
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className=" border-2 border-[#360454] hover:border-[#1fc47a] transform transition hover:scale-110 ease-in-out duration-300 font-bold bg-[#a6c1ee] text-gray-800  px-5 py-2 rounded-full hover:bg-[#87acec]">
              Escrever-se
            </button>
            <Icons
              onclick={() => setNavbarOpen(!navbarOpen)}
              Icon={navbarOpen ? IconClose : IconMenu}
            />
          </div>
        </nav>
      </header>
      <div className={`${navbarOpen ? "hidden duration-500" : ""} `}>
        <Section idSection={"oevento"} />
        <div className=" mx-5 lg:mx-15 xl:mx-20 ">
          <h1 className="my-4 text-xl lg:text-2xl xl:text-4xl text-white font-bold">
            Edições anteriores
          </h1>
        </div>
        <div
          id="galeria"
          className={` mx-2 h-[62vh] md:h-[64vh] lg:h-[68vh] grid grid-cols-1 lg:grid-cols-2 bg-background-grandient bg-clip-border `}
        >
          <Carousel slideInterval={2500}>
            <img src="https://i.imgur.com/cdwmL4D.jpg" alt="" />
            <img src="https://i.imgur.com/tJQS6w2.jpg" alt="..." />
            <img src="https://i.imgur.com/kHVz1Zc.jpg" alt="..." />
          </Carousel>
          <div className="mx-4 p-12 bg-gradient-to-b from-purple-900 to-blue-900 rounded">
            <div className="bg-mycolor h-2 w-60"></div>
            <h2 className="text-xl lg:text-2xl xl:text-4xl text-white font-bold">
              A inteligência artificial
            </h2>
            <p className="text-xl lg:text-1xl xl:text-2xl text-mycolor text-justify font-Inter font-medium">
              é uma ferramenta poderosa que nos permite resolver problemas
              complexos e criar soluções inovadoras para problemas que antes
              pareciam insolúveis. Com a IA, podemos melhorar a eficiência dos
              negócios, encontrar novas formas de explorar e utilizar recursos
              naturais e transformar a forma como trabalhamos e vivemos. A IA
              nos permite sonhar grande e criar um mundo melhor e mais justo
              para todos.
            </p>
          </div>
        </div>
        <div
          className={` mx-2 h-[62vh] md:h-[64vh] lg:h-[68vh] grid grid-cols-1 lg:grid-cols-2 bg-background-grandient bg-clip-border `}
        >
          <div className="my-4 mt-6 p-12 bg-gradient-to-b from-purple-900 to-blue-900 rounded">
            <p className="text-xl lg:text-1xl xl:text-2xl text-mycolor text-justify font-Inter font-medium">
              Manoel Jardim Gomes, mais conhecido como Manoel Gomes (Balsas, 2
              de dezembro de 1969), é um cantor e compositor brasileiro de
              brega. É conhecido por criar a música "Caneta Azul", que se tornou
              um meme da Internet. Manoel Gomes nasceu em Balsas e, desde a
              infância, se interessava pela música.
            </p>
          </div>
          <div>
            <h1 className="my-4 ml-4 text-xl lg:text-2xl xl:text-4xl text-white font-bold">
              Manoel Caneta Gomes
            </h1>
            <img
              className="my-4 ml-4"
              src="https://i.imgur.com/BolgZWk.jpeg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
