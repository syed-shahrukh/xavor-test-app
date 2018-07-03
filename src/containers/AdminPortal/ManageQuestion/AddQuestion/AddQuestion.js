import React, { Component } from "react";
import Aux from "../../../Auxilary/Auxilary";
import RichTextEditor from '../../../../components/TextEditor';
import {
  Breadcrumb,
  Form,
  FormControl,
  ControlLabel,
  FormGroup,
  Button,
  Modal,
  Checkbox
} from "react-bootstrap";
import "./AddQuestion.css";
import ReactTable from 'react-table';
const fakeData = [
  { statement: "Data Object Model", answer: 'false' },
  { statement: "Data Oriented Model", answer: 'false' }
];
class AddQuestion extends Component {
  state = {
    show: false,
    graphic_content: false,
    columns: [
      {
        Header: "Answer Text",
        accessor: "statement",
        show: true
      },
      {
        Header: "Is answer?",
        accessor: "answer",
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

    showGraphicalContent = (event) => {
        const show = event.target.value;
        if(show === "graphical"){
          this.setState({graphic_content: true});
        }
        else{
          this.setState({graphic_content: false});
        }
    }
    summerNote = (content) => {
      console.log(content);
    }
  render() {
    return (
      <Aux>
      {/*********************** Bread Crumbs***************************************/}
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admin-portal/home/manage-sections">
            Manage Sections
          </Breadcrumb.Item>
          <Breadcrumb.Item
            active
            href="/admin-portal/home/manage-sections/add-question"
          >
            Add Question
          </Breadcrumb.Item>
        </Breadcrumb>
      {/*********************** End of Bread Crumbs***************************************/}

      {/*********************** Content Body***************************************/}
        <div className="content-body">
          <div className="container-fluid">
            <Form className="add-question">
              <FormGroup controlId="formBasicText">
              {/*********************** Question Statement***************************************/}
                <div className="row fields">
                  <div className="col-md-6">
                    <div>
                      <ControlLabel>Statement</ControlLabel>{" "}
                    </div>
                    <RichTextEditor/>
                    {/*<div id={this.summerNote()}><p>Hello Summernote</p></div>*/}
                  
                  </div>
                </div>
{/*********************** Which Section it belongs to***************************************/}
                <div className="row fields">
                  <div className="col-md-4">
                    <div>
                      <ControlLabel>Section</ControlLabel>
                      {"     "}
                    </div>

                    <FormControl componentClass="select" placeholder="select">
                      <option value="section1">Section 1</option>
                      <option value="section2">Section 2</option>
                      <option value="section3">Section 3</option>
                    </FormControl>
                  </div>
                </div>
{/*********************** Whether question has some visual aid or not***************************************/}
                <div className="row fields">
                <div className="col-md-4">
                    <div>
                      <ControlLabel>Question Type</ControlLabel>
                      {"     "}
                    </div>

                    <FormControl onChange={this.showGraphicalContent} componentClass="select" placeholder="select">
                      <option value="textual">Textual</option>
                      <option value="graphical">Graphical</option>
                    </FormControl>
                  </div>
                </div>

                {/*********************** Conditional Rendering of File upload*************************/}
               { this.state.graphic_content ? <div className="row fields">
                <div className="col-md-4">
                    <div>
                      <ControlLabel>Graphical Content</ControlLabel>
                      {"     "}
                    </div>

                    <input type="file" name="file" hidden/>
                  </div>
                  </div>: console.log("") }
              </FormGroup>
            </Form>
            {/*********************** Add Answer Button***************************************/}
            <div className="row">
              <div className="col-md-3">
                Add answer options for above question.
              </div>
             <div className="col-md-3 add-answer">
              <Button onClick={this.handleShow} bsStyle="success">Add Answer</Button>
            </div>
            </div>
             {/*********************** Answers Table***************************************/}
             <div className="row ">
             <div className="col-md-6">
             <ReactTable data={fakeData} minRows={0} columns={this.state.columns} />
             <Modal dialogClassName="add-answer-modal" bsSize= "small"show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
            <Form className="academic-info">
            <FormGroup controlId="formBasicText">
            
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <ControlLabel>Description</ControlLabel>{' '}
                        </div>
                        <FormControl
                            name="answerstatement"
                            type="text"
                            placeholder="Please Specify"
                            onChange = {this.fillValues}
                        />    
                    </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                   <FormGroup>
                   <Checkbox inline>Is Answer?</Checkbox>
                 </FormGroup>
                   </div>
                   </div>
            </FormGroup>
            
        </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsClass="xavor-style" onClick={this.handleClose}>Save</Button>
          </Modal.Footer>
        </Modal>
         </div>
         </div>
         {/*********************** Save Button***************************************/}
         <div className="row">
          <div className="col-md-6 add-answer">
            <Button bsStyle="success">Save</Button>
          </div>
         </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AddQuestion;
