import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";


const Editor = () => {
    
  let [funk, setFunk] = useState("");


    const funkChange = (e) => {
        setFunk(e);
        localStorage.setItem("Funk", e);
        console.log(funk)
      };

        // Render editor
        return(
            <AceEditor
            id='funktion'
            placeholder="print('hello world')"
            type='textarea'
            name='funktion'
            showGutter={true}
            mode="javascript"
            theme="github"
            onChange={funkChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            />
            )
}

export default Editor