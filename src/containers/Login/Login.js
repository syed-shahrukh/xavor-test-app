import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Form, Button } from 'react-bootstrap';
import LoginLogo from '../../images/login-logo.png';
import SignupLogo from '../../images/signup-logo.png';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import Aux from '../Auxilary/Auxilary';






class Login extends Component {

  render() {
    return (

      <Aux>
        
        <Navbar title="Welcome to Xavor Corporation" />
        <div className="row wrap">
          <div className="empty-parent-login">
          <div className="col-md-5 login-window">
          
          <div className="row dialogue-title">
              <div className="col-md-8 ">
                <h4>Login to site</h4>
                <h6>Enter your email and password to Login</h6>
              </div>
              <div className="col-md-4 logo ">
                <img alt="login-logo" src={LoginLogo} />
              </div>

            </div>
            <Form className="login-form">
              <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large"  >
                    <ControlLabel>Email</ControlLabel>{'    '}
                    <FormControl type="email" placeholder="jane.doe@example.com" />
                  </FormGroup>{' '}
                </div>
                </div>
                
              <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large">
                    <ControlLabel>Password</ControlLabel>{'    '}
                    <FormControl type="password" placeholder="Enter your password" />
                  </FormGroup>{' '}
                </div>
              </div>
            </Form>
            <div className="row">
              <div className="col-md-12 button-container">
                <Button href="#" className="buttons" bsClass="xavor-style">Login</Button>
              </div>
            </div>
        
          </div>
          </div>
          <div className="line-drawer"></div>
          <div className="empty-parent-signup">
          <div className="col-md-5 signup-window">
          <div className="row dialogue-title">
                  <div className="col-md-8">
                    <h4>Sign up now</h4>
                    <h6>Fill in the form below to get instant access</h6>
                  </div>
                  <div className="col-md-4 logo">
                    <img alt="signup-logo" src={SignupLogo}/>
                  </div>
                  </div>

                  <Form className="signup-form">
                  <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large" >
                    <ControlLabel>Name</ControlLabel>{'    '}
                    <FormControl type="text" placeholder="Jane Doe" />
                  </FormGroup>{' '}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large" controlId="formInlineEmail" >
                    <ControlLabel>Email</ControlLabel>{'    '}
                    <FormControl type="email" placeholder="jane.doe@example.com" />
                  </FormGroup>{' '}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large">
                    <ControlLabel>Password</ControlLabel>{'    '}
                    <FormControl type="password" placeholder="Enter your password" />
                  </FormGroup>{' '}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <FormGroup bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>{'    '}
                    <FormControl type="password" placeholder="Confirm your password" />
                  </FormGroup>{' '}
                </div>
                
              </div>
            </Form>
            <div className="row">
              <div className="col-md-12">
                <Button className="buttons" bsClass="xavor-style" href="/signup">Signup</Button>
              </div>
            </div>
            </div>
            </div>
          
        </div>
            {/* Login Modal*/}
      </Aux>


          );
      
        }
      }
      
      export default Login;
