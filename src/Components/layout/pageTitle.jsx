import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children, title, titlePatrocino, titleMinicurso }) {
  return (
    <div className=" mx-auto w-full px-4 justify-start text-start ">
      <Typography 
        variant="h1" 
        className="text-3xl lg:text-5xl uppercase font-monsserrat font-bold mb-3 text-gray-100"
      >
        {heading}        
      </Typography>

      <Typography 
        variant="h2" 
        className="text-xl lg:text-3xl font-monsserrat font-semibold text-justify lg:text-center mb-3 text-[#104cff]"
      >
        {titlePatrocino}
      </Typography>

      <Typography 
        variant="h1" 
        className="text-3xl lg:text-5xl uppercase font-monsserrat font-bold mb-3 text-blue-gray-50 "
      >
        {title} 
      </Typography>
      
      <Typography 
        variant="h2" 
        className="text-xl lg:text-3xl font-monsserrat font-semibold text-justify lg:text-center mb-3 text-[#104CFF] "
      >
        {titleMinicurso}
      </Typography>

      <Typography 
        variant="lead" 
        className="text-blue-gray-300 originFont"
      >
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
