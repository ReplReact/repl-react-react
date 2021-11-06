import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import DropDown from '../DropDown/DropDown'

const selxt = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ]

const Editor = (props) => {

    let [funk, setFunk] = useState("");


    const funkChange = (e) => {
        setFunk(e);
        localStorage.setItem("Funk", e);
    };


    // Render editor
    return (
        <Segment>
            <DropDown selections={selxt}/>
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

        </Segment>
    )
}

export default Editor