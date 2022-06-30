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
                                 desc={`Project Description: huge platform which helps people training memory 

Positions: Software Engineer 

Overall Team Size: 1 PM, 1 Back-end developer, 4 Front-end-developer

Responsibilities: Functional development

Tools & Technologies: React, Redux, TypeScript, HTML, CSS, Figma, Git, Rest API


Test account
email: qwerty1044@mail.ru
password: 12345678`}
                                 url='https://chshrct.github.io/cards/'/>
                    </Fade>
                    <Fade bottom>
                        <Project title={'To Do List'}
                                 style={todolist}
                                 desc={`Project Description: simple tool to organise everything

Positions: Junior Software Engineer 

Overall Team Size: 1 PM, 1 developer

Responsibilities: Functional development

Tools & Technologies: React, Redux Toolkit, TypeScript, Unit Tests, StoryBook, HTML, CSS, Git, Rest API


Test account
email: free@samuraijs.com
password: free`}
                                 url='https://mihagp800.github.io/todoList/'/>
                    </Fade>

                    <Fade right>
                        <Project title={'Social Network'}
                                 style={socialNetwork}
                                 desc={`Project Description: an online platform which people use to build social networks

Positions: Junior Software Engineer 

Overall Team Size: 1 PM, 1 developer

Responsibilities: Functional development

Tools & Technologies: React, Redux, TypeScript, HTML, CSS, Git, Rest API


Test account
email: free@samuraijs.com
password: free`}
                                 url='https://mihagp800.github.io/sn-ts/'/>
                    </Fade>
                </div>

            </div>
        </div>
    );
}