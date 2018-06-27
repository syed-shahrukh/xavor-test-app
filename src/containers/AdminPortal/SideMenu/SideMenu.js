import React, { Component } from 'react';
import './SideMenu.css';
import Aux from '../../Auxilary/Auxilary';
import { Link, StaticRouter } from 'react-router-dom';



class Sidemenu extends Component{
    state = {
        activeKey:''
    }
    setActiveKey = (key) =>{
                this.setState({activeKey: key}, ()=> {this.props.changeContent(this.state.activeKey)});

                
    }
    render(){

        return(
            <Aux>
                <div id="mySidenav" className="sidenav" style={{width: this.props.width}}>
                
                <Link to='manage-sections' className={this.state.activeKey === '1' ? "active" : ""} onClick={() => {this.setActiveKey('1')}} >Manage Sections</Link>
                
                <Link  to="manage-questions" className={this.state.activeKey === '2' ? "active" : ""} onClick={() => {this.setActiveKey('2')}} >Manage Questions</Link>
                <Link to="manage-candidates" className={this.state.activeKey === '3' ? "active" : ""} onClick={() => {this.setActiveKey('3')}} >Manage Candidates</Link>
                <Link to="settings" className={this.state.activeKey === '4' ? "active" : ""} onClick={() => {this.setActiveKey('4')}} >Settings</Link>
                
                </div>

                {/*<!-- Use any element to open the sidenav -->*/}
                <div id="nav-icon1" className={this.props.class} onClick={this.props.click} style={{marginLeft: this.props.marginLeft}} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/*<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->*/}
                
                
            </Aux>
        );
    }
}

export default Sidemenu;