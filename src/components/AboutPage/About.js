import "./About.css";

function About() {
    return (
        <>
            <div className="AboutText" id="About">
                <span className="AltColor">public class </span><span>About</span>
            </div>
            <span className="AboutTextBracket">{String.fromCharCode(123)}</span>
            <div className="AboutTextProps">
                <span className="AltColor">public string </span><span>Career </span><span className="AltColor">= </span><span>"I am primarily a backend .Net Developer but I also work with other languages like Python and Javascript.";</span>
            </div>
            <div className="AboutTextProps">
                <span className="AltColor">public string </span><span>BirthPlace </span><span className="AltColor">= </span><span>"I was born in Barberton Ohio and have lived here ever since.";</span>
            </div>
            <div className="AboutTextProps">
                <span className="AltColor">public string </span><span>Background </span><span className="AltColor">= </span><span>“I started out with Python when I was in a  CS program in High School. Ever since then I’ve been learning different languages and the technologies associated with professional development in an effort to make this my career.”;</span>
            </div>
            <span className="AboutTextBracket">{String.fromCharCode(125)};</span>
            <div className="colorLine" />
        </>
    );
}

export default About;