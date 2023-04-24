import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    image:"https://i.imgur.com/LDYHZBb.png",
                    
                },
                fullScreen:{
                    enable: true,
                    zIndex: -1,
                },
                style: {
                    position: "absolute"
                },
                
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                            parallax: 10,
                        },
                        resize:{
                            enable: true,
                            delay: 4,
                        } 
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            quantity: 4,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.9,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "polygon",
                        stroke: {
                            width: 1,
                            color: "#ffffff"
                        },
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                
                },
                
                detectRetina: true,
                
            }}
        />
    );
};

export default ParticleBackground;