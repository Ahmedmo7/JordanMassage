import React, { useEffect, useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolled(position > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 px-5 ${scrolled ? "shadow navbar-scrolled" : "navbar"}`}
    >
      <Navbar.Brand
        href="#home"
        className="d-flex flex-column justify-content-center"
      >
        <img
          width="120"
          height="auto"
          src="logo.png"
          className={`mx-auto ${scrolled ? "logo-scrolled" : "logo"}`}
          alt="Jordan Brisson, RMT"
        />
        <p
          className={`mx-auto my-0 text p-2 ${
            scrolled ? "logo-scrolled" : "logo"
          }`}
          style={{ fontSize: "1rem" }}
        >
          <i>Jordan Brisson, RMT</i>
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="#home" className="px-4 py-2 py-lg-0">
          <h5>Home</h5>
        </Nav.Link>
        <Nav.Link href="#about" className="px-4 py-2 py-lg-0">
          <h5>About</h5>
        </Nav.Link>
        <Nav.Link href="#services" className="px-4 py-2 py-lg-0">
          <h5>Services</h5>
        </Nav.Link>

        <Button
          className="d-lg-none w-100 my-2"
          variant={scrolled ? "dark" : "outline-light"}
          size="lg"
          href="https://www.picktime.com/mobile"
          target="_blank"
        >
          Book Now
        </Button>
      </Navbar.Collapse>

      <Button
        className="ml-auto d-none d-lg-block"
        variant={scrolled ? "dark" : "outline-light"}
        size="lg"
        href="https://www.picktime.com/mobile"
        target="_blank"
      >
        Book Now
      </Button>
    </Navbar>
  );
}

export default NavBar;
