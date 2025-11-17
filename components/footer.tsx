"use client";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: "var(--sand)", 
        color: "var(--espresso)", 
        padding: "2rem 0",
        fontFamily: "var(--font-poppins)"
      }}
    >
      <Container className="text-center">

        <h3 className="font-lora mb-3" style={{ fontStyle: "italic", letterSpacing: "0.5rem" }}>
          Nostra Élise
        </h3>

        <ul 
          className="list-unstyled d-flex justify-content-center gap-4 mb-3"
          style={{ padding: 0 }}
        >
          <li><a href="#" style={{ color: "var(--espresso)", textDecoration: "none" }}>Home</a></li>
          <li><a href="#" style={{ color: "var(--espresso)", textDecoration: "none" }}>Articles</a></li>
          <li><a href="#" style={{ color: "var(--espresso)", textDecoration: "none" }}>Lookbook</a></li>
          <li><a href="#" style={{ color: "var(--espresso)", textDecoration: "none" }}>Contact Us</a></li>
        </ul>

        <div className="mb-3">
          <a href="#" className="mx-2" style={{ color: "var(--espresso)" }}><i className="bi bi-facebook fs-4"></i></a>
          <a href="#" className="mx-2" style={{ color: "var(--espresso)" }}><i className="bi bi-twitter fs-4"></i></a>
          <a href="#" className="mx-2" style={{ color: "var(--espresso)" }}><i className="bi bi-instagram fs-4"></i></a>
        </div>

        <p className="mb-0 small">
          Brenda Anastasya - 535240097 - Fashion Lookbook
        </p>
      </Container>
    </footer>
  );
}