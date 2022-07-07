import React, { Component } from 'react'
// import Toggleswitch from './Toggleswitch';
import '../css/main.css'


class Dynamicfields extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: this.props.type1,
          label:'',
          placeholder:'',
          formErrors:{},
          value:'',
          errMsg:'',
          isValid: true
        };
        this.labelChange = this.labelChange.bind(this);
        this.placeholderChange = this.placeholderChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
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
      // componentDidMount(){
      //   console.log('nameComponent', this.props.type1);
      // }
      handleFormValidation(){
        const {label , placeholder } = this.state;
        let formErrors = {};
        let isFormValid = true;
        //console.log(label.length,placeholder.length);
        if(label.trim().length <= 0){
          isFormValid=false;
          formErrors["labelErr"] = "Label Name is required.";
        }else if(label.trim().length > 20){
          isFormValid=false;
          formErrors["labelErr"] = "Length of label name should be less than 20 characters";
        }
        // if(!label){
        //   isFormValid=false;
        //   formErrors["labelErr"] = "Label Name is required.";
        // }

        if(!placeholder){
          isFormValid=false;
          formErrors["placeholderErr"] = "Placeholder is required.";
        }
      this.setState({ formErrors: formErrors });    
      return isFormValid; 
      }
      
      formSubmit(e){
        //console.log(this.state);
        e.preventDefault();

        if (this.handleFormValidation()){
          this.props.parentCallback(this.state);
          this.setState({
            label:'',
            placeholder:'',
          })
        }
        console.log(this.state);
      }
  render() {
    const {labelErr, placeholderErr} = this.state.formErrors;
    return (
      <>
      <form className="form-wrapper " onSubmit={this.formSubmit}>
        <h4>Add new field</h4>
          <div className="form-wrapper-fields"> 
            <label className="form-label" >Type: {this.props.type1}</label> 
            {/* <input type={this.props.type1} className="input" value={this.props.type1}   placeholder={this.props.type1} readOnly/> */}
          </div>
          <div className="form-wrapper-fields">
            <label  className="form-label" >Label Name:</label>
            <input type="text" className={`input ${labelErr ? "error" : ""}`} value={this.state.label} onChange={this.labelChange} />
            {labelErr && <div style={{ color: "red", paddingBottom: 10 }}>{labelErr}</div>}
          </div>
          <div className="form-wrapper-fields">
            <label className="form-label">Placeholder:</label>
            <input type="text" className={`input ${placeholderErr ? "error" : ""}`} value={this.state.placeholder} onChange={this.placeholderChange}/>
            {placeholderErr && <div style={{ color: "red", paddingBottom: 10 }}>{placeholderErr}</div>}
          </div>
          {/* <div className="form-wrapper-fields">
            <Toggleswitch/>
          </div> */}
          <div className="form-wrapper-fields">
            <input type="submit"  value="ADD" className="add" onChange={this.formSubmit}/>
          </div>
      </form>

      </>
    )
  }
}

export default Dynamicfields
