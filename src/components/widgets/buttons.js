import React from 'react';
import './widgets.css'
import {Number} from "./texts";

export function BitButton(props) {
    return (
        <button className='three-d' onClick={props.onClick}>{props.text}</button>
    )
}

const bitColors = ["#de3f2e", "#008aca", "#c3b82c", "#e95d24", "#fbbc33", "#de3f2e", "#008aca", "#c3b82c"];

export class Byte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bits: new Array(8).fill(0),
        }
    }

    handleBitClick = index => {
        console.log(index);
        const newBits = this.state.bits;
        newBits[index] = newBits[index] === 0 ? 1 : 0;
        this.setState({bits: newBits});
        if (byteIsNum(this.state.bits, this.props.value)) {
            this.props.onSolved();
            this.setState({bits: new Array(8).fill(0)})
        }
        this.props.onAction();
    };

    render() {
        const bits = [];
        this.state.bits.forEach((bit, index) => {
            bits.push(
                <Bit key={index} value={bit} onClick={() => this.handleBitClick(index)} color={bitColors[index]}/>
            )
        });
        const num = this.props.calcOn ? byteToNum(this.state.bits) : this.props.value;
        return (
            <div className="byte">
                {bits}
                <Number value={num}/>
            </div>
        )
    }
}

function Bit(props) {
    return (
        <button className="bit" onClick={props.onClick} style={{backgroundColor: props.color}}>{props.value}</button>
    )
}

function byteIsNum(byteArr, num) {
    const ans =byteToNum(byteArr);
    console.log(`Actual num: ${num},  From bytes: ${ans}`);
    return num === ans;
}

function byteToNum(byteArr) {
    const temp = [...byteArr];
    let ans = 0;
    temp.reverse().forEach((value, index) => {
        ans += value * Math.pow(2, index);
    });
    return ans;
}