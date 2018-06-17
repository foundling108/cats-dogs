import React, { Component } from 'react';

import './App.css';

import DogList from './DogList.js';
import GetDog from './GetDog.js';
import Header from './Header.js';
import NameDog from './NameDog.js';
import NewDog from './NewDog.js';
import SeeAll from './SeeAll.js';

// import EditNames from './EditNames.js'

class App extends Component {
  render() {
    return (
      <div className="App-parent">
                <header>
          <Header />
        </header>
        <section className="body">
          <section className = 'Center-items'>
            <div >  
              <GetDog />
            </div>
          </section>
          <br/>
          <section className = 'Center-items' >
            <div >
              <NameDog />
            </div>
          </section>
          <section className = 'Center-items'>
          <div>
            <SeeAll />
          </div>
          </section>
          <section className = 'Center-items' >
          <div>
            <NewDog />
          </div>
          </section>
          <section className = 'DogList'>
            
              <DogList />
            
          </section>
        </section>  
      </div>
    );
  }
}

export default App;
