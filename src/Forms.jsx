import React, { Component } from 'react'
 class Forms extends Component {
    constructor(props) {
        super(props);
        this.fetchUsername = this.fetchUsername.bind(this);
        this.fetchEmail = this.fetchEmail.bind(this);
     }
     fetchUsername() {
        this.refs.username.value = 'RahulBansal123';
     }
     fetchEmail() {
        this.refs.email.value = 'rahul@gmail.com';
     }
     render() {
        return (
           <div>
                <label>First Name:
                    <input type="text" /><br /> 
                </label>
                <label>Last Name:
                    <input type="text"  /><br />
                </label>
              <input type="su" />
              <button type="button" onClick={this.fetchUsername}>
                 Username
              </button><br />
              <button type="button" onClick={this.fetchEmail}>
                 Email
              </button><br />
           </div>
        );
     }
}

export default Forms;
