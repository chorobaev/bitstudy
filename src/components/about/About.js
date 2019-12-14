import React from "react";
import logo from "../../static/logo-big.png";

export default function About(props) {

    return (
        <div className="main">
            <img src={logo} className="App-logo" alt="logo"/>
            <h3 className="title">About</h3>
            <div className="content">
                <p>
                    This game was created to heps students how is new in binary world.
                </p>
                <p>
                    Bit Study is steel being developed.
                </p>
                <p>
                    If you have any suggestions you can reach me at
                    <a href="https://gmail.com" style={{color: "white"}}>
                        chorobaev.nurbol@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}