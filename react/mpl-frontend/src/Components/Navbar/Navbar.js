import Dropdown from "./Links/Dropdown";
import SimpleLink from "./Links/SimpleLink";
import "./Navbar.css";

function Navbar(){
    const simpleLinks = ["Principal","Quem somos", "Parceiros", "OAB", "Fale conosco"];
    const dropdown = ["Seguros","Sinistros"];


    return (<nav className="navbar">
        <SimpleLink links = {simpleLinks[0]}/>
        <SimpleLink links = {simpleLinks[1]}/>
        <Dropdown links = {dropdown[0]} />
        <SimpleLink links = {simpleLinks[2]}/>
        <Dropdown links = {dropdown[1]}/>
        <SimpleLink links = {simpleLinks[3]}/>
        <SimpleLink links = {simpleLinks[4]}/>
        {/*fbicon*/}
    </nav>);
}

export default Navbar;