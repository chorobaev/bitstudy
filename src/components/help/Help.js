import React from "react";
import logo from "../../static/logo-big.png";

export default function Help() {
    return (
        <div className="main">
            <img src={logo} className="App-logo" alt="logo"/>
            <h3 className="title">Help</h3>
            <div className="content">
                <p>
                    Tha aim of this game is to equalize a given bite in binary number system
                    to a decimal number that is on the right side of the equality sign.
                </p>
                <p>
                    In order to win, you have to solve 10 problems step by step.
                    Given problems will get harder as you solve a problem.
                </p>
                <p>
                    An indicator of your success is the timer which determines your problem
                    solving speed.
                </p>
            </div>
        </div>
    );
}