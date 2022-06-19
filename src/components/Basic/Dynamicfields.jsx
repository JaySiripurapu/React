import React, { Component } from 'react'
import Toggleswitch from './Toggleswitch';
import '../css/main.css'

class Dynamicfields extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: '',
          label:'',
          placeholder:''
        };
        this.typeChange = this.typeChange.bind(this);
        this.labelChange = this.labelChange.bind(this);
        this.placeholderChange = this.placeholderChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
      }
      typeChange(e){
        this.setState(
          {
            type:e.target.value
          }
        )
      }
      labelChange(e){
        this.setState(
          {label:e.target.value}
        )
      }
      placeholderChange(e){
        this.setState(
          {placeholder:e.target.value}
        )
      }
      formSubmit(e){
        console.log(this.state);
        e.preventDefault();
        
      }
  render() {
    return (
      <form className="form-wrapper col-lg-9" onSubmit={this.formSubmit}>
          <div className="form-wrapper-fields"> 
            <label style={{ fontWeight:'bold'}} value={this.state.type} onChange={this.typeChange}>Type</label> <br />
            <input type="text" />
          </div><br/>
          <div className="form-wrapper-fields">
            <label style={{ fontWeight:'bold'}} value={this.state.label} onChange={this.labelChange}>Label</label><br />
            <input type="text" />
          </div><br />
          <div className="form-wrapper-fields">
            <label style={{ fontWeight:'bold'}} value={this.state.placeholder} onChange={this.placeholderChange}>Placeholder</label><br />
            <input type="text" />
          </div>
          <div className="form-wrapper-fields">
            <Toggleswitch/>
          </div>
          <div>
            <input type="submit" value="ADD" onClick={this.handleCloseModal}/>
          </div>
      </form>
    )
  }
}

export default Dynamicfields
