import React from 'react';
import {Router} from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

import "./components/shared.css"

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Routes/>
            </div>
        </Router>
    );
}

export default App;