import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const DropdownExampleSelection = (props) => (
  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={props.selections}
  />
)

export default DropdownExampleSelection