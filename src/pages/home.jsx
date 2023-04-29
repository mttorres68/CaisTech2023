import {   
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,

} from "@material-tailwind/react"
import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import {
    CourseCard, 
    FeatureCard, 
    SponsorshipCard, 
    VideoCard, 
    SpeakersCard, 
    DoubtCard,
    CardSpeaker
} from "@/Components/cards";
import {featuresData,sponsorshipData, courseData, speakersData } from "@/data"
import {Carrosel, Footer, PageTitle,} from "@/Components/layout"
import PropTypes from "prop-types";
import ParticleBackground from "@/Components/particlesBackground/particleBackgrouns";
// import { speakersData } from "@/data/speakersData";



// <div className="absolute top-0 h-full w-full bg-[url(https://i.imgur.com/LBn6IWR.png)] bg-cover bg-center" >

export function Home({socialsctech}){


    return(
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            <div className="absolute top-0 h-full w-full bg-cover bg-center" >
                {/* <VideoCard/> */}
                {/* <div className="absolute top-0 h-full w-full bg-[url(https://i.imgur.com/LDYHZBb.png)] bg-cover bg-center text-white text-3xl" ></div> */}
                {/* <ParticleBackground/> */}
            </div>
            <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto hidden">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4  lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-1 font-black text-4xl md:text-6xl lg:text-[6rem]"
                            >
                                Cais Tech 2023
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80 text-2xl md:text-4xl lg:text-[2rem]">
                                Transformando dados em conhecimento
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            <section id="programacao" className="-mt-32 bg-tech-60 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map(({ color, title, icon, description, data }) => (
                            <FeatureCard
                                key={`key-2${data}`}
                                data={data}
                                title={title}
                                // description={description}
                            />
                        ))}
                    </div>
                    <div  className="mt-32 flex flex-wrap items-center">
                        <div  className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-100 p-3 text-center shadow-lg">
                                <RocketLaunchIcon className="h-6 w-6 text-blue-gray-900" />
                            </div>
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold text-blue-gray-900 originFont"
                                color="blue-gray"
                            >
                                CaisTech 2023
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-800 text-justify ">
                                O Congresso Anual de Informática do Sul do Piauí (Cais Tech 2023) já está com data para acontecer. Nos dias 31 de maio, 1 e 2 de Junho, correrá a sexta edição do evento. O Cais Tech é um evento único e enriquecedor para toda a comunidade, no qual tem como objetivo discutir sobre as últimas tendências e avanços do mundo da Tecnologia.                        
                                <br />
                                <br />
                                Será imperdível! Guarde essa data e fique de olho nas nossas redes sociais para não perder nada.
                            </Typography>
                            {/* <Button variant="outlined">Saber mais</Button> */}
                            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
                                {socialsctech.map(({ color, name, path, index }) => (
                                    <a
                                        key={`key-2${name}`}
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconButton className="bg-blue-gray-50 rounded-full">
                                            <Typography color={color}>
                                                <i className={`fa-brands fa-${name}`} />
                                            </Typography>
                                        </IconButton>
                                    </a>
                                ))}
                        </div>
                        </div>
                        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                            <Card className="shadow-lg shadow-gray-500/10 bg-blue-gray-100">
                                <CardHeader className="relative h-56 mt-2">
                                    <Typography
                                        variant="h5"
                                        className="bg-blue-gray-100 p-2 font-bold originFont"
                                    >
                                        Edições anteriores
                                    </Typography>
                                    <Carrosel/>
                                </CardHeader>
                                <CardBody>
                                    
                                    <Typography className="font-normal text-gray-800 text-justify">
                                        O Cais Tech tem uma história de sucesso e evolução. É um evento realizado anualmente, pelo IFPI - Campus Floriano, e - desde 2017, contou com a participação de palestrantes do Brasil e dos Estados Unidos, proporcionando o melhor conteúdo e experiência para os participantes.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section id="palestra" className="bg-ctech-900 px-4 pt-20 pb-20">
                <div  className="container mx-auto justify-start">
                    <PageTitle heading="Palestrantes Confirmados">
                        <span className="text-gray-600  originFont justify-center flex">
                            <i className="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-50"/>
                        </span>
                    </PageTitle>
                    
                    <div  className="mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-1 xl:grid-cols-1">
                        {speakersData.map(({img,name, tema,redesSocial, curriculo, index}) =>(
                            <SpeakersCard
                                key={`key-1${name}`}
                                img={img}
                                name={name}
                                tema={tema}
                                curriculo={
                                    <div>
                                        {curriculo.map(({formacao}) => (
                                            <li key={formacao}>
                                                {formacao}
                                            </li>
                                        ))}
                                    </div>
                                }
                                redesSocial={
                                    <div className="flex items-center gap-2">
                                        {redesSocial.map(({color, name, path, social, index}) => (
                                            <a 
                                                key={`key-${name}`}
                                                href={path}
                                                target="_blank"
                                                className="flex"
                                            >
                                                <IconButton
                                                    color={color}
                                                    variant="text"
                                                    className="flex flex-row"
                                                >
                                                    <i className={`fa-brands text-lg  fa-${name}`} />
                                                </IconButton>
                                                    <span className={`flex mt-2 text-${color}-500`}>
                                                        {social}
                                                    </span>
                                            </a>
                                        ))}
                                    </div>
                                }
                            />
                        ))}
                        
                    </div>
                </div>
            </section>

            <section id="minicursos"  className=" bg-tech-60 py-10 pb-20">
                <div className="container mx-auto">
                    <PageTitle 
                        title="Minicursos/Oficinas"
                        titleMinicurso="QUER MINISTRAR UM MINICURSO/OFICINA NO NOSSO EVENTO?"
                    >
                        <a 
                            className="flex justify-center w-full"
                            href="https://forms.gle/w4ziLxT1rBZ5aTko6"
                            target="_blank"
                        >
                            <span 
                                className="bg-[#1fc47a] text-white rounded-md p-2 hover:shadow-md hover:shadow-gray-300 transition ease-in-out hover:-translate-y-2 hover:scale-y-110 duration-300"
                            >
                                PARTICIPAR AGORA
                            </span>
                        </a>
                        <span className="text-gray-600  originFont flex justify-center mt-6">
                            {/* QUEM IRÁ MINISTRAR */}
                            <i className="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-900"/>
                        </span>
                    </PageTitle>
                    <div className="mt-12 grid grid-cols-1 gap-12 gap-x-16 md:grid-cols-2 xl:grid-cols-3">
                        {courseData.map(({img, autor, title, descricao, dia, local, index}) => (
                            <CourseCard 
                                key={`key-4${autor}`}
                                img={img}
                                autor={autor}
                                title={title}
                                descricao={descricao}
                                local={local}
                                dia={
                                    <div>
                                        {dia.map(({dia, index}) => (
                                            <span key={`key-5${dia}`} className="flex gap-1">
                                                <i className="fas fa-duotone fa-calendar-days mt-[2px]"/>
                                                {dia}
                                            </span>
                                        ))}
                                    </div>
                                }
                            />
                        ))}

                    </div>
                </div>
            </section>

            <section id="patrocinadores" className="bg-ctech-900 px-4 pt-20 pb-20">
                <div  className="container mx-auto">
                    <PageTitle 
                        heading="Patrocinadores"
                        titlePatrocino="DESEJA PATROCINAR O EVENTO?"
                    >
                        <a 
                            className="flex justify-center w-full"
                            href="https://api.whatsapp.com/send?phone=89994409955"
                            target="_blank"
                        >
                            <span 
                                className="bg-[#1fc47a] text-white rounded-md p-2 hover:shadow-md hover:shadow-gray-300 transition ease-in-out hover:-translate-y-2 hover:scale-y-110 duration-300"
                            >
                                SEJA NOSSO PATROCINADOR
                            </span>
                        </a>
                        <span className="text-gray-600  originFont justify-center flex mt-6">
                                <i className="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-50"/>
                        </span>
                    </PageTitle>
                    <div  className=" mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {sponsorshipData.map(({ img, name, position, socials, nameColor, index }) => (
                            <SponsorshipCard
                                key={`key-2${name}`}
                                img={img}
                                name={name}
                                nameColor={nameColor}
                                position={position}
                                socials={
                                    <div className="flex items-center gap-2">
                                        {socials.map(({ color, name, index }) => (
                                            <IconButton  key={`key-3${color}`} color={color} variant="text">
                                                <i className={`fa-brands text-lg  fa-${name}`} />
                                            </IconButton>
                                        ))}
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="duvidas" className="bg-tech-60 py-10 pb-20">
                <div className="container mx-auto">
                    <CardSpeaker/>
                    {/* <DoubtCard /> */}
                    {/* <div className="card">
                        <h1>
                            card
                        </h1>
                    </div> */}
                </div>

            </section>

            <div className="bg-blue-gray-900">
                <Footer />
            </div>
        </>
    )
}

Home.defaultProps = {
    title: "CaisTech 2023",
    description:
        "Acesse nossas redes sociais.",
    socialsctech: [
        {
            color: "purple",
            name: "instagram",
            path: "https://www.instagram.com/caistechflo/",
        },
        {
            color: "red",
            name: "youtube",
            path: "https://www.youtube.com/@CaisTech/featured",
        },
    ],
}

Home.propTypes = {
    socials: PropTypes.arrayOf(PropTypes.object),
    
};

Home.displayName = "src/pages/home.jsx";

export default Home;