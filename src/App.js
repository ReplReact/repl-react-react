import React from 'react';
import './App.css';
import './assets/util.css';
import Editor from './components/Editor-React-Ace/Editor-React-Ace'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header } from 'semantic-ui-react'

function App() {

  return (
      <Container className="App" fluid>
        <Editor />
      </Container>
  );
}

export default App;
