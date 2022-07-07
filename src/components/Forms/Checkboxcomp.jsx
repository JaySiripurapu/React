import React, { Component } from 'react'

import '../css/main.css'

class Checkboxcomp extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.type1,
            label:'',
            formErrors: {},
            checkboxoptions : []
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
      
    addRow(e){
        this.setState(({
            checkboxoptions: [...this.state.checkboxoptions,'']
        })) 
        //console.log(this.state.dropdownoption);
        //console.log(this.state.checkboxoptions);
    }
    enterOptions(i,e){
      let checkboxoptions = [...this.state.checkboxoptions]
      checkboxoptions[i] = e.target.value;
      this.setState({checkboxoptions})
      //console.log(this.state.checkboxoptions);
    }
    
    handleFormValidation(){
      const {label} = this.state;
      let formErrors = {};
      let isValid = true;
      if(!label){
         isValid=false;
        formErrors["labelErr"] = "Label Name is required.";
      }
      console.log(this.state.checkboxoptions.length);

      if(this.state.checkboxoptions.length === 0){
        isValid=false;
        formErrors["addOptionsErr"] = "Please add atleast one option.";
      }else if(this.state.checkboxoptions.length > 0){
        for (let i=0; i < this.state.checkboxoptions.length; i++){
          console.log(this.state.checkboxoptions[i]);
          if(!(this.state.checkboxoptions[i])){
            isValid=false;
            formErrors["checkBoxoptionErr"] = "Checkbox option value is required.";
          }
        }
      }
    this.setState({ formErrors: formErrors });    
    return isValid; 
    }

    formSubmit(e){
        console.log(this.state);
        e.preventDefault();
        if (this.handleFormValidation()){
          this.props.addNewData(this.state);
          this.setState({
              type:'',
              label:'',
              checkboxoptions:[]
            })
        }
      }
    
  render() {
    const {labelErr , checkBoxoptionErr,addOptionsErr} = this.state.formErrors;
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
                <p>Add required no of options and enter values</p>
                {this.state.checkboxoptions.map((val,i) => (
                    <>
                        <div key={i}>
                            <label className="form-label">Value:
                                <input type="text" className={`input ${checkBoxoptionErr ? "error" : ""}`} value={val||''} onChange={this.enterOptions.bind(this,i)} style= {{ margin: '5px'}} placeholder="Enter option" />
                                {checkBoxoptionErr && <div style={{ color: "red", paddingBottom: 10 }}>{checkBoxoptionErr}</div>}
                            </label> 
                        </div>
                        
                    </>
                ))}
            <div>
              <button type="button"  className={`addoptionbtn ${addOptionsErr ? "error" : ""}`}  onClick= {this.addRow}  >Add Options</button>
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

export default Checkboxcomp
