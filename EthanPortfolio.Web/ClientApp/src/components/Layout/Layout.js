import React, { Component } from 'react';
import Links from './Links.js';
import NavMenu from './NavMenu.js'
import "./Layout.css";

export default class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <header className="Nav">
                <NavMenu/>
                <Links/>
                <div className="Rectangle"/>
            </header>
        );
    }
}