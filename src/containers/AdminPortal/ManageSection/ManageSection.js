import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb } from 'react-bootstrap';
import { Form, FormControl, Modal, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import ReactTable from 'react-table';
import './ManageSection.css';


const fakeData = [
    { name: "Part 1", description: 'Description' },
    { name: "Part 2", description: 'Description' },
    { name: "Part 3", description: 'Description' },
    { name: "Part 4", description: 'Description' }
  ];
class ManageSection extends Component {
    state = {
        show: false,
        columns: [
          {
            Header: "Section Name",
            accessor: "name",
            show: true
          },
          {
            Header: "Description",
            accessor: "description",
            show: true
          },
          {
            Header: "Action",
            Cell: row => (
              <div>
                <button className="table-action" onClick={this.handleEditOperation}>Edit</button>
                <button className="table-action" onClick={this.handleDeleteOperation}>Delete</button>
              </div>
            )
          }
        ]
      };
    /***************************** Functions****************************************************** */
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    handleDeleteOperation = () => {
        console.log("Delete operation function has been called!!!");
    }
    handleEditOperation = () =>{
        console.log("Edit operation function has been called!!!");
    }
    /***************************** End of Functions****************************************************** */
    render() {
        return (
            <Aux>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/admin-portal/home/manage-sections">Manage Sections</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content-body">
                    <div className="admin-tools">
                    <div className="add-button">
                            <span className="glyphicon glyphicon-plus"></span>
                            <a onClick={this.handleShow}>  Add a new section...</a>
                            <Modal dialogClassName="section-modal" bsSize="large" className="Popup" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><b>Add new section...</b></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="container-fluid">
                                        <Form className="academic-info">
                                            <FormGroup controlId="formBasicText">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>Name</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="section-name"
                                                            type="text"
                                                            placeholder="Part Z"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>Number of Questions to list</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="questions-to-list"
                                                            type="number"
                                                            placeholder="10"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                </div>






                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div>
                                                            <ControlLabel>Description</ControlLabel>
                                                            {"     "}
                                                        </div>
                                                        <FormControl
                                                            name="description"
                                                            componentClass="textarea"
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
                                    <Button bsClass="xavor-style" onClick={this.handleClose}>Save changes</Button>

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
                    <div className="tabular-data">
                        <ReactTable data={fakeData} minRows={0} columns={this.state.columns} />
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ManageSection;