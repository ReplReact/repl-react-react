import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor-React-Ace/Editor-React-Ace'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header } from 'semantic-ui-react'

function App() {

  return (
    <div className="App">
      <Container fluid>
        <Editor />
      </Container>
    </div>
  );
}

export default App;
