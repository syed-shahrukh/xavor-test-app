import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Aux from '../Auxilary/Auxilary';
import './AccountType.css';





class AccountType extends Component{

    render(){
        return(
            <Aux>
            <Navbar title="Welcome to Xavor Corporation"/>
            <div className="split admin-portal">
            <div className="centered">

                <Button href="/admin-portal/home/" bsClass="xavor-style" bsSize="large">Admin Portal</Button>
            </div>
            </div>
            <div className="split candidate-test">
            <div className="centered">
                <Button bsClass="xavor-style" bsSize="large">Candidate Test</Button>
            </div>
            
            </div>
            </Aux>
        );
    }
}


export default AccountType;