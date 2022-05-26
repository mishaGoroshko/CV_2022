import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Conteiner.module.css';
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import socNet from '../assets/image/socialNetwork.jpg'
import todo from '../assets/image/todolist.png'


export const Projects = () => {
    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${socNet})`,
    };

    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todo})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>

                <Title title1={'Portfolio'}
                       title2={'My Amazing Works'}/>

                <div className={s.projects}>
                    <Project title={'To Do List'}
                             style={todolist}
                             desc={'Simple tool to organise everything'}/>
                    <Project title={'Social Network'}
                             style={socialNetwork}
                             desc={'an online platform which people use to build social networks'}/>
                </div>

            </div>
        </div>
    );
}