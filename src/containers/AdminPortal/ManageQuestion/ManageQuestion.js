import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import './ManageQuestion.css';


class ManageQuestion extends Component{
    
    render(){
        return(
            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/admin-portal/home/manage-questions">Manage Questions</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Welcome to Manage Questions</h1>
            </Aux>
        );
    }
}

export default ManageQuestion;