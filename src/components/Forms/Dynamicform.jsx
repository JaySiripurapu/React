import React, { Component } from 'react'
import '../css/Dynamicform.css';

class Dynamicform extends Component {
  
  render() {
    return (
      <div className="dynamicfieldbutton">
        <button className="formbtn">Single Line Text</button>
        <button className="formbtn">Paragraph Text</button>
      </div>
    )
  }
}

export default Dynamicform
