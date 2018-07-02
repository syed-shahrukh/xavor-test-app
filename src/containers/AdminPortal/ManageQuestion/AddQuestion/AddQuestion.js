import React, { Component } from "react";
import Aux from "../../../Auxilary/Auxilary";
import RichTextEditor from '../../../../components/TextEditor';
import {
  Breadcrumb,
  Form,
  FormControl,
  ControlLabel,
  FormGroup,
  Button
} from "react-bootstrap";
import "./AddQuestion.css";

class AddQuestion extends Component {
    state={
      graphic_content: false
    };
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
        <div className="content-body">
          <div className="container-fluid">
            <Form className="add-question">
              <FormGroup controlId="formBasicText">
                <div className="row fields">
                  <div className="col-md-6">
                    <div>
                      <ControlLabel>Statement</ControlLabel>{" "}
                    </div>
                    <RichTextEditor/>
                    {/*<div id={this.summerNote()}><p>Hello Summernote</p></div>*/}
                  
                  </div>
                </div>

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

                
               { this.state.graphic_content ? <div className="row fields">
                <div className="col-md-4">
                    <div>
                      <ControlLabel>Graphical Content</ControlLabel>
                      {"     "}
                    </div>

                    <Button block bsClass="xavor-style">Upload Content (.jpg .png .bmp)</Button>
                  </div>
                  </div>: console.log("") }
                  



              </FormGroup>
            </Form>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AddQuestion;
