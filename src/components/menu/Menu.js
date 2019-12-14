import React from 'react';
import logo from '../../static/logo-big.png';
import {BitButton} from "../widgets/buttons";
import history from "../../services/history";
import "../shared.css";
import './Menu.css';

class Menu extends React.Component {

    handlePlay() {
        history.push({
            pathname: "/bitstudy/game",
            state: {}
        })
    }

    handleHelp() {
        history.push("/bitstudy/help")
    }

    handleAbout() {
        history.push("/bitstudy/about")
    }

    render() {
        return (
            <header className="main">
                <img src={logo} className="App-logo" alt="logo"/>
                <BitButton onClick={this.handlePlay} text='Play'/>
                <div className="separator-margin"/>
                <BitButton onClick={this.handleHelp} text='Help'/>
                <div className="separator-margin"/>
                <BitButton onClick={this.handleAbout} text='About'/>
            </header>
        );
    }
}

export default Menu;
