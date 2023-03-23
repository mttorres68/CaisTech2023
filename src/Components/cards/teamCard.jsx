import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
    return (
        <Card color="transparent" shadow={false} className="text-center">
            <Avatar
                src={img}
                alt={name}
                size="xxl"
                className="h-full w-full shadow-lg shadow-gray-500/25"
            />
            <Typography variant="h5" color="white" className="mt-6 mb-1">
                {name}
            </Typography>
            {position && (
                <Typography className="font-normal text-blue-gray-300">
                {position}
                </Typography>
            )}
            {socials && <div className="mx-auto mt-5">{socials}</div>}
        </Card>
    );
    }

TeamCard.defaultProps = {
    position: "",
    socials: null,
};

TeamCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    socials: PropTypes.node,
};

TeamCard.displayName = "/src/Components/layout/teamCard.jsx";

export default TeamCard;
