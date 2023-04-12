import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import PropTypes from "prop-types";


export function CourseCard({img, autor, title, descricao, dia, local, position}){

    return(
    <Card  className="bg-[#1f1135] shadow-gray-600 transition ease-in-out hover:-translate-y-5 hover:scale-100 duration-300">
            <CardHeader color="" className="relative h-72 -bottom-8 shadow shadow-[#323232c8]">
                <img
                    src={img}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-justify">
                <h1 className="text-white text-2xl font-semibold absolute -top-[-28vh] sm:-top-[-250px] md:-top-[-250px] lg:-top-[-250px]">
                    {autor}
                </h1>
                <Typography variant="h5" className="mt-4 text-[#1fc47a]">
                    {title}
                </Typography>                
                <Typography className="text-white">
                    {descricao}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3 text-gray-300">
                <Typography variant="small" className="flex gap-1">
                    <i class="fas fa-duotone fa-calendar-days mt-[2px]"/>
                    {dia}
                </Typography>                
                <Typography variant="small" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm fa-flip mt-[9px]" />
                    {local}
                </Typography>
            </CardFooter>
        </Card>
    )
}



CourseCard.propTypes = {
    img: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    dia: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
}

CourseCard.displayName = "/src/Components/layout/courseCard.jsx";

export default CourseCard;