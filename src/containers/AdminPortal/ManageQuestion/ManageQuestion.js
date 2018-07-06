import React, { Component } from 'react';
import Aux from '../../Auxilary/Auxilary';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ReactTable from 'react-table';
import './ManageQuestion.css';

const fakeData = [
    { statement: "Who are you?", section: 'Part A' },
    { statement: "What are you?", section: 'Part A' },
    { statement: "Why are you?", section: 'Part A' },
    { statement: "Who's the boss?", section: 'Part A' },
    { statement: "Do you like React?", section: 'Part B' },
    { statement: "Do you like Node Js?", section: 'Part B' },
    { statement: "When did something start out badly for you but\r in the end it was great?", section: 'Part C' },
    { statement: "What are some red flags to watch out for in daily life?", section: 'Part A' },
    { statement: "Where do you get your news?", section: 'Part A' },
    { statement: "What’s wrong but sounds right?", section: 'Part A' },
    { statement: "What’s the most epic way you’ve seen someone quit or be fired?", section: 'Part A' },
    { statement: "What food have you never eaten but would really like to try?", section: 'Part C' },
    { statement: "Which celebrity do you think is the most down to earth?", section: 'Part C' },
    { statement: "What’s the spiciest thing you’ve ever eaten?", section: 'Part B' },
    { statement: "What’s the most expensive thing you’ve broken?", section: 'Part B' },
    { statement: "What’s the most expensive thing you’ve broken?", section: 'Part B' }
  ];
class ManageQuestion extends Component{
    state = {
        show: false,
        columns: [
          {
            Header: "Question Statement",
            headerClassName: "table-header-grid",
            accessor: "statement",
            show: true
          },
          {
            Header: "Section",
            accessor: "section",
            headerClassName: "table-header-grid",
            show: true
          },
          {
            Header: "Details",
            headerClassName: "table-header-grid",
            Cell: row => (
                <div>
                  <Button bsStyle="link" onClick={this.handleEditOperation}>View</Button>             
                </div>
              )
          },
          {
            Header: "Action",
            headerClassName: "table-header-grid",
            Cell: row => (
              <div>
                <Button bsStyle="link" onClick={this.handleEditOperation}>Edit</Button>
                <Button bsStyle="link" onClick={this.handleDeleteOperation}>Delete</Button>
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
    
    render(){
        return(
            <Aux>
                
                    <Breadcrumb className="bread-crumb">
            
                    <Breadcrumb.Item href="/admin-portal/home/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/admin-portal/home/manage-questions">Manage Questions</Breadcrumb.Item>
                    <Breadcrumb.Item className="current-node" active href="/admin-portal/home/manage-questions">Add Question</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content-body">
                    <div className="admin-tools">
                    <div className="add-button">
                            <span className="glyphicon glyphicon-plus"></span>
                            <Link to="/admin-portal/home/manage-questions/add-question/">  Add a new question...</Link>
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
                        <ReactTable className="table-grid" data={fakeData} minRows={0} columns={this.state.columns} />
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ManageQuestion;