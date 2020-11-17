import React from "react";
import logo from "../../img/2f71612d-217d-4f47-ae41-f605025541e7.png";
import "./style.scss";
import { NavLink } from "react-router-dom";
import UserBar from "./UserBar";

const MenuBar = () => {
    return (
        <header>
            <div className="l">
                <div className="logo">
                    <img src={logo} alt="logo kebapp" />
                    <h1>kebapp</h1>
                </div>
                <div className="menu">
                    <NavLink exact to="/" activeClassName="selected">
                        Popularne
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink exact to="/w-mojej-okolicy" activeClassName="selected">
                        W mojej okolicy
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink exact to="/wyszukiwarka" activeClassName="selected">
                        Wyszukiwarka
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink exact to="/dodaj-kebaba" activeClassName="selected">
                        Dodaj kebaba
                    </NavLink>
                </div>
            </div>
            <div className="r">
                <UserBar />
            </div>
        </header>
    );
};
export default MenuBar;
