import React from 'react';
import s from './Main.module.scss'
import wolf from '../assets/image/nophotoshop29-800x532.png';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import {particlesOptions} from '../assets/Particles/ParticlesOptions';
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {ReactComponent as ReactIcon} from '../assets/icons/react.svg';
import {ReactComponent as ReduxIcon} from '../assets/icons/redux.svg';
import CssIcon from '../assets/icons/css.svg';
import ts from '../assets/icons/ts.svg';

export const Main = React.memo(
    () => {

        const wolfAva = {
            backgroundImage: `url(${wolf})`,
        };

        const particlesInit = async (main: any) => {
            await loadFull(main);
        };

        return (
            <div id='main' className={s.mainBlock}>
                <Particles className={s.particles}
                           id="tsparticles"
                           init={particlesInit}
                           options={particlesOptions}
                />
                <div className={s.mainContainer}>
                    <Zoom>
                        <div className={s.text}>
                            <h3><ReactTypingEffect
                                text={["Hello, I'm "]}
                                eraseDelay={10000000}
                                typingDelay={1000}
                                cursor={' '}
                            /></h3>
                            <h2>Misha Haroshko</h2>
                            <p>A <span
                                className={s.greenText}>Frontend Developer</span> From <span
                                className={s.yellowText}>Minsk&...</span>
                            </p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <Tilt className={s.parallaxEffect} tiltReverse={true}>
                            <div className={s.borderPhoto}/>
                            <div style={wolfAva} className={s.photo}>
                                <ReactIcon className={s.react} />
                                <ReduxIcon className={s.redux}/>
                                <img src={ts} className={s.ts} alt=""/>
                                {/*<img src={SassIcon} className={s.sass} alt=""/>*/}
                            </div>
                        </Tilt>
                    </Zoom>

                </div>
            </div>
        );
    }
)