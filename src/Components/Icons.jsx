export const Icons = ({Icon, onclick,...props}) => {
    return(
        
            <svg 
                className="w-6 h-6 cursor-pointer text-cyan-50 flex  md:hidden hover:text-[#1fc47a]"            
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 20 20" 
                strokeWidth="2" 
                stroke="currentColor" 
                onClick={onclick}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d={Icon}
                />
            </svg>
        
    )
}

export const IconMenu = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 

export const IconClose = "M6 18L18 6M6 6l12 12"