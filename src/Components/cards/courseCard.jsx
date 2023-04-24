import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import PropTypes from "prop-types";


export function CourseCard({img, autor, title, descricao, dia, local, position}){

    return(
    <Card  className="bg-[#1f1135] shadow-gray-600 transition ease-in-out hover:-translate-y-5 hover:scale-100 duration-300 border-2 ">
            <CardHeader className="relative h-72 -bottom-8 shadow shadow-[#323232c8]">
                <img
                    src={img}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-justify">
                <div className="-top-[-250px] bg-[#1F1135] rounded-md w-[25vh] pb-2 pl-2 pt-1 opacity-80 absolute h-10">
                    <span className="text-white text-2xl font-semibold ">
                        {autor}
                        {/* absolute -top-[-28vh] sm:-top-[-250px] md:-top-[-250px] lg:-top-[-250px] */}
                    </span>
                </div>
                <Typography variant="h5" className="mt-4 text-[#1fc47a] uppercase">
                    {title}
                </Typography>                
                <Typography variant="h6" className="text-white">
                    {descricao}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3 text-gray-300">
                {dia &&
                    <div className="flex gap-1">                        
                        {dia}
                    </div>
                }
                <div className="flex">
                    <i className="fas fa-map-marker-alt fa-sm fa-flip mt-[9px]" />
                    {local}
                </div>
            </CardFooter>
        </Card>
    )
}



CourseCard.propTypes = {
    img: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    dia: PropTypes.node,
}

CourseCard.displayName = "/src/Components/layout/courseCard.jsx";

export default CourseCard;