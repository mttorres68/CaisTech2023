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
import {CourseCard, FeatureCard, TeamCard, VideoCard, SpeakersCard} from "@/Components/cards";
import {featuresData,teamData, courseData } from "@/data"
import {Carrosel, Footer, PageTitle,} from "@/Components/layout"
import PropTypes from "prop-types";
import { speakersData } from "@/data/speakersData";



// <div className="absolute top-0 h-full w-full bg-[url(https://i.imgur.com/LBn6IWR.png)] bg-cover bg-center" >

export function Home({socials}){


    return(
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            <div className="absolute top-0 h-full w-full bg-cover bg-center" >
                <VideoCard/>
                
            </div>
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
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

            <section id="programacao" className="-mt-32 bg-blue-gray-200 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map(({ color, title, icon, description, data }) => (
                            <FeatureCard
                                key={data}
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
                                {socials.map(({ color, name, path }) => (
                                    <a
                                        key={name}
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

            <section id="palestra" className="px-4 pt-20 pb-20">
                <div  className="container mx-auto justify-start">
                    <PageTitle heading="Palestrantes Confirmados">
                        <span className="text-gray-600  originFont">
                            <i class="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-50"/>
                        </span>
                    </PageTitle>
                    
                    <div  className="mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-1 xl:grid-cols-1">
                        {speakersData.map(({img,name, tema,redesSocial, curriculo, index}) =>(
                            <SpeakersCard
                                key={index}
                                img={img}
                                name={name}
                                tema={tema}
                                curriculo={
                                    <div>
                                        {curriculo.map(({formacao}) => (
                                            <li>
                                                {formacao}
                                            </li>
                                        ))}
                                    </div>
                                }
                                redesSocial={
                                    <div className="flex items-center gap-2">
                                        {redesSocial.map(({color, name, path, social, index}) => (
                                            <a 
                                                key={index}
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

            <section id="minicursos"  className=" bg-blue-gray-200 py-10 pb-20">
                <div className="container mx-auto">
                    <PageTitle title="Minicursos/Oficinas">
                        <span className="text-gray-600  originFont">
                            {/* QUEM IRÁ MINISTRAR */}
                            <i class="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-900"/>
                        </span>
                    </PageTitle>
                    <div className="mt-12 grid grid-cols-1 gap-12 gap-x-16 md:grid-cols-2 xl:grid-cols-3">
                        {courseData.map(({img, autor, title, descricao, dia, local, index}) => (
                            <CourseCard 
                                key={index}
                                img={img}
                                autor={autor}
                                title={title}
                                descricao={descricao}
                                local={local}
                                dia={
                                    <div>
                                        {dia.map(({dia, index}) => (
                                            <span key={index} className="flex gap-1">
                                                <i class="fas fa-duotone fa-calendar-days mt-[2px]"/>
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

            <section  id="patrocinadores" className="px-4 pt-20 pb-20">
                <div  className="container mx-auto">
                    <PageTitle heading="Patrocinadores">
                        <span className="text-gray-600  originFont">
                                <i class="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-50"/>
                        </span>
                    </PageTitle>
                    <div  className="hidden mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {teamData.map(({ img, name, position, socials, index }) => (
                            <TeamCard
                                key={index}
                                img={img}
                                name={name}
                                position={position}
                                socials={
                                    <div className="flex items-center gap-2">
                                        {socials.map(({ color, name, index }) => (
                                            <IconButton key={index} color={color} variant="text">
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
    socials: [
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