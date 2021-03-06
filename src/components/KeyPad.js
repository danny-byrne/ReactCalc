import React, { Component } from 'react';

class KeyPad extends Component {
    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}

export default KeyPad;


// render() {
//     const buttonsArray = ["(","CE",")", "C", "1", "2", "3","+","4","5","6","-","7","8","9","*",".","0","=","/"];
    
//     // for(let i = 0; i < buttonsArray.length; i++){
//     //     i+1 % 4 === 0 ? 

//     // }
//     const buttons = buttonsArray.forEach((e, i=0)=> {
//         i++;
//         if(i % 4 === 0) return <><button name = {`${e}`} onClick={e => this.props.onClick(e.target.name)}>{e}</button><br/></>
//         else return <><button name = {`${e}`} onClick={e => this.props.onClick(e.target.name)}>{e}</button></>
//     })
//     console.log(buttons)
//     return (
//         <div className = "button"> 
//             {buttons}
//         </div>
//     );
// }