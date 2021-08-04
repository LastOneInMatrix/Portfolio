import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {Main} from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./MyWorks/MyWorks";
import {DistantWorkBlock} from "./Block4/DistantWorkBlock";
import {Contacts} from "./Conntacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistantWorkBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
