import React, { Component } from "react";
import MiniBlock from "../MiniBlock/index";
import "./index.scss";
class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Popular container1200">
                <MiniBlock />
                <MiniBlock />
                <MiniBlock />
                <MiniBlock />
                <MiniBlock />
                <MiniBlock />
            </div>
        );
    }
}

export default Popular;
