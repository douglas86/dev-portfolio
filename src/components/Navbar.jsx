import { Navbar, Nav } from "react-bootstrap";
import LinkinLogo from "../images/Linkdin.png";
import github from "../images/github.png";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Online sites">Online sites</Nav.Link>
            <Nav.Link href="#github sites">Github Projects</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer Work</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/douglas-maxton-58134b170/">
              <img height="25px" width="25px" src={LinkinLogo} alt="linkdin" />
            </Nav.Link>
            <Nav.Link href="https://github.com/douglas86">
              <img height="25px" width="25px" src={github} alt="linkdin" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
