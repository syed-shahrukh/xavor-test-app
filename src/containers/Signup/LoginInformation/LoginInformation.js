import React, { Component } from "react";
import Aux from "../../Auxilary/Auxilary";
import { Button, FormControl, FormGroup, Form, ControlLabel } from 'react-bootstrap';
import './LoginInformation.css';




class LoginInformation extends Component {

    render() {

        return (
            <Aux>
                <div className="row">
                    <div className="col-md-5">
                        <FormGroup controlId="formInlineEmail" >
                            <ControlLabel>Username</ControlLabel>{'    '}
                            <FormControl type="text" placeholder="cand123" />
                        </FormGroup>{' '}
                    </div>
                    
                    <div className="col-md-5">
                    <FormGroup controlId="formInlineEmail" >
                            <ControlLabel>Username</ControlLabel>{'    '}
                            <FormControl type="text" placeholder="cand123" />
                        </FormGroup>{' '}
                    </div>
                </div>
            </Aux>

        );
    }
}

export default LoginInformation