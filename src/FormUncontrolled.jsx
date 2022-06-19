import React, { Component } from 'react'

class FormUncontrolled extends Component {
    constructor(props) {  
        super(props);  
        this.updateSubmit = this.updateSubmit.bind(this);  
        this.input = React.createRef();  
    }  
    updateSubmit(event) {  
        alert('Form example with uncontrolled component');  
        //event.preventDefault();  
    }  
  render() {
    return (
      <div>
            <form onSubmit={this.updateSubmit}>   
                <label>Name:  
                    <input type="text" ref={this.input} />  
                </label>  <br />
                <label>  
                    CompanyName:  
                    <input type="text" ref={this.input} />  
                </label>  <br />
                <input type="submit" value="Submit" />  
            </form>  
      </div>
    )
  }
}

export default FormUncontrolled
