import React, { Component } from 'react'
import Dynamicfields from '../Basic/Dynamicfields'



class Namecomp extends Component {
  constructor(props){
    super(props);
    this.handleCallback=this.handleCallback.bind(this);
  }
  componentDidMount(){
    console.log('nameComponent', this.props.type1);
  }
  
  handleCallback(childData){
    //this.setState({name: childData})
    //console.log(childData);

    this.props.addNewData(childData);
  }

  render() {
    return (
      <div > 
        <Dynamicfields type1={this.props.type1} parentCallback = {this.handleCallback} handleClose={this.clearState} />
      </div>
    )
  }
}

export default Namecomp
