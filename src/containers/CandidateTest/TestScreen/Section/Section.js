import React, { Component } from 'react';
import Aux from '../../../Auxilary/Auxilary';
import Questions from '../Questions/Questions';
import Timer from '../Timer/Timer';
import { Button, Radio, FormGroup } from 'react-bootstrap';



class Section extends Component{

    render(){
        return(
            <Aux>
                 <div className="question-timer">
                    <Questions/>
                    <Timer/>
                    
                </div>
                <div className="test-window">
                    <div className="statement-and-timer">
                    <div className="test-question-statement">
                        <h2><label>Test Question Statement</label></h2>
                    </div>
                    <div className="section-timer">
                        <h3>00:00</h3>
                    </div>
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

export default Section;