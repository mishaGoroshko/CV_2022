import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Conteiner.module.css';
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>

                <Title text={'my projects'}/>

                <div className={s.projects}>
                    <Project title={'To Do List'} desc={'Simple tool to organise everything'}/>
                    <Project title={'Social Network'} desc={'an online platform which people use to build social networks'}/>
                </div>

            </div>
        </div>
    );
}