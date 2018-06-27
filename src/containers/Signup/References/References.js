import React, { Component } from "react";
import Aux from "../../Auxilary/Auxilary";
import { Modal, Button, FormControl, FormGroup, Form, ControlLabel, Radio } from 'react-bootstrap';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './References.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







class References extends Component {

    /*************************************************ROWS to show in table******************************************************/
    state = {
        show: false,
        record: {
            name: '',
            telephone: '',
            relationship: '',
            yearsknown: '',
            notified: ''
            
        },
        records: [{
            name: '',
            telephone: '',
            relationship: '',
            yearsknown: '',
            notified: '',
        },]
    }
    /*************************************************Functions******************************************************/
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    fillValues = (event) => {
        const name = event.target.name;
    const value = event.target.value;
    let record = this.state.record;
    switch(name){
      case "name":
        record.name = value;
        break;
      
      case "relationship":
      record.relationship = value;
          break;

      case "yearsknown":
      record.yearsknown = value
      break;
      case "telephone":
        record.telephone = value;
      break;
      case "notified":
        record.notified = value;
        break;        
      default:
    }
    this.setState({record: record})
    console.log(this.state);
    }

    addRecord = () => {
        const record = this.state.record;
        const allRecords = this.state.records;
        allRecords.push(record);
        this.setState({records: allRecords});
        console.log("Showing values of record from state: \n");
        console.log(this.state.record);
        console.log("Showing values of all records array from state: \n");
        console.log(this.state.records);
        this.handleClose();
        toast.success("Record Added Successfully !", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        

    }
    /*************************************************End of Functions******************************************************/
    render() {


        /*********************************************Columns/Headings****************************************************/ 
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        },{
            Header: 'Telephone',
            accessor: 'telephone' // String-based value accessors!
        },
        {
            Header: 'Relationship to you',
            accessor: 'relationship'
        },
        {
            Header: 'Years they have known you',
            accessor: 'yearsknown',

        },
        {
            Header: 'Notified?',
            accessor: 'notified'
        }
        ]
        return (
            <Aux>
                <div className="container-fluid">
                    <div className="add-button">
                        <h4>
                            <span className="glyphicon glyphicon-plus"></span>
                            <a onClick={this.handleShow}>  Add a new record...</a>
                            <Modal dialogClassName="references-modal" className="Popup" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><b>Add new record...</b></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form className="academic-info">
                                    <FormGroup controlId="formBasicText">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div>
                                                    <ControlLabel>Name</ControlLabel>{' '}
                                                </div>
                                                <FormControl
                                                    name="name"
                                                    type="text"
                                                    placeholder="McGille University"
                                                    onChange = {this.fillValues}
                                                />    
                                            </div>
                                            <div className="col-md-6">
                                            <div>
                                                <ControlLabel>Relationship to you</ControlLabel>
                                                {"     "}
                                            </div>
                                            <FormControl
                                                name="relationship"
                                                type="text"
                                                placeholder="Example: Professor"
                                                onChange = {this.fillValues}
                                            />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div>
                                                    <ControlLabel>Telephone</ControlLabel>{' '}
                                                </div>
                                                <FormControl
                                                    name="telephone"
                                                    type="text"
                                                    placeholder="090078601"
                                                    onChange = {this.fillValues}
                                                />    
                                            </div>
                                            <div className="col-md-6">
                                            <div>
                                                <ControlLabel>Years they have known you</ControlLabel>
                                                {"     "}
                                            </div>
                                            <FormControl
                                                className="years"
                                                name="yearsknown"
                                                type="number"
                                                placeholder="1"
                                                onChange = {this.fillValues}
                                            />
                                            </div>
                                        </div>






                                        <div className="row">
                                            <div className="col-md-12">
                                                <div>
                                                    <ControlLabel>Have they been notified that we will contact them for verification?</ControlLabel>{' '}
                                                </div>
                                                <FormGroup className="Radio">
                                                    <Radio onClick={this.fillValues} name="notified" value="Yes" inline>
                                                        Yes
                                                    </Radio>{' '}
                                                    <Radio onClick={this.fillValues} name="notified" value="No" inline>
                                                        No
                                                    </Radio>{' '}
                                                </FormGroup>
                                            </div>
                                            


                                        </div>
                                        
                                    </FormGroup>
                                    
                                </Form>





                                </Modal.Body>
                                <Modal.Footer>
                                        <section className="mandatory-note"><b>* All fields are mandatory</b></section>
                                    <Button onClick={this.handleClose}>Close</Button>
                                    <Button bsClass="xavor-style" onClick={this.addRecord}>Save changes</Button>
                                    
                                </Modal.Footer>
                            </Modal>
                        </h4>
                    </div>
                    <ReactTable
                        className="data-table"
                        data={this.state.records}
                        columns={columns}
                        defaultPageSize={5}
                    />
                    <div className="row">
                <Button href="/account-type" className="finish-signup-button" bsClass="xavor-style">Signup</Button>
                <Button className="to-previous" bsClass="xavor-style" onClick={this.props.prev}>Previous</Button>
                </div>
                    
                </div>
               <ToastContainer/>
                
            </Aux>

        );
    }
}

export default References;