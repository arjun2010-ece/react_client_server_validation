import React, { Component } from 'react';
import GameForm from './GameForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="ui container">
         <GameForm />
      </div>
    );
  }
}

export default App;
