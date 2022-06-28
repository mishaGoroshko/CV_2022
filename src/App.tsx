import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Header} from './1-Header/Header';
import {Main} from './2-Main/Main';
import {Skills} from './3-Skills/Skills';
import {Projects} from './4-Projects/Projects';
import {Contacts} from './5-Contacts/Contacts';
import {Footer} from './6-Footer/Footer';

function App() {
    const [isScrolling, setIsScrolling] = useState(false)

    const myRef = useRef<any>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsScrolling(!entries[0].isIntersecting)
        });
        observer.observe(myRef.current);
    }, []);
    return (
        <div className="App">
            <div ref={myRef}></div>
            <Header isScrolling={isScrolling}/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default App;
