import React, { Component } from 'react';
import './App.css';
import TimersDashBoard from './Components/TimersDashBoard';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Welcome to React</h2>
        </div>
        <TimersDashBoard />
      </div>
    );
  }
}

export default App;
