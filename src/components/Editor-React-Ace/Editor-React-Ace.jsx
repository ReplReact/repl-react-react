import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import Posty from "../../utils/Posty";

//Ace imports---------------------------------------------------------------
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

// ace theme imports
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

//end ace inports-------------------------------------------------------------
import { Button, Dropdown, Grid, Image, Segment } from 'semantic-ui-react'

import themeSelxt from '../../dataHolders/themeSelxt'
import fontSizeSelxt from '../../dataHolders/fontSizeSelxt'




const Editor = (props) => {



  const [funk, setFunk] = useState("");
  const [themeState, setthemeState] = useState("");
  const [fontSize, setFontSize] = useState(44);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  
 

  const changyTheme = (e, data) => {
    console.log(data);
    setthemeState(data.value)
    localStorage.setItem("currentTheme", data.value);
  }

  const changyFontSize = (e, data) => {
    console.log(data);
    setFontSize(data.value)
    localStorage.setItem("FontSize", data.value);
  }


  const funkChange = (e) => {
    setFunk(e);
    localStorage.setItem("Funk", e);
  };

  const clickButt = () =>{
    Posty({jsx:funk})
  }
  


  useEffect(() => {
    setHeight(window.innerHeight-450)
    setWidth(window.innerWidth)
    //if the theme is saved in local storage, then get items and set
    if (localStorage.getItem("currentTheme")) {
      let theme = localStorage.getItem("currentTheme");
      let fontSizez = localStorage.getItem("FontSize");

      setthemeState(theme);
      setFontSize(fontSizez);
    } else {
      setthemeState("terminal");
      setFontSize(44);
    }
  },[])
  // Render editor
  return (
    <Segment>
      <Grid columns={3} divided>
        <Grid.Column className='m-tiny'>
          <Dropdown
            onChange={changyTheme}
            placeholder={themeState}
            fluid
            selection
            options={themeSelxt}
          />

        </Grid.Column>
        <Grid.Column className='m-tiny'>
          <Dropdown
            onChange={changyFontSize}
            placeholder={fontSize}
            fluid
            selection
            options={fontSizeSelxt}
          />
        </Grid.Column>
      </Grid>

      <AceEditor
        height={`${height}px`}
        width={`${width}px`}
        setOptions={{ useWorker: false }}
        id='funktion'
        placeholder="console.log('hello world')"
        fontSize={parseInt(fontSize)}
        type='textarea'
        name='funktion'
        showGutter={true}
        mode="javascript"
        theme={themeState}
        onChange={funkChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      <Button onClick={clickButt} >Save</Button>

    </Segment>
  )
}

export default Editor