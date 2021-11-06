import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/react-ace/Ace'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Editor/>
      </header>
    </div>
  );
}

export default App;
