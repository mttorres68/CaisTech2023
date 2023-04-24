import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ title, description, data }) {
    return (
        <Card className="rounded-2xl shadow-lg shadow-gray-500/10 bg-ctech-550 glass-effect border-2 cardFeature">
            <CardBody className="px-8 text-center">
                <IconButton                    
                    size="lg"
                    className="pointer-events-none mb-6 rounded-full bg-ctech-900 text-[#1fc47a] text-lg font-semibold font-monsserrat"
                >
                    {data}
                </IconButton>
                <Typography color="inherit" variant="h5" className="mb-2 text-gray-300 font-monsserrat" >
                    {title}
                </Typography>
                <Typography color="inherit" className="prose lg:prose-xl font-monsserrat text-blue-gray-200">
                    {description}
                </Typography>
                <span className="text-gray-600  font-monsserrat">
                    <i className="fas fa-solid fa-spinner fa-spin text-7xl text-blue-gray-50"/>
                </span>
            </CardBody>
        </Card>
    );
}


// FeatureCard.defaultProps = {
//     color: "blue",  
// };

FeatureCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.node,
};

FeatureCard.displayName = "/src/Components/layout/featureCard.jsx";

export default FeatureCard;

// color: PropTypes.oneOf([
//     "blue-gray",
//     "gray",
//     "brown",
//     "deep-orange",
//     "orange",
//     "amber",
//     "yellow",
//     "lime",
//     "light-green",
//     "green",
//     "teal",
//     "cyan",
//     "light-blue",
//     "blue",
//     "indigo",
//     "deep-purple",
//     "purple",
//     "pink",
//     "red",
// ]),