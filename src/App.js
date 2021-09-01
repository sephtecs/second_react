import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
        <PersonCard class="h1" someText={"Doe, Jane"}/>
        <PersonCard someText={"Age: 45"}/>
        <PersonCard someText={"Hair Color: Black"}/>
        <br>
        </br>
        <PersonCard someText={"Smith, John"}/>
        <PersonCard someText={"Age: 88"}/>
        <PersonCard someText={"Hair Color: Brown"}/>
        <br>
        </br>
        <PersonCard someText={"Fillmore, Millard"}/>
        <PersonCard someText={"Age: 50"}/>
        <PersonCard someText={"Hair Color: Brown"}/>
        <br>
        </br>
        <PersonCard someText={"Smith, Maria"}/>
        <PersonCard someText={"Age: 62"}/>
        <PersonCard someText={"Hair Color: Brown"}/>

    </div>
);
}

export default App;
