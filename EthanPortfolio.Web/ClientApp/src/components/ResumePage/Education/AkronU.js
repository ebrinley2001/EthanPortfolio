import React, { Component } from 'react';

export default class PartnerServices extends Component {
    static displayName = PartnerServices.name;

    render() {
        return (
            <>
                <div className="ResumeTextProps">
                    <span className="AltColor">public Education </span><span>The University of Akron </span><span className="AltColor">= </span><span>{String.fromCharCode(123)}</span>
                </div>
                <div className="ResumeTextProps">
                    <span>Major </span><span className="AltColor">= </span><span>"Cyber Security",</span>
                </div>
                <div className="ResumeTextProps">
                    <span>Minor </span><span className="AltColor">= </span><span>"Programming",</span>
                </div>
                <div className="ResumeTextProps">
                    <span>TimeSpan </span><span className="AltColor">= </span><span>"August 2019 - May 2023 Est.",</span>
                </div>
                <span className="ResumeTextBracketClose">{String.fromCharCode(125)};</span>
            </>
        );
    }
}