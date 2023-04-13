import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children, title, titlePatrocino, titleMinicurso }) {
  return (
    <div className=" mx-auto w-full px-4 justify-start text-start ">
      <Typography variant="h1" className="mb-3 text-gray-100 originFont">
        {heading}        
      </Typography>
      <Typography variant="h2" className="mb-3 text-[#104cff] originFont text-center">
        {titlePatrocino}
      </Typography>
      <Typography variant="h1" className="mb-3 text-blue-gray-900 originFont">
        {title}
      </Typography>
      <Typography variant="h2" className="mb-3 text-[#104CFF] originFont text-center">
        {titleMinicurso}
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
