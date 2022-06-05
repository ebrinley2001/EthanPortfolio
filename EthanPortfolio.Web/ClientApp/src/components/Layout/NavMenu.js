import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <>
            <span className="using">
                <span className="AltColor">using </span> <span >Portfolio;</span>
            </span>
            <ul className="NavMenu">
                    <li className="horizontalList">
                        <Link to="Home" smooth={true} spy={true} duration={500}>.Home()</Link>
                </li>
                <li className="horizontalList">
                        <Link to="About" smooth={true} spy={true} duration={500} offset={-80}>.About()</Link>
                </li>
                <li className="horizontalList">
                        <Link to="Resume" smooth={true} spy={true} duration={500} offset={-80}>.Resume()</Link>
                </li>
                </ul>
            </>
        );
    }
}