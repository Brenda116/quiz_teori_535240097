'use client'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

export default function AboutPage() {
  return (
    <section style={{ backgroundColor: "var(--sand)", color: "var(--espresso)", padding: "4rem 0" }}>
      <Container>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="font-grandstander mb-3" style={{ color: "var(--espresso)" }}>
              About Nostra Élise
            </h1>
            <p className="font-averia mx-auto" style={{ maxWidth: "700px", color: "var(--espresso)" }}>
              Nostra Élise is a curated fashion lookbook showcasing seasonal collections, bold statements, and timeless elegance. 
              Our mission is to inspire style enthusiasts with outfit ideas and fashion insights for every occasion.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4">
            <Image 
              src="/images/about.jpg" 
              alt="About Fashion Lookbook" 
              width={600} 
              height={400} 
              style={{ width: "100%", borderRadius: "1rem", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="font-lora mb-3" style={{ color: "var(--espresso)" }}>Our Vision</h2>
            <p className="font-poppins" style={{ color: "var(--espresso)" }}>
              To celebrate creativity in fashion, combining modern trends with classic aesthetics. 
              Every collection is thoughtfully designed to inspire confidence and individuality.
            </p>
            <Button 
              href="/contact"
              style={{
                backgroundColor: "var(--espresso)",
                color: "var(--sand)",
                border: "1px solid var(--espresso)",
                fontFamily: "var(--font-averia)",
                padding: "0.5rem 2rem",
                marginTop: "1rem"
              }}
            >
              Contact Us
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="text-center">
            <h2 className="font-lora mb-3" style={{ color: "var(--espresso)" }}>Why Choose Us?</h2>
            <p className="font-poppins mx-auto" style={{ maxWidth: "700px", color: "var(--espresso)" }}>
              We focus on quality, aesthetics, and inspiration. Our lookbooks are curated to provide outfit ideas for every season and every style preference.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}