export function CardSpeaker () {

    const sections = [
        {
            title: "Seção 1",
            content: "Conteúdo da Seção 1",
            bgColor: "bg-gray-100",
            textColor: "text-gray-800",
            },
            {
            title: "Seção 2",
            content: "Conteúdo da Seção 2",
            bgColor: "bg-gray-800",
            textColor: "text-gray-100",
        },
    ];

    return(
        <>
            <div>   
                {sections.map((section, index) => (
                    <div
                    key={index}
                    className={`flex flex-col justify-center items-center ${
                        index % 2 === 0 ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
                    }`}
                    >
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    <p className="text-lg">{section.content}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

CardSpeaker.displayName = "/src/Components/card/speakCard.jsx";


export default CardSpeaker;