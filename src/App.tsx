import React from 'react';
import './App.css';
import {Header} from './1-Header/Header';
import {Main} from './2-Main/Main';
import {Skills} from './3-Skills/Skills';
import {Projects} from './4-Projects/Projects';
import {Contacts} from './5-Contacts/Contacts';
import {Footer} from './6-Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default App;
