import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Conteiner.module.css';
import {Project} from './Project/Project';


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project title={'To Do List'} desc={'Simple tool to organise everything'}/>
                    <Project title={'Social Network'} desc={'an online platform which people use to build social networks'}/>
                </div>
            </div>
        </div>
    );
}