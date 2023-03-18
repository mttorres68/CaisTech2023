export default function Link({linkSection, nome, ...props}){

    return(        
        <li >
            <a className="hover:text-[#1fc47a] font-semibold" href={linkSection}>{nome}</a>
        </li>
    )
}