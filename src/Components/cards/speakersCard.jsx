import { Avatar, Card, CardBody, CardFooter, CardHeader, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";


export function SpeakersCard({img, name, tema, curriculo, redesSocial}){

    return(
        <div className="rounded-md overflow-hidden shadow-gray-600 transition ease-in-out hover:-translate-y-5 hover:scale-100 duration-300 cursor-default">
            <div className=" sm:flex md:flex lg:flex xl:flex justify-center text-blue-gray-50">
                <img
                    className="items-center ml-8 h-80 w-72 md:w-[20rem] lg:w-[20rem] rounded-md"
                    src={img}
                    alt=""
                />
                
                <div className="ml-4">
                    <span className="text-blue-gray-50 text-2xl font-bold">
                        {name}
                    </span>
                    <h3 className="text-[#1fc47a] text-xl text-justify uppercase font-medium">{tema}</h3>
                    {curriculo && <ul className="ml-4 text-lg text-justify list-disc space-y-2">{curriculo} </ul>}
                    
                    {redesSocial && 
                        <div className="mx-auto relative  md:top-[2rem] lg:top-[10vh] xl:top-[1vh]">
                            {redesSocial}                        
                    </div>}
                </div>
                
            </div>
            
        </div>
    );
}

SpeakersCard.prototype = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tema: PropTypes.string.isRequired,
    curriculo: PropTypes.node,
    redesSocial: PropTypes.node,
}

SpeakersCard.displayName = "/src/Components/layout/SpeakersCard.jsx";

export default SpeakersCard;