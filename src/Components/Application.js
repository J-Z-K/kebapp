import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn"
import SignUp from "./SignUp";
import PasswordReset from './PasswordReset';
import ProfilePage from "./ProfilePage";
import { UserContext } from '../Providers/UserProvider';

function Application(){
    const user = useContext(UserContext);

    return (
        user ?
        <ProfilePage/>
        :
        <Router>
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/" component={SignIn} />
            <Route exact path="/passwordReset" component={PasswordReset} />
        </Router>
    )
}
export default Application;
