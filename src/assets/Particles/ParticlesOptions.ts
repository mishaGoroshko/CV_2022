import {ISourceOptions} from 'tsparticles-engine';

export const particlesOptions: ISourceOptions = {
    // background: {
    //     color: {
    //         value: "#0d47a1",
    //     },
    // },
    fullScreen: {
        enable: false,
    },
    fpsLimit: 120,
        interactivity: {
        events: {
            onClick: {
                enable: true,
                    mode: "push",
            },
            // onHover: {
            //     enable: true,
            //     mode: "repulse",
            // },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 50,
                    duration: 0.4,
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
                opacity: 0.1,
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
                speed: 0.5,
                straight: false,
        },
        number: {
            density: {
                enable: true,
                    area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 3,
        },
        shape: {
            type: "purple",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}