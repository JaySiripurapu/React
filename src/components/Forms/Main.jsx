import React from "react";
import Popup from '../Basic/Popup';
import Dropdowncomp from './Dropdowncomp'
import Namecomp from './Namecomp'
import '../css/main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contactform from "./Contactform";
import RadiobuttonComp from "./RadiobuttonComp";
import Checkboxcomp from "./Checkboxcomp";



class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPopUpId: "",
            config: JSON.parse(localStorage.getItem('user')) || [],
        };
        //console.log(this.state.show)
        this.showModal = this.showModal.bind(this);
        this.addInput = this.addInput.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.doValidation = this.doValidation.bind(this);

    }

    showModal = (e) => {
        //   console.log(e.target.id);
        this.setState({ currentPopUpId: e.target.id, show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    clearConfig = () => {

        this.setState(
            { config: [] }
        )
    };

    addInput = (childData) => {

        this.setState(
            { config: [...this.state.config, childData] }
        )
        console.log(this.state.config);
        localStorage.setItem('user', JSON.stringify([...this.state.config, childData]));
        this.setState({ show: false });

    };

    updateValues = (id, value) => {
        const arr = this.state.config;
        console.log(id, value)
        if (arr.length > 0 && !isNaN(id)) {
            const parsedId = parseInt(id);
            arr[parsedId].value = value;
            this.setState({ config: [...arr] });
        }
    }
    // const validationRules = {

    // }


    doValidation() {
        const arr = this.state.config;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (arr.length > 0) {
            arr.forEach((element) => {
                if (element.type === 'text' || element.type === 'email' || element.type === 'textarea' || element.type === 'number' ) {
                    if (element.value.trim().length <= 0) {
                        element.isValid = false;
                        element.errMsg = `The ${element.label} field can't be empty`
                    }else if (element.type === 'text'){
                        if (element.value.trim().length > 15) {
                            element.errMsg = `The length of the ${element.label} should be lessthan 15.`
                            element.isValid = false;
                        }else{
                            element.isValid = true;
                        }
                    }else if (element.type === 'email') {
                        if (reg.test(element.value.trim()) === false) {
                            element.isValid = false;
                            element.errMsg = "You entered invalid email address."
                        }else{
                            element.isValid = true;
                        } 
                    }else if (element.type === 'textarea'){
                        if(element.value.trim().length > 200 ){
                            element.isValid = false;
                            element.errMsg = `The ${element.label} length between 1 to 200 characters.`
                        }else{
                            element.isValid = true;
                        }
                    }else if (element.type === 'number'){
                        if(element.value.trim() <= 0 ||  element.value.trim() > 150 ){
                            element.isValid = false;
                            element.errMsg = `The ${element.label} should be between 1 to 150.`
                        }else{
                            element.isValid = true;
                        }
                        
                    }
                }else if(element.type === 'dropdown'){
                    if(element.value === undefined){
                        element.isValid = false;
                        element.errMsg = `Please select any options of ${element.label}.`
                    }else{
                        element.isValid = true;
                    }
                    
                }
                 
            });
            this.setState({ config: [...arr] });
        }
    }
    // callBackToParent=(dropdownCompData)=>{
    //     this.setState(
    //         {config:[...this.state.config, dropdownCompData]}
    //     )
    //     console.log(this.state.config);
    //     localStorage.setItem('user', JSON.stringify([...this.state.config, dropdownCompData]));
    //     this.setState({ show: false });
    // }
    render() {
        return (
            <main>
                <section className="main-form container">
                    <Container>
                        <Row className="my-1">
                            <Col md="6">
                                {this.state.currentPopUpId === "0" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Namecomp addNewData={this.addInput} type1="text" />
                                </Popup>}
                                <div className="text-center input-icons">
                                    <i class="fa-regular fa-text icon text-white"></i>
                                    <input type="button" className="formbtn text-white" value="Single Line Text" id="0" onClick={this.showModal} />
                                </div>
                            </Col>
                            <Col md="6">
                                {this.state.currentPopUpId === "1" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Namecomp addNewData={this.addInput} type1="textarea" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Paragraph Text" id="1" onClick={this.showModal} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md="6">
                                {this.state.currentPopUpId === "2" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Dropdowncomp addNewData={this.addInput} close={this.hideModal} type1="dropdown" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Dropdown" id="2" onClick={this.showModal} />
                                </div>
                            </Col>
                            <Col md="6">
                                {this.state.currentPopUpId === "3" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Namecomp addNewData={this.addInput} type1="text" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Name" id="3" onClick={this.showModal} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md="6">
                                {this.state.currentPopUpId === "4" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Namecomp addNewData={this.addInput} type1="email" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Email" id="4" onClick={this.showModal} />
                                </div>
                            </Col>
                            <Col md="6">
                                {this.state.currentPopUpId === "5" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Namecomp addNewData={this.addInput} type1="number" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Numbers" id="5" onClick={this.showModal} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md="6">
                                {this.state.currentPopUpId === "6" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <Checkboxcomp addNewData={this.addInput} type1="checkbox" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="CheckBox" id="6" onClick={this.showModal} />
                                </div>
                            </Col>
                            <Col md="6">
                                {this.state.currentPopUpId === "7" && <Popup show={this.state.show} handleClose={this.hideModal}>
                                    <RadiobuttonComp addNewData={this.addInput} type1="radio" />
                                </Popup>}
                                <div className="text-center">
                                    <input type="button" className="formbtn text-white" value="Radio Button" id="7" onClick={this.showModal} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="contact-form mt-5">
                    <Contactform data={this.state.config} clearConfig={this.clearConfig} updateValues={this.updateValues}
                        doValidation={this.doValidation}
                    />
                </section>
            </main>
        );
    }
}


export default Main;