import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="py-3 px-5">
      <Navbar.Brand
        href="/"
        className="d-flex flex-column justify-content-center"
      >
        <img width="120" height="auto" src="logo.png" className="mx-auto" />
        <p className="mx-auto my-0 text p-2" style={{ fontSize: "1rem" }}>
          <i>Jordan Brinsson</i>
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/" className="px-4 py-2 py-lg-0">
          Home
        </Nav.Link>
        <Nav.Link href="/about" className="px-4 py-2 py-lg-0">
          About
        </Nav.Link>
        <Nav.Link href="/services" className="px-4 py-2 py-lg-0">
          Services
        </Nav.Link>

        <Button
          className="d-lg-none w-100 my-2"
          variant="dark"
          href="https://www.picktime.com/mobile"
          target="_blank"
        >
          Book Now
        </Button>
      </Navbar.Collapse>

      <Button
        className="ml-auto d-none d-lg-block"
        variant="dark"
        href="https://www.picktime.com/mobile"
        target="_blank"
      >
        Book Now
      </Button>
    </Navbar>
  );
}

export default NavBar;
