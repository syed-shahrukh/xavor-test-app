import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import './AdminHome.css';


class ManageSection extends Component{
 
    render(){
        return(
            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item active href="/admin-portal/home/">Home</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Welcome to Admin Home</h1>
                
            </Aux>
        );
    }
}

export default ManageSection;