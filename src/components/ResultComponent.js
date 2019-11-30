import React, { Component } from 'react';

class ResultComponent extends Component {
    render() {
        //pull result from props
        const { result }  = this.props;
        //return a div with the classname results and results in jsx bracets
        return (
            <div className = 'results'>
                <p>{result}</p>
            </div>
        )
    }   
}

export default ResultComponent;