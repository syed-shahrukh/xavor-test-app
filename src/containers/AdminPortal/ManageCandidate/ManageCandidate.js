import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import './ManageCandidate.css';



class ManageCandidate extends Component{

    render(){
        return(

            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/admin-portal/home/manage-candidates">Manage Candidates</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Hello From Manage Candidates</h1>
            </Aux>
        );
    }
}

export default ManageCandidate;