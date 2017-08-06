import React from 'react'
import './counter.scss'

class Counter extends React.Component {
    state = {
        sumNumber: 0
    } 

    clikedButton = () => {
        var number1 = +this.refs.input1.value;
        var number2 = +this.refs.input2.value;
       
        var newState = {
            sumNumber: number1 + number2
        }
        
        this.setState(newState);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="fields_wrapper">
                    <input className="field field1"  type="text" ref="input1" />
                    <div className="button" onClick={this.clikedButton}>
                        +
                    </div>
                    <input className="field field2" type="text" ref="input2" />
                </div>
                <h2 className="text">
                    Result is {this.state.sumNumber}
                </h2>
            </div>
        )
    }
}

export default Counter
