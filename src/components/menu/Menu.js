import React from 'react';
import logo from '../../static/logo-big.png';
import './Menu.css';

class Menu extends React.Component {
    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </header>
            </div>
        );
    }
}

export default Menu;
