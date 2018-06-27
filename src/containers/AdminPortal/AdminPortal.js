import React, { Component } from 'react';
import Aux from '../Auxilary/Auxilary';
import Sidemenu from './SideMenu/SideMenu';
import Navbar from '../Navbar/Navbar';
import { Switch, Route, Link} from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import AdminHome from './AdminHome/AdminHome';
import ManageSection from './ManageSection/ManageSection';
import ManageQuestion from './ManageQuestion/ManageQuestion';
import ManageCandidate from './ManageCandidate/ManageCandidate';
import './AdminPortal.css';



class AdminPortal extends Component{
    constructor(){
        super();
        this.setContentId = this.setContentId.bind(this);
    }

    

    state = {
        width: '0',
        marginLeft:'0px',
        class:'',
        isOpen: false,
        componentToLoad:'none',
        key: 'undefined'
    }
    openSidebar = () => {
        if (this.state.isOpen === false){
            this.setState({isOpen: true, width:'180px', marginLeft:'180px', class:'open'})
        }
        else{
            this.setState({isOpen: false, width:'0px', marginLeft:'0px', class:''})
        }
    }
    setContentId(newID){
      this.setState({key: newID}, () => {console.log(`The param value is ${newID}  Component in Admin Portal with id ${this.state.key} is loaded...`)});        
    }  


    render(){
        return(
            <Aux>
                {console.log(window.location.href)}
                <Navbar title="Admin Portal">
                  
                        <div className="greeting-statement">
                        
                        <span><b>Welcome, Admin</b></span>
                                  
                        <Link to="/account-type"><i className="fas fa-sign-out-alt"></i></Link>
                                  
                        </div>
                </Navbar>
                <Sidemenu width={this.state.width}
                    changeContent = {this.setContentId}
                marginLeft={this.state.marginLeft}
                class={this.state.class}
                isOpen={this.state.isOpen}
                click={this.openSidebar}/>

                <div id="main" style={{marginLeft: this.state.marginLeft}}>
                
               
                <Switch>
                    <Route exact path={`/admin-portal/home/`} component={AdminHome} />
                    <Route exact path={`/admin-portal/home/manage-sections`} component={ManageSection} />
                    <Route exact path={`/admin-portal/home/manage-questions`} component={ManageQuestion} />
                    <Route exact path={`/admin-portal/home/manage-candidates`} component={ManageCandidate} />
            </Switch>
                </div>
                
            </Aux>
            
        );
    }
}

export default AdminPortal;