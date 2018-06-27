import React, { Component } from "react";
import Aux from "../../Auxilary/Auxilary";
import { Modal, Button, FormControl, FormGroup, Form, ControlLabel } from 'react-bootstrap';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './AcademicInfo.css';




class AcademicInfo extends Component {

    /*************************************************ROWS to show in table******************************************************/
    state = {
        show: false,
        record: {
            institute: '',
            subject: '',
            fromdate: '',
            todate: '',
            major: '',
            degree: '',
            grades: '',
            del: false 
        },
        records: [{
            institute: 'FAST',
            subject: 26,
            fromdate: '0-22-95',
            todate: '12-5-2007',
            major: 'web development',
            degree: 'cs',
            grades: '3.5',
            del: false
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
      case "institute":
        record.institute = value;
        break;
      
      case "subject":
      record.subject = value;
         break;
      
      case "fromdate":
      record.fromdate = value;
          break;

      case "todate":
      record.todate = value
      break;

      case "degree":
        record.degree = value;
        break;
      case "grades":
        record.grades = value;
        break;   
      default:
    }
    this.setState({record: record})
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
        

    }

    /*************************************************End of Functions******************************************************/
    render() {


        /*********************************************Columns/Headings****************************************************/ 
        const columns = [{
            Header: 'Name of Institute',
            accessor: 'institute' // String-based value accessors!
        }, {
            Header: 'Subject',
            accessor: 'subject',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            Header: "Tenure",
            columns: [
                {
                    Header: "From",
                    accessor: "fromdate"
                },
                {
                    Header: "To",
                    accessor: "todate"
                }
            ]
        },
        {
            Header: 'Major',
            accessor: 'major'
        },
        {
            Header: 'Degree',
            accessor: 'degree',

        },
        {
            Header: 'Grades',
            accessor: 'grades',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        },
        {
            Header: 'Action',
            accessor: 'del'
        }
        ]
        return (
            <Aux>
                <div className="academic-heading">
                <h3>Complete List. Starting from Most Recent</h3>
                </div>
                <div className="container-fluid">
                    <div className="add-button">
                        <h4>
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
                                                    onChange = {this.fillValues}
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
                                                onChange = {this.fillValues}
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
                                                    onChange = {this.fillValues}
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
                                                onChange = {this.fillValues}
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
                                                    onChange = {this.fillValues}

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
                                                onChange = {this.fillValues}
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
                        </h4>
                    </div>
                    <ReactTable
                        className="data-table"
                        data={this.state.records}
                        columns={columns}
                        defaultPageSize={5}
                    />
                    <div className="row">
                <Button className="to-professional-button" bsClass="xavor-style" onClick={this.props.click}>Next</Button>
                <Button className="to-previous" bsClass="xavor-style" onClick={this.props.prev}>Previous</Button>
                </div>
                    
                </div>
               
                
            </Aux>

        );
    }
}

export default AcademicInfo;