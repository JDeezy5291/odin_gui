import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import React, { Component, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RaisedButton, TextField } from "material-ui";
import logo from '../../Assets/Images/Odin_Logo.png';
import { useHistory } from "react-router-dom";

// export class FormDetails extends Component {
  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };
  // render() {
    // const { values, handleChange } = this.props;
    // console.log(handleChange, "Handle Change")
    
// class FormDetails extends React.Component {
  function FormDetails() {
    // constructor(props) {
    //   super(props)
    //   this.state = { 
    //     email: '',
    //     password: ''
    //   }
    // }

    // setEmail = event => {
    //   this.setState({
    //     email: event.target.value
    //   })
    // }

    // setPassword = event => {
    //   this.setState({
    //     password: event.target.value
    //   })
    // }

  const history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const signIn = e => {
    // prevent page from refreshing
    e.preventDefault()
    // aws-amplify?
  }

  // render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="my-5 pt-5"> 
            <div className="container">
              <div className="justify-content-center row">
                <div className="col-md-8 col-lg-6 col-xl-5">
                  <div className="position-relative text-center">
                    <div className="overflow-hidden formDetails__card">
                      <div className="formDetails__card-bg">
                        <div className="text-primary text-center p-4">
                          <h5>Welcome!</h5>
                          <p>Sign in to continue</p>
                          <a href="#" className="app__logo">
                            <img src={logo} alt="Logo"/>
                          </a>
                        </div>
                      </div>
                      <div className="p-4 card-body">
                        <div className="p-3">
                          <form className="mt-4">
                            <TextField
                              className="formDetails__textfield"
                              required
                              hintText="Email"
                              floatingLabelText="Email"
                              // onChange={this.setEmail}
                              // value={this.state.email}
                            />
                            <TextField
                              className="formDetails__textfield"
                              required
                              hintText="Password"
                              floatingLabelText="Password"
                              // onChange={this.setPassword}
                              // value={this.state.password}
                              type="password"                      
                            />
                            <br />
                            <RaisedButton
                              label="Continue"
                              primary={true}
                              className="app__formButton"
                              onClick={() => {
                                console.log("Email: " + this.state.email + " " + "Password: " +this.state.password)
                              }}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <p>
                      Don't have an Account? 
                      <a href="#" className="app__registerButton">
                      &nbsp;Register
                      </a>
                    </p>
                    <p className="mb-0">&copy; 2021 Vertex Laboratories. All Rights Reserved, Vertex Laboratories LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  // }
}

export default FormDetails;
