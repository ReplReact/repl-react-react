import React, { useState, useEffect } from "react";

import { render } from "react-dom";

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
import { Dropdown, Grid, Image, Segment } from 'semantic-ui-react'

const themeSelxt = [
  {
    key: 'kuroir',
    text: 'Kuroir',
    value: 'kuroir',
    image: { avatar: true, src: 'https://imgr.search.brave.com/NdryNteoVLeez3mtKvIyKPGQ-ERxpzzeQA6t5PhHs54/fit/884/608/ce/1/aHR0cDovL3d3dy5h/ZHJpYW1lZGlhZ3Jv/dXAuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA2L2t1/cmlyLTEzODY2OTk3/MDktNDEwNDc5Lmpw/Zw' },
  },
  {
    key: 'github',
    text: 'Github',
    value: 'github',
    image: { avatar: true, src: 'https://imgr.search.brave.com/sKqHOIIUQ6LuCJpJ58pWXO44uMxb09MyEP7jBXd4iRs/fit/1200/1200/ce/1/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9naXRodWIvZ2l0/aHViX1BORzgwLnBu/Zw' },
  },
  {
    key: 'terminal',
    text: 'Terminal',
    value: 'terminal',
    image: { avatar: true, src: 'https://imgr.search.brave.com/AGWnbD98ezpiZGw4St3NzN6LR051g73GA0lMvmqGOAU/fit/1200/1200/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk3LzBh/L2Y0Lzk3MGFmNDZi/NTBhZWNlMmU0MjJm/ZGYyZWQ0ZWYzM2Rm/LmpwZw' },
  },
  {
    key: 'tomorrow',
    text: 'Tomorrow',
    value: 'tomorrow',
    image: { avatar: true, src: 'https://imgr.search.brave.com/NoisC3UtMxNDhq_3daHbu7oz_ztNZ2ZJK8sFa-huUeE/fit/602/361/ce/1/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy0zOGRkNjJjYzdl/OTY5YjIwMGZjMTgx/YmFmZWNmYjNlYw' },
  },
  {
    key: 'twilight',
    text: 'Twilight',
    value: 'twilight',
    image: { avatar: true, src: 'https://imgr.search.brave.com/b-wf4nahPuvajm2_1zqFHSaowUkazjj6Tj_qOabmXrA/fit/486/145/ce/1/aHR0cDovL2kuZm9u/dHMydS5jb20vdHcv/dHdpbGlnaHRfNC5w/bmc' },
  },
  {
    key: 'xcode',
    text: 'Xcode',
    value: 'xcode',
    image: { avatar: true, src: 'https://imgr.search.brave.com/MthhGkloAOpVr-BOLnmonFT9JENvU0omgv4xtD370WM/fit/1024/1024/ce/1/aHR0cHM6Ly8zZC5i/ay50dWRlbGZ0Lm5s/L2tlbi9pbWcvYmxv/Zy94Y29kZS1sb2dv/LmpwZw' },
  },
  {
    key: 'solarized_dark',
    text: 'Solarized Dark',
    value: 'solarized_dark',
    image: { avatar: true, src: 'https://imgr.search.brave.com/qanNfdxzi9JOxDceuiEk4W--Hl9hd81j5GYPEgUNF7A/fit/1200/1080/ce/1/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS82OS84/OS9pdFZHdTUucG5n' },
  },
  {
    key: 'solarized_light',
    text: 'Solarized Light',
    value: 'solarized_light',
    image: { avatar: true, src: 'https://imgr.search.brave.com/ASql1imkZIUfrIr3nOB2mYKVqs1blHnms5HycIJ21v4/fit/633/670/ce/1/aHR0cHM6Ly9jYW1v/LnFpaXRhdXNlcmNv/bnRlbnQuY29tLzdm/MDg5Zjk4YTE0MTEw/OWQxOTM0YTRiMTVl/NmJiYWZiOWVkNzIw/N2UvNjg3NDc0NzA3/MzNhMmYyZjZjNjgz/MzJlNjc2ZjZmNjc2/YzY1NzU3MzY1NzI2/MzZmNmU3NDY1NmU3/NDJlNjM2ZjZkMmYy/ZDZlNTg3NDQ4NDE2/NjQzN2EzOTQ1NTUy/ZjU1NWYzODczMzE2/OTM4NzI3MjU2NDky/ZjQxNDE0MTQxNDE0/MTQxNDE0MTQyMzAy/ZjQ3NzE2NjY3MzQ1/NzVmNzQzNzZmNmIy/Zjc3MzYzMzMzMmQ2/ODM2MzczMDJkNmU2/ZjJmNTM2ZjZjNjE3/MjY5N2E2NTY0MmU3/MDZlNjc' },
  },
]
const fontSizeSelxt = [
  {
    key: '11',
    text: '11',
    value: '11',
  },
  {
    key: '22',
    text: '22',
    value: '22',
  },
  {
    key: '33',
    text: '33',
    value: '33',
  },
  {
    key: '44',
    text: '44',
    value: '44',
  },
  {
    key: '55',
    text: '55',
    value: '55',
  },
  {
    key: '66',
    text: '66',
    value: '66',
  },
  {
    key: '77',
    text: '77',
    value: '77',
  },
  {
    key: '88',
    text: '88',
    value: '88',
  },
  {
    key: '99',
    text: '99',
    value: '99',
  },
  {
    key: '111',
    text: '111',
    value: '111',
  },
]



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

    </Segment>
  )
}

export default Editor