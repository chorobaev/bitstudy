import React from "react";
import {Switch} from "react-router-dom";
import Route from "./Route";

import Menu from "../components/menu/Menu";
import Game from "../components/game/Game";
import Help from "../components/help/Help";
import About from "../components/about/About";

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Menu}/>
            <Route path="/bitstudy/help" component={Help}/>
            <Route path="/bitstudy/game" component={Game}/>
            <Route path="/bitstudy/about" component={About}/>

            <Route component={Menu}/>
        </Switch>
    );
}