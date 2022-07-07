import React, { Component } from 'react'
// import Toggleswitch from '../Basic/Toggleswitch';
import '../css/main.css'

class Dropdowncomp extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.type1,
            label:'',
            value:'',
            errMsg:'',
            formErrors: {},
            isValid: true,
            dropdownoptions : [{optionLabel :"", optionValue:""}]            
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
    //     let dropdownoptions = [...this.state.dropdownoptions]
    //     dropdownoptions[e.target.dataset.id][e.target.name] = e.target.value;
    //     } else {
    //     this.setState({ [e.target.name]: e.target.value })
    //     }
    //     }
    addRow(e){
        this.setState(({
            dropdownoptions: [...this.state.dropdownoptions,{optionLabel :"", optionValue:""}]
        })) 
        //console.log(this.state.dropdownoption);
        //console.log(this.state.dropdownoptions);
    }
    enterOptions(i,e){
      let dropdownoptions = this.state.dropdownoptions
      
      dropdownoptions[i][e.target.name] = e.target.value;
      this.setState({dropdownoptions})
      console.log(this.state.dropdownoptions);
    }
    
    handleFormValidation(){
      const {label} = this.state;
      let formErrors = {};
      let isValid = true;
      if(!label){
         isValid=false;
        formErrors["labelErr"] = "Label Name is required.";
      }
      console.log(this.state.dropdownoptions.length);

      if(this.state.dropdownoptions.length === 0){
        isValid=false;
        formErrors["addOptionsErr"] = "Please add atleast one option.";
      }else if(this.state.dropdownoptions.length > 0){
        for (let i=0; i < this.state.dropdownoptions.length; i++){
          console.log(this.state.dropdownoptions[i]['optionLabel']);
          console.log(this.state.dropdownoptions[i]['optionValue']);
          if(!(this.state.dropdownoptions[i]['optionLabel'])){
            isValid=false;
            formErrors["optionLabelErr"] = "Option Label Name is required.";
          }

          if(!(this.state.dropdownoptions[i]['optionValue'])){
            isValid=false;
            formErrors["optionValueErr"] = "Option Value Name is required.";
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
              label:'',
              dropdownoptions : [{optionLabel :'', optionValue:''}]
            })
        }
      }
  render() {
    const {labelErr , optionLabelErr, optionValueErr,addOptionsErr} = this.state.formErrors;
    return (
    <div>
        <form className="form-wrapper " onSubmit={this.formSubmit} >
        <h4>Add new field</h4>
          <div className="form-wrapper-fields"> 
            <label  className="form-label">Type: {this.props.type1}</label>           
            {/* <input type={this.props.type1} className="input" value={this.props.type1}  placeholder={this.props.type1} readOnly/> */}
          </div>
          <div className="form-wrapper-fields">
            <label className="form-label" >Label Name:
              <input type="text" className={`input ${labelErr ? "error" : ""}`} value={this.state.label}  onChange={this.labelChange} />
              {labelErr && <div style={{ color: "red", paddingBottom: 10 }}>{labelErr}</div>}
            </label>
          </div>
          {/* <div className="form-wrapper-fields">
            <label style={{ fontWeight:'bold'}} >Placeholder</label><br />
            <input type="text" className="input" value={this.state.placeholder} onChange={this.placeholderChange}/>
          </div> */}
          {/* <div className="form-wrapper-fields">
            <Toggleswitch/>
          </div> */}
            <div className=" form-wrapper-fields dropdownvalues">
                <p className="">Add required no of options and enter values</p>
                {this.state.dropdownoptions.map((val,i) => (
                    <>
                        <div key={i}>
                            <label className="form-label" style= {{margin:'5px'}}>Option Label:
                                <input type="text" name="optionLabel" className={`input ${optionLabelErr ? "error" : ""}`} value={val.optionLabel||''} onChange={this.enterOptions.bind(this,i)} style= {{ margin: '5px'}} placeholder="Enter option" />
                                {optionLabelErr && <div style={{ color: "red", paddingBottom: 10 }}>{optionLabelErr}</div>}
                            </label> 
                            <label className="form-label" style= {{margin:'5px'}}>Option Value:
                                <input type="text" name="optionValue" className={`input ${optionValueErr ? "error" : ""}`} value={val.optionValue||''} onChange={this.enterOptions.bind(this,i)} style= {{ margin: '5px'}} placeholder="Enter option" />
                                {optionValueErr && <div style={{ color: "red", paddingBottom: 10 }}>{optionValueErr}</div>}
                            </label>  
                        </div>
                        
                    </>
                ))}
              <div>
                <button type="button" className={`addoptionbtn ${addOptionsErr ? "error" : ""}`} onClick= {this.addRow}  >Add Options</button>
                {addOptionsErr && <div style={{ color: "red", paddingBottom: 10 }}>{optionValueErr}</div>}
              </div>
            </div>
            <div className="form-wrapper-fields" style= {{width:'36%'}}>
               <input type="submit"  value="ADD" className="add" onChange={this.formSubmit}/>
          </div>

        </form>
    </div>
    )
  }
}

export default Dropdowncomp
