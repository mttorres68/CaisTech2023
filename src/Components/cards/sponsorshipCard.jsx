import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function SponsorshipCard({ img, name, position, socials, nameColor }) {
    return (
        <Card color="transparent" shadow={false} className="text-center">
            <Avatar
                src={img}
                alt={name}
                size="xxl"
                className="h-full w-full shadow-lg shadow-gray-500/25 originFont"
            />
            <Typography variant="h5" color="white" className="mt-6 mb-1 originFont">
                {name}
            </Typography>
            {position && (
                <Typography color={nameColor} className="font-normal originFont">
                {position}
                </Typography>
            )}
            {socials && <div className="mx-auto mt-5">{socials}</div>}
        </Card>
    );
    }

SponsorshipCard.defaultProps = {
    position: "",
    socials: null,
};

SponsorshipCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    socials: PropTypes.node,
};

SponsorshipCard.displayName = "/src/Components/layout/SponsorshipCard.jsx";

export default SponsorshipCard;
