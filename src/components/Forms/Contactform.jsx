
import React, { Component } from 'react'
import "../css/main.css";
class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValues: {},
      checkedOptions: [],
      formErrors: {}
    }
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleChange=this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleTextChange(e) {
    //console.log(e.target.dataset);
    this.props.updateValues(e.target.dataset.fieldId, e.target.value);
    // let fieldValues = this.state.fieldValues
    // fieldValues[e.target.name] = [e.target.value, e.target.id];
    // this.setState({ fieldValues })
  }

  handleChange = (event) => {
    if (event.target.checked) {
      if (!this.state.checkedOptions.includes(event.target.value)) {
        this.setState(prevState => ({ checkedOptions: [...prevState.checkedOptions, event.target.value] }))
      }
    } else {
      this.setState(prevState => ({ checkedOptions: prevState.checkedOptions.filter(checked => checked !== event.target.value) }));
    }
    //console.log(this.state.checkedOptions)
  }

  clearLocalStorage = () => {
    localStorage.removeItem('user');
    this.props.clearConfig();
  };

  // handleFormValidation(){
  //   let formErrors = {};
  //   let isValid = true;
  //   //console.log(Object.keys(this.state.fieldValues).length);
  //   if(Object.keys(this.state.fieldValues).length !== 0 || Object.keys(this.state.checkedOptions).length !==0 ){
  //       console.log(Object.keys(this.state.fieldValues).length);
  //       const values = Object.entries(this.state.fieldValues)
  //       console.log(values.length);
  //       for(let i=0; i<values.length; i++){
  //           if(values[i][0]){
  //             console.log(values[i][0])
  //             if(values[i][1][0].trim() === '' || values[i][1][0] === 'null'  ){
  //               console.log(values[i][1][0])
  //               isValid = false;
  //             }
  //             console.log(document.getElementById(values[i][1][1]));
  //           //console.log(values[i][1])
  //         }
  //          //console.log(values[i].length);
  //       }
  //       //console.log(this.state.fieldValues);
  //   }
  // this.setState({ formErrors: formErrors });    
  // return isValid; 
  // }
  formValidation() {
    let formErrors = {};
    let isValid = true;
    let formId = document.getElementById('contact-form')
    const formData = new FormData(formId)
    for (const [key, value] of formData) {
      if (key !== 'email' && key !== 'file') {
        console.log("if1")
        if (typeof value === 'string') {
          console.log("if2");
          if (value.trim() === '' || value.trim() === 'null') {
            console.log("if3")
            isValid = false;
            console.log(isValid);
          }
        }
      }
      console.log(`${key}: ${value}\n`);
    }
    for (var pair of formData.entries()) {
      console.log(pair);
    }

    this.setState({ formErrors: formErrors });
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.doValidation();
    // console.log(this.state);
    // let result = JSON.stringify(this.state);
    // if (Object.keys(this.state.fieldValues).length === 0 && Object.keys(this.state.checkedOptions).length === 0 && Object.keys(this.state.formErrors).length === 0) {
    //   //console.log(this.state);
    //   alert("Please fill the fields to submit form")
    // } else {
    //   if (this.formValidation()) {
    //     alert("Form submitted successfully..");
    //     alert(result);
    //     //document.getElementById("res").innerHTML=result;
    //     this.setState({})
    //     this.clearLocalStorage();
    //   }

    // }


  }
  render() {
    //console.log(this.props.data);
    return (
      <>
        <form id="contact-form">
          <div className="py-4 px-5 col-lg-9" style={{ backgroundColor: "#e3f2fd" }}>
            <h5>Contact form</h5>
            <p>Please add required input fields from above and fill in your information and we will be sending your order in no time</p>
            <ul class="ul">
              {
                this.props.data.map((d, idx) => {
                  if (d.type === 'text') {
                    return (
                      <li key={idx} class="listItem">

                        <label className="contactform-label">{d.label}:</label>
                        <input
                          className="contactform-input"
                          id={`text${idx}`}
                          name={d.label}
                          type={d.type}
                          onChange={this.handleTextChange}
                          placeholder={d.placeholder}
                          required={true}
                          value={d.value}
                          data-field-id={idx}
                        />

                        {/* {formErrors['text'+idx] && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors['text'+idx]}</div>} */}

                        <div className={`formerror ${!d.isValid ? 'error-visible' : ''}`}>
                          {d.errMsg}
                        </div>
                      </li>)
                  }
                  else if (d.type === 'email') {
                    return (
                      <li className="listItem" key={idx}>
                        <label className="contactform-label" >{d.label}: </label>
                        <input
                          className="contactform-input"
                          id={idx}
                          name={d.type}
                          type={d.type}
                          onChange={this.handleTextChange}
                          placeholder={d.placeholder}
                          value={d.value}
                          data-field-id={idx}
                        />
                        <div className={`formerror ${!d.isValid ? 'error-visible' : ''}`}>
                          {d.errMsg}
                        </div>
                      </li>)
                  } else if (d.type === 'number') {
                    return (
                      <li className="listItem" key={idx}>
                        <label className="contactform-label">{d.label}: </label>
                        <input
                          className="contactform-input"
                          id={idx}
                          name={d.label}
                          type={d.type}
                          onChange={this.handleTextChange}
                          placeholder={d.placeholder}
                          value={d.value}
                          data-field-id={idx}
                        />
                        <div className={`formerror ${!d.isValid ? 'error-visible' : ''}`}>
                          {d.errMsg}
                        </div>
                      </li>)
                  }
                  else if (d.type === 'textarea') {
                    return (
                      <li className="listItem" key={idx}>
                        <label className="contactform-label">{d.label}: </label>
                        <textarea
                          className="contactform-input"
                          id={idx}
                          name={d.label}
                          onChange={this.handleTextChange}
                          placeholder={d.placeholder}
                          value={d.value}
                          data-field-id={idx}
                        />
                        <div className={`formerror ${!d.isValid ? 'error-visible' : ''}`}>
                          {d.errMsg}
                        </div>
                      </li>)
                  }
                  else if (d.type === 'dropdown') {
                    return (
                      <li className="listItem" key={idx}>
                        <label className="contactform-label">{d.label}: </label>
                        <select
                          className="contactform-input"
                          id={idx}
                          name={d.label}
                          defaultValue={"default"}
                          value={d.value}
                          data-field-id={idx}
                          onChange={this.handleTextChange}
                          >
                            <option value={"default"} disabled>--Choose an option--</option>
                            {d.dropdownoptions.map(dropdownoption => (
                              <option value={dropdownoption.optionLabel} >{dropdownoption.optionValue}</option>
                            ))}
                        </select>
                        <div className={`formerror ${!d.isValid ? 'error-visible' : ''}`}>
                          {d.errMsg}
                        </div>
                      </li>)
                  } else if (d.type === 'radio') {
                    return (
                      <li className="listItem" key={idx}>
                        <label className="contactform-label">{d.label}: </label>
                        <ul class="ul">
                          {d.radiobuttonoption.map(option => (
                            <>
                              <li>
                                <label className="contactform-label-radio">{option}</label>
                                <input type={d.type} name={d.label} className="contactform-input-radio" value={option} onChange={this.handleTextChange} />
                              </li>
                            </>
                          ))}
                        </ul>
                      </li>)
                  } else if (d.type === 'checkbox') {
                    return (
                      <li className="listItem" key={idx}>
                        <h6><label className="contactform-label">{d.label}: </label></h6>
                        <ul class="ul">
                          {d.checkboxoptions.map(option => (
                            <>
                              <li >
                                <label className="contactform-label-radio">{option}</label>
                                <input type={d.type} name={d.label} className="contactform-input-radio" value={option} onChange={this.handleChange} />
                              </li>
                            </>
                          ))}
                        </ul>
                      </li>)
                  }

                })}
            </ul>
            <div>
              <button type="submit" onClick={this.onSubmit} className="submit-btn" >Submit Form</button>
              <button className="clear" onClick={this.clearLocalStorage}>Clear Form</button>
            </div>
            <div id="res"></div>
          </div>
        </form>

      </>
    )
  }

}


export default Contactform
