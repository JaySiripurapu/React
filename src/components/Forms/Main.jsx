import React from "react"; 
import Popup from '../Basic/Popup'; 
import Dropdowncomp from './Dropdowncomp'
import Namecomp from './Namecomp' 
import '../css/main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contactform from "./Contactform";


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <section className="main-form container">
        <Container>
            <Row className="my-1">
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Namecomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Single Line Text"  onClick={this.showModal} />
                    </div>
                </Col>
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Namecomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Paragraph Text" onClick={this.showModal} /> 
                    </div>
                </Col>
            </Row>
            <Row className="my-2">
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Dropdowncomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Dropdown"  onClick={this.showModal} />
                    </div>
                </Col>
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Namecomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Name" onClick={this.showModal} /> 
                    </div>
                </Col>
            </Row>
            <Row className="my-2">
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Namecomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Email"  onClick={this.showModal} />
                    </div>
                </Col>
                <Col md="6">
                    <Popup show={this.state.show} handleClose={this.hideModal}>
                        <Namecomp />
                    </Popup>
                    <div className="text-center">
                        <input type="button" className="formbtn text-white" value="Numbers" onClick={this.showModal} /> 
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="contact-form mt-5">
            <Contactform />
        </section>
      </main>
    );
  }
}

  
export default Main;