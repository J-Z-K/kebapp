import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faSignInAlt,
    faSignOutAlt,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Providers/UserProvider";
import Login from "../Login/index";
import { auth } from "../../firebase";

const UserBar = () => {

    const user = useContext(UserContext);
    const [popUp, setPopUp] = useState(false);
    const onClickHandler = () => {
        setPopUp(!popUp);
    };

    const loggOutHandler = () => {
        auth.signOut();
    };

    const closeHandler = () => {
        setPopUp(false);
    };

    if (user) {
        const { displayName } = user;
        return (
            <div className="userInfo">
                {/* <FontAwesomeIcon icon={faUserCircle} /> */}
                <div className="userName">{displayName}</div>
                <div className="loginButton">
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        onClick={loggOutHandler}
                    />
                </div>
            </div>
        );
    } else
        return (
            <>
                <div className="loginButton" onClick={onClickHandler}>
                    <p>login</p>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </div>
                {popUp && !user ? (
                    <div className="loginBox">
                        {/* <h1>Wybierz opcje logowania</h1> */}
                        <Login props={closeHandler} />
                        <div className="closeButton" onClick={closeHandler}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                ) : null}
            </>
        );
};

export default UserBar;
