import React, { Component } from 'react';
import './App.css';
import TextFieldExample from './TextFieldExample.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <p className="App-intro">
          Enter in a patient e-mail to retrieve associated heart rate measurements:
          </p>

          <TextFieldExample />


      </div>
    );
  }
}

export default App;
