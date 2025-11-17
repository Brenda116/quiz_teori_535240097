'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";

function LookSection() {
    const lookbookItems = [
        {
            title: "Crimson Winter Collection",
            img: "/images/lookbook1.jpg",
            desc: "Bold reds and warm textures for Winter 2025. Perfect for confident, statement looks.",
            link: "#"
        },
        {
            title: "Neutral Elegance",
            img: "/images/lookbook2.jpg",
            desc: "Soft earth tones and minimal silhouettes blending modern and classic styles.",
            link: "#"
        },
        {
            title: "Pastel Dreams",
            img: "/images/lookbook3.jpg",
            desc: "Light pastel shades with delicate layering for a dreamy, sophisticated look.",
            link: "#"
        },
    ];

    return (
        <section style={{ backgroundColor: "var(--espresso)", color: "var(--sand)" }}>
        <Container className="my-5">
            <Row className='mb-4'>
                <Col md={12} className="text-center">
                    <h2 className="font-grandstander mt-5" style={{ color: "var(--sand)" }}>
                        Our Lookbook
                    </h2>
                    <p className="font-averia" style={{ color: "var(--sand)" }}>
                        Explore curated outfits and seasonal collections from Nostra Élise.
                    </p>
                </Col>
            </Row>
            <Row>
                {lookbookItems.map((item, idx) => (
                    <Col md={4} className="mb-4" key={idx}>
                        <Card className="h-100 shadow-sm" style={{ backgroundColor: "var(--espresso)", color: "var(--sand)", border: "1px solid rgba(255,255,255,0.2)" }}>
                            <Card.Img variant="top" src={item.img} style={{ height: '450px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="font-lora" style={{ color: "var(--sand)" }}>{item.title}</Card.Title>
                                <Card.Text className="font-poppins" style={{ color: "var(--sand)" }}>{item.desc}</Card.Text>
                                <Button 
                                    variant="light" 
                                    href={item.link}
                                    style={{ fontFamily: "var(--font-averia)", color: "var(--espresso)" }}
                                >
                                    View Collection
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="mt-4">
                <Col className="text-center">
                    <Button 
                        className='mb-5'
                        size="lg" 
                        href="/lookbook"
                        style={{ backgroundColor: "var(--sand)", fontFamily: "var(--font-averia)", color: "var(--moss)", borderColor: "var(--sand)" }}
                    >
                        See More Outfits
                    </Button>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default LookSection;