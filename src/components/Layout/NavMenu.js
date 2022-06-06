import { Link } from 'react-scroll';

function NavMenu() {
    return (
        <>
        <div className="using">
            <span className="AltColor">using </span> <span >Portfolio;</span>
        </div>
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

export default NavMenu;