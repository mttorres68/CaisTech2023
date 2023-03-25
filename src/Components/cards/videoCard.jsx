
export function VideoCard() {

    return(
        <>
            <section className="bg-video">
                <div className="container mx-auto">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                >
                    <source 
                        src="public/video/animacaoCaisTech.mp4" 
                        type="video/mp4" 
                    />
                </video>
                </div>
            </section>
        </>
    )
}
