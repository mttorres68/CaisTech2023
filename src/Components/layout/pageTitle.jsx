import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children, title }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12 ">
      <Typography variant="h2" className="mb-3 text-gray-100 originFont">
        {heading}        
      </Typography>
      <Typography variant="h2" className="mb-3 text-blue-gray-900 originFont">
        {title}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-300 originFont">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,

};

PageTitle.displayName = "/src/Components/layout/pageTitle.jsx";


export default PageTitle;
