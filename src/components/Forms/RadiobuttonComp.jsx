import React, { Component } from 'react'

import '../css/main.css'

class RadiobuttonComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.type1,
            label:'',
            formErrors: {},
            radiobuttonoption : []
        };
        this.labelChange = this.labelChange.bind(this);
        //this.placeholderChange = this.placeholderChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.enterOptions = this.enterOptions.bind(this);
    }
   
      labelChange(e){
        this.setState(
          {label:e.target.value}
        )
      }
      
    // handleChange = (e) => {
    //     if (["title", "value"].includes(e.target.name)) {
    //     let radiobuttonoption = [...this.state.radiobuttonoption]
    //     radiobuttonoption[e.target.dataset.id][e.target.name] = e.target.value;
    //     } else {
    //     this.setState({ [e.target.name]: e.target.value })
    //     }
    //     }
    addRow(e){
        this.setState(({
            radiobuttonoption: [...this.state.radiobuttonoption,'']
        })) 
        //console.log(this.state.dropdownoption);
        //console.log(this.state.radiobuttonoption);
    }
    enterOptions(i,e){
      let radiobuttonoption = [...this.state.radiobuttonoption]
      radiobuttonoption[i] = e.target.value;
      this.setState({radiobuttonoption})
      //console.log(this.state.radiobuttonoption);
    }
    
    handleFormValidation(){
      const {label} = this.state;
      let formErrors = {};
      let isValid = true;
      if(!label){
         isValid=false;
        formErrors["labelErr"] = "Label Name is required.";
      }
      console.log(this.state.radiobuttonoption.length);

      if(this.state.radiobuttonoption.length === 0){
        isValid=false;
        formErrors["addOptionsErr"] = "Please add atleast one option.";
      }else if(this.state.radiobuttonoption.length > 0){
        for (let i=0; i < this.state.radiobuttonoption.length; i++){
          console.log(this.state.radiobuttonoption[i]);
          if(!(this.state.radiobuttonoption[i])){
            isValid=false;
            formErrors["radiobtnErr"] = "Radio button option value is required.";
          }
        }
      }
    this.setState({ formErrors: formErrors });    
    return isValid; 
    }
    formSubmit(e){
        console.log(this.state);
        e.preventDefault();
        this.props.addNewData(this.state);
        this.setState({
            type:'',
            label:'',
            radiobuttonoption:[]
          })
          console.log(this.state);
      }
  render() {
    const {labelErr , radiobtnErr, addOptionsErr} = this.state.formErrors;
    return (
    <div>
        <form className="form-wrapper " onSubmit={this.formSubmit} >
        <h4>Add new field</h4>
          <div className="form-wrapper-fields"> 
            <label  className="form-label">Type: {this.props.type1}</label>           
            {/* <input type={this.props.type1} className="input" value={this.props.type1}  placeholder={this.props.type1} readOnly/> */}
          </div>
          <div className="form-wrapper-fields">
            <label className="form-label" >Label:</label>
              <input type="text" className={`input ${labelErr ? "error" : ""}`} value={this.state.label}  onChange={this.labelChange} />
              {labelErr && <div style={{ color: "red", paddingBottom: 10 }}>{labelErr}</div>}
          </div>
          
          {/* <div className="form-wrapper-fields">
            <Toggleswitch/>
          </div> */}
            <div className=" form-wrapper-fields dropdownvalues">
                <p className="">Add required no of options and enter values</p>
                {this.state.radiobuttonoption.map((val,i) => (
                    <>
                        <div key={i}>
                            <label className="form-label">Value:
                                <input type="text" className={`input ${radiobtnErr ? "error" : ""}`} value={val||''} onChange={this.enterOptions.bind(this,i)} style= {{ margin: '5px'}} placeholder="Enter option" />
                                {radiobtnErr && <div style={{ color: "red", paddingBottom: 10 }}>{radiobtnErr}</div>}
                            </label> 
                        </div>
                        
                    </>
                ))}
              <div>
                <button type="button" className={`addoptionbtn ${addOptionsErr ? "error" : ""}`}  onClick= {this.addRow}  >Add Options</button>
                {addOptionsErr && <div style={{ color: "red", paddingBottom: 10 }}>{addOptionsErr}</div>}
              </div>
            </div>
            <div className="form-wrapper-fields">
               <input type="submit"  value="ADD" className="add" onChange={this.formSubmit}/>
          </div>

        </form>
    </div>
    )
  }
}

export default RadiobuttonComp
