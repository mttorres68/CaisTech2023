export default function Link({linkSection, nome, ...props}){

    return(        
        <li >
            <a className="hover:text-[#1fc47a]" href={linkSection}>{nome}</a>
        </li>
    )
}