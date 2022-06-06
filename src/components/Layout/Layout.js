import Links from './Links.js';
import NavMenu from './NavMenu.js'
import "./Layout.css";

function Layout() {
    return (
        <header className="Nav">
            <NavMenu/>
            <Links/>
            <div className="Rectangle"/>
        </header>
    );
}

export default Layout;