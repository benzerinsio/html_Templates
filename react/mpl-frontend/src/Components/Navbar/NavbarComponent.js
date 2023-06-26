import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
/*import Dropdown from "./Links/Dropdown";
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
        {/*fbicon
export default Navbar;
*/
