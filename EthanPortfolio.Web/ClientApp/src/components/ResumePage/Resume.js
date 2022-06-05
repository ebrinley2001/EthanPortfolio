import React, { Component } from 'react';
import PartnerServices from './Jobs/PartnerServices';
import AkronU from './Education/AkronU';
import Skills from './Skills/Skills';
import "./Resume.css";

export default class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <>
                <div className="ResumeText" id="Resume">
                    <span className="AltColor">public class </span><span>Resume</span>
                </div>
                <PartnerServices />
                <AkronU />
                <Skills />
                <span className="ResumeTextBracket">{String.fromCharCode(125)};</span>
                <div className="colorLine" />
            </>
        );
    }
}