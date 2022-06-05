import React, { Component } from 'react';
import "./Home.css";

export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <div className="IntroText" id="Home">
                    <span className="AltColor">string </span><span>name </span><span className="AltColor">= </span><span>"Ethan Brinley";</span>
                </div>
                <span className="IntroMethod1">
                    <span className="AltColor">public string </span><span>Introduction</span><span className="AltColor">(</span><span>name</span><span className="AltColor">)</span>
                </span>
                <span className="IntroMethod2">
                    <span>{String.fromCharCode(123)}</span>
                </span>
                <span className="IntroMethod3">
                    <span>$"My name is </span><span className="AltColor">{String.fromCharCode(123)}</span><span>name</span><span className="AltColor">{String.fromCharCode(125)} </span><span>and I am a .Net Developer";</span>
                </span>
                <span className="IntroMethod4">
                    <span>{String.fromCharCode(125)};</span>
                </span>
                <div className="colorLine"/>
            </>
        );
    }
}