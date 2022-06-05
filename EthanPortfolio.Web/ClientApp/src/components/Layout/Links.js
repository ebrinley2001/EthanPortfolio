import React, { Component } from 'react';
import linkedinLogo from './images/linkedinLogo.png';
import gmailLogo from './images/gmailLogo.png';
import githubLogo from './images/githubLogo.png';

export default class Links extends Component {
    static displayName = Links.name;

    render() {
        return (
            <ul className="Links">
                <li className="horizontalList">
                    <a href='https://www.linkedin.com/in/ethan-brinley-2001'>
                        <img src={linkedinLogo} alt="Linkedin Logo" />
                    </a>
                </li>
                <li className="horizontalList">
                    <a href='mailto:brinleyethan@gmail.com' >
                        <img src={gmailLogo} alt="Gmail Logo" />
                    </a>
                </li>
                <li className="horizontalList">
                    <a href='https://github.com/ebrinley2001?tab=repositories' >
                        <img src={githubLogo} alt="Github Logo" />
                    </a>
                </li>
            </ul>
        );
    }
}