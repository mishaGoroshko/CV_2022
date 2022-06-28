import React from 'react';
import s from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import socNet from '../assets/image/socialNetwork.jpg'
import todo from '../assets/image/todolist.png'
import card from '../assets/image/card.png'
import Fade from 'react-reveal/Fade';


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socNet})`,
    };

    const todolist = {
        backgroundImage: `url(${todo})`,
    };

    const memoryCard = {
        backgroundImage: `url(${card})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div id='projects' className={s.projectsContainer}>

                <Title title1={'Portfolio'}
                       title2={'My Amazing Works'}/>

                <div className={s.projects}>
                    <Fade left>
                        <Project title={'Memory cards'}
                                 style={memoryCard}
                                 desc={'command project with my colleagues'}
                                 url='https://chshrct.github.io/cards/'/>
                    </Fade>
                    <Fade bottom>
                        <Project title={'To Do List'}
                                 style={todolist}
                                 desc={'simple tool to organise everything'}
                                 url='https://mihagp800.github.io/todoList/'/>
                    </Fade>

                    <Fade right>
                        <Project title={'Social Network'}
                                 style={socialNetwork}
                                 desc={'an online platform which people use to build social networks'}
                                 url='https://mihagp800.github.io/sn-ts/'/>
                    </Fade>
                </div>

            </div>
        </div>
    );
}