import React from "react";

import {Timer, Track} from "../widgets/texts";
import {Byte} from "../widgets/buttons";
import FinishDialog from "./FinishDialog";

import "./Game.css";
import logo from "../../static/logo-big.png";

const randomByte = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const arrayOfRandomBytes = size => {
    const nums = [];
    for (let i = 0; i < size; i++) {
        const unit = Math.floor(255 / size);
        const rem = 255 % size;
        const min = i * unit;
        const max = (i + 1) * unit + rem;
        nums.push(randomByte(min, max));
    }
    return nums;
};

const size = 10;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            size: size,
            level: 0,
            problems: arrayOfRandomBytes(size)
        };
    }

    componentDidMount() {
        this.restart();
    }

    startTimer = () => {
        const id = setInterval(() => {
            if (this.isFinished()) {
                clearInterval(id);
                return;
            }

            this.setState(prevState => ({time: prevState.time + 1}));
        }, 1000);
    };

    isFinished = () => this.state.level >= this.state.size;

    handleSolved = () => {
        this.setState(prevState => ({level: prevState.level + 1}));
    };

    restart = () => {
        this.setState({
            time: 0,
            level: 0,
            problems: arrayOfRandomBytes(this.state.size)
        });
    };

    handleByteClick = () => {
        if (this.state.time === 0) this.startTimer();
    };

    render() {
        const completed = this.state.level * 100.0 / this.state.size;
        const number = this.state.problems[this.state.level];
        const finished = this.isFinished();
        return (
            <div className="main">
                <FinishDialog time={this.state.time}
                              opened={finished}
                              onClose={this.restart}/>
                <div>
                    <Timer time={this.state.time}/>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="game">
                    <Track percentage={completed}/>
                    <div className="separator"/>
                    <div className="controller">
                        <Byte value={number}
                              onSolved={this.handleSolved}
                              onAction={this.handleByteClick}
                              calcOn={finished}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game