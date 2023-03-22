export default function Link({linkSection, nome, ...props}){

    return(        
        <li >            
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <a href={linkSection} className="font-display max-w-sm font-semibold leading-tight">
                    <span className="link link-underline link-underline-black text-white cursor-pointer"> {nome} </span>
                </a>
            </div>            
        </li>
    )
} 


