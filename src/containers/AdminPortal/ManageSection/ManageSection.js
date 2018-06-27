import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import './ManageSection.css';


class ManageSection extends Component{
 
    render(){
        return(
            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/admin-portal/home/manage-sections">Manage Sections</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Welcome to Manage Sections</h1>
            </Aux>
        );
    }
}

export default ManageSection;