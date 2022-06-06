
function Skills() {
    return (
        <>
            <div className="ResumeTextProps">
                <span className="AltColor">public List</span><span>{String.fromCharCode(60)}</span><span className="AltColor">string</span><span>{String.fromCharCode(62)} Skills </span><span className="AltColor">= new List</span><span>{String.fromCharCode(60)}</span><span className="AltColor">string</span><span>{String.fromCharCode(62)} </span><span>{String.fromCharCode(123)}</span>
            </div>
            <div className="ResumeTextProps">
                <ul className="VerticalList">
                    <li className="VerticalListItem">Azure Devops,</li>
                    <li className="VerticalListItem">Agile Development Process,</li>
                    <li className="VerticalListItem">Basic Design Patterns,</li>
                    <li className="VerticalListItem">Continuous Integration,</li>
                    <li className="VerticalListItem">Continuous Deployment,</li>
                    <li className="VerticalListItem">Basic Unit Testing,</li>
                    <li className="VerticalListItem">Version Control,</li>
                    <li className="VerticalListItem">Unix / Linux,</li>
                    <li className="VerticalListItem">AWS,</li>
                    <li className="VerticalListItem">Azure Active Directory]”</li>
                </ul>
            </div>
            <span className="ResumeTextBracketClose">{String.fromCharCode(125)};</span>
            <div className="ResumeTextProps">
                <span className="AltColor">public List</span><span>{String.fromCharCode(60)}</span><span className="AltColor">string</span><span>{String.fromCharCode(62)} Languages </span><span className="AltColor">= new List</span><span>{String.fromCharCode(60)}</span><span className="AltColor">string</span><span>{String.fromCharCode(62)} </span><span>{String.fromCharCode(123)}</span>
            </div>
            <div className="ResumeTextProps">
                <span>C#, Sql, Python, Html/CSS, Javascript, C++, Bash</span>
            </div>
            <span className="ResumeTextBracketClose">{String.fromCharCode(125)};</span>
        </>
    );
}

export default Skills;