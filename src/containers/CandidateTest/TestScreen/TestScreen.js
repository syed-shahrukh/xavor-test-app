import React, { Component } from 'react';
import { Button, Radio, FormGroup } from 'react-bootstrap';
import Aux from '../../Auxilary/Auxilary';
import { Redirect } from 'react-router-dom';
 
import './TestScreen.css';

class TestScreen extends Component{
    
    state = {
        total_questions:60,
        current_question:1,
        time: 5,
        minutes: null,
        seconds: null
    };
    changeQuestion = () => {
        const question = this.state.current_question;
        this.setState({current_question: question+1});
    };
    componentDidMount(){
        const self = this;
        
        
       let timer = setInterval(function() {
            const newTime = self.state.time -1;
            const minute = Math.floor(self.state.time/60);
            const second = ("0" + self.state.time%60).slice(-2);
            self.setState({minutes: minute, seconds: second, time: newTime},() =>{
                console.log("Value of state Time: " + self.state.time);
            });
            
          
        }, 1000)
    }
   
    render(){
        
        return(
            <Aux>
                <div className="question-timer">
                    <div className="question-number">
                        <h3>Question {this.state.current_question}/{this.state.total_questions}</h3>
                    </div>
                    <div className="test-timer">
                        {this.state.time === 0 ?  <Redirect to='/' /> : console.log("Some Error Occured")}
                        <h3>{this.state.minutes}:{this.state.seconds}</h3>
                    </div>
                </div>
                <div className="test-window">
                    <div className="test-question-statement">
                        <h2><label>Test Question Statement</label></h2>
                    </div>
                    <div className="question-options">
                    
                    <FormGroup>
                        <Radio name="radioGroup">
                            Option 1
                        </Radio>{' '}
                        <Radio name="radioGroup">
                            Option 2
                        </Radio>{' '}
                        <Radio name="radioGroup">
                            Option 3
                        </Radio>
                    </FormGroup>
                    </div>
        {/****************************************Next Question Button************************************************/}
                    <div className="next-question-button-container">
                        <Button onClick={this.changeQuestion} bsClass="xavor-style">Next</Button>
                    </div>
        {/*********************************End of Next Question Button************************************************/}
                </div>
                
            </Aux>

        );
    }
}

export default TestScreen;