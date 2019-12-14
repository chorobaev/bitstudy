import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "../components/Menu/Menu";
import SignIn from "../components/SignIn/SignIn";
import Game from "../components/Game/Game";

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/game" component={Game} isPrivate/>

            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={SignIn} />
        </Switch>
    );
}