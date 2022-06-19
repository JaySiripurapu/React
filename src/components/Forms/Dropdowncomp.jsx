import React, { Component } from 'react'
import Dynamicfields from '../Basic/Dynamicfields'

class Dropdowncomp extends Component {
    constructor(props){
        super()
        this.state = {
            dropdownoptions : [{  }]
        }
        this.addRow = this.addRow.bind(this);
    }
    // handleChange = (e) => {
    //     if (["title", "value"].includes(e.target.name)) {
    //     let dropdownoptions = [...this.state.dropdownoptions]
    //     dropdownoptions[e.target.dataset.id][e.target.name] = e.target.value;
    //     } else {
    //     this.setState({ [e.target.name]: e.target.value })
    //     }
    //     }
    addRow(e){
        this.setState(({
            dropdownoptions: [...this.state.dropdownoptions,{}]
        })) 
    }
  render() {
    return (
      <div>
            <Dynamicfields />
            <div className="dropdownvalues" style={{marginTop:'10px'}}>
                <p>Enter Dropdown title and values</p>
                {this.state.dropdownoptions.map(() => (
                    <>
                        <div>
                            <label htmlFor="">Value:</label>
                            <input type="text" style= {{ marginRight: '5px'}} placeholder="Enter option" />
                        </div>
                        
                    </>
                ))}
            <button type="button" onClick= {this.addRow}>Add</button>
            {/* <label htmlFor="">Title:</label>
            <input type="text" style= {{ marginRight: '5px'}} placeholder="Enter option" />
            <label htmlFor="">Value:</label>
            <input type="text" style= {{ marginRight: '10px'}} placeholder="Enter Value" />
            <button type="button" onClick= {this.addRow}>Add</button> */}
            </div>
      </div>
    )
  }
}

export default Dropdowncomp
