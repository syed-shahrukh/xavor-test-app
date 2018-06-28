import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import { Form, FormControl, Modal, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import './ManageQuestion.css';


class ManageQuestion extends Component{
    state = {
        show: false
    }
    /***************************** Functions****************************************************** */
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    /***************************** End of Functions****************************************************** */
    
    render(){
        return(
            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/admin-portal/home/manage-questions">Manage Questions</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content-body">
                    <div className="admin-tools">
                    <div className="add-button">
                            <span className="glyphicon glyphicon-plus"></span>
                            <a onClick={this.handleShow}>  Add a new record...</a>
                            <Modal dialogClassName="academic-modal" bsSize="large" className="Popup" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><b>Add new record...</b></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="container-fluid">
                                        <Form className="academic-info">
                                            <FormGroup controlId="formBasicText">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>Name of Institute</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="institute"
                                                            type="text"
                                                            placeholder="McGille University"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>Subject</ControlLabel>
                                                            {"     "}
                                                        </div>
                                                        <FormControl
                                                            name="subject"
                                                            type="text"
                                                            placeholder="Example: Engineering"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>From</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="fromdate"
                                                            type="date"
                                                            placeholder="1/1/2001"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>To</ControlLabel>
                                                            {"     "}
                                                        </div>
                                                        <FormControl
                                                            name="todate"
                                                            type="date"
                                                            placeholder="1/1/2001"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                </div>






                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>Major</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="major"
                                                            type="text"
                                                            placeholder="Please Specify"
                                                            onChange={this.fillValues}

                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>CGPA/Grades</ControlLabel>
                                                            {"     "}
                                                        </div>
                                                        <FormControl
                                                            name="grades"
                                                            type="text"
                                                            placeholder="Please Specify"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                </div>

                                            </FormGroup>

                                        </Form>
                                    </div>





                                </Modal.Body>
                                <Modal.Footer>
                                    <section className="mandatory-note"><b>* All fields are mandatory</b></section>
                                    <Button onClick={this.handleClose}>Close</Button>
                                    <Button bsClass="xavor-style" onClick={this.addRecord}>Save changes</Button>

                                </Modal.Footer>
                            </Modal>
                    </div>
                     {/****************************************Search Bar*************************************/}
                    <div className="search-bar">
                        <form>
                            <input className="search-box" name="search" placeholder="Search..."/>
                            <button className="search-button">
                                <i class="fas fa-search"></i>
                            
                            </button>
                        </form>
                    </div>
                    {/****************************************Search Bar*************************************/}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ManageQuestion;