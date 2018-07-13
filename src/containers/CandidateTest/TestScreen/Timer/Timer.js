import React, { Component } from 'react';
import Aux from '../../../Auxilary/Auxilary';
import { Redirect } from 'react-router-dom';

class Timer extends Component{

    render(){
        return(
            <Aux>
                <div className="test-timer">
                       
                        <h3>00:00</h3>
                    </div>
            </Aux>
        );
    }
}

export default Timer;