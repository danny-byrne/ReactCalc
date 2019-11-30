import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './components/KeyPad';
import ResultComponent from './components/ResultComponent';

//from https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ''
    }
  }

  onClick = button => {
    if(button ==='=') {
      this.calculate()
    }
    else if(button === "C"){
      this.reset()
    }
    else if (button ==="CE"){
      this.backspace()
    }
    else {
      console.log("this.state.result is", this.state.result)
      this.setState({
        result: this.state.result + button
      })
      
    }
  }

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line no-eval
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent  onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;