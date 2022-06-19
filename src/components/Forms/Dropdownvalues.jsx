import React from "react";

const Dropdownlist = (props) => {
    return (
        props.dropdownvalues.map(() => {
            return(
                <>
                    <input type="text" style= {{ marginRight: '5px'}} placeholder="Enter option" />
                    <input type="text" style= {{ marginRight: '10px'}} placeholder="Enter Value" />
                    <button type="button" onClick= {this.props.addRow}>Add</button>
                </>
                
            )
            
        })
            
    )
}

export default Dropdownlist