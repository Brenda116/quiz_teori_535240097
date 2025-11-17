'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar expand="lg" className="navbar-editorial" style={{ zIndex: 4 }}>
      <Container fluid>
        
        <a href="/" className="brand-oval">
        Nostra Élise
        </a>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          {/* NAV ITEMS */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="navlink-custom">Home</Nav.Link>
            <Nav.Link href="/articles" className="navlink-custom">Articles</Nav.Link>
            <Nav.Link href="/lookbook" className="navlink-custom">Contact Us</Nav.Link>

            <NavDropdown 
              title="Lookbook"
              id="navbarScrollingDropDown"
              className="nav-dropdown-custom navlink-custom"
            >
              <NavDropdown.Item href="/catalog">Woman</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* SEARCH FORM */}
          <Form className="d-flex ms-4">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="btn-search ms-2">
              Search
            </Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;