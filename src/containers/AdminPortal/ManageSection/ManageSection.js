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
            minWidth: 100, // A minimum width for this column. If there is extra room, column will flex to fill available space (up to the max-width, if set)
            maxWidth: 150,
            headerClassName: "table-header-grid",
            show: true
          },
          {
            Header: "Description",
            accessor: "description",
            minWidth: 900, // A minimum width for this column. If there is extra room, column will flex to fill available space (up to the max-width, if set)
            maxWidth: 950,
            headerClassName: "table-header-grid",
            show: true
          },
          {
            Header: "Action",
            headerClassName: "table-header-grid",
            minWidth: 120, // A minimum width for this column. If there is extra room, column will flex to fill available space (up to the max-width, if set)
            maxWidth: 121,
            Cell: row => (
              <div>
              <span>
              
              <a onClick={this.handleEditOperation}>Edit</a>
              
              </span>
              
              <span>
              <a onClick={this.handleDeleteOperation}>Delete</a>
              </span>
                
                
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
                    <Breadcrumb.Item className="current-node" active href="/admin-portal/home/manage-sections">Manage Sections</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content-body">
                    <div className="admin-tools">
                   
                             {/****************************************Search Bar*************************************/}
                    <div className="search-bar">
                    <form>
                        <input className="search-box" name="search" placeholder="Search..."/>
                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        
                        </button>
                    </form>
                </div>
                {/****************************************Search Bar*************************************/}
                <div className="add-button">
                <span className="glyphicon glyphicon-plus"></span>
                <a onClick={this.handleShow}>  Add a new section</a>
                </div>
                </div>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><b>Add new section</b></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    
                                        <Form>
                                            <FormGroup controlId="formBasicText">

                                                <div className="row admin-modal-fields">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <ControlLabel>* Name</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="section-name"
                                                            type="text"
                                                            placeholder="Part Z"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>

                                                    <div className="col-md-6 admin-modal-fields">
                                                        <div>
                                                            <ControlLabel>* Number of Questions to list</ControlLabel>{' '}
                                                        </div>
                                                        <FormControl
                                                            name="questions-to-list"
                                                            type="number"
                                                            placeholder="10"
                                                            onChange={this.fillValues}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="row admin-modal-fields">

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
                                        <div className="row">
                                        <div className="col-md-8">
                                        <section className="mandatory-note"><b>Note: All Fields marked with * are mandatory</b></section>
                                        </div>
                                        <div className="col-md-4">
                                        <Button bsClass="normal-style-small" onClick={this.handleClose}>Cancel</Button>
                                        <Button bsClass="xavor-style-small" onClick={this.handleClose}>Save</Button>
                                        </div>
                                        </div>
                                    





                                </Modal.Body>
                                
                            </Modal>
           
                    
                    <div className="tabular-data">
                        <ReactTable 
                        className="table-grid"
                         data={fakeData}
                          minRows={0}
                           columns={this.state.columns} />
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ManageSection;