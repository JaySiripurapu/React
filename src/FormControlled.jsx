import React, { Component } from 'react'

class FormControlled extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.ChangeHandler = this.ChangeHandler.bind(this);
    }
    ChangeHandler (e){
        this.setState( {
            value : e.target.value
        })
    }
    SubmitHandler (){
        alert("Form example with controlled component");
    }
  render(){
    return (
      <div>
          <form onSubmit = { this.SubmitHandler} >
              <label >Full Name:
                  <input type="text" value={this.state.value}  onChange={ this.ChangeHandler } placeholder="Enter your name here...." />
              </label><br />
              <input type="submit" value = "Submit by clicking here.. " />
          </form>
      </div>
    )
  }
}

export default FormControlled;
