import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import Popular from "../Routes/Popular";
import "./style.scss";

function Application() {
    const user = useContext(UserContext);
    return (
        <div className="Application">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Popular />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default Application;
