import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description, data }) {
    return (
        <Card className="rounded-2xl shadow-lg shadow-gray-500/10 bg-[#17031f] opacity-[99%]">
            <CardBody className="px-8 text-center">
                <IconButton
                    variant="gradient"
                    size="lg"
                    className="pointer-events-none mb-6 rounded-full"
                >
                    {data}
                </IconButton>
                <Typography variant="h5" className="mb-2 text-white" color="blue-gray">
                    {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-200">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}

FeatureCard.defaultProps = {
    color: "blue",  
};

FeatureCard.propTypes = {
    color: PropTypes.oneOf([
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/Components/layout/featureCard.jsx";

export default FeatureCard;
