import React from 'react';
import './App.css';
import Homepage from "./containers/Homepage";

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Homepage/>
        </header>
      </div>
    );
  }
}

export default App;
