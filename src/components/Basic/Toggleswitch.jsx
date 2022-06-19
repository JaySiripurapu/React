import React, { Component } from 'react'
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch'
class Toggleswitch extends Component {
  render() {
    return (
      <div>
        <label style={{fontWeight:'bold', margin:'5px'}}>Required</label>
        <FormControlLabel  control={<Switch defaultChecked color="success"/>} />
      </div>
    )
  }
}

export default Toggleswitch
