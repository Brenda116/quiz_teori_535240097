'use client'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <section style={{ backgroundColor: "var(--sand)", color: "var(--espresso)", padding: "4rem 0" }}>
            <Container>
                <Row className='mb-4'>
                    <Col md={12} className="text-center">
                        <h2 className="font-grandstander mb-3" style={{ color: "var(--espresso)" }}>
                            Get in Touch
                        </h2>
                        <p className="font-averia" style={{ color: "var(--espresso)" }}>
                            Have questions, suggestions, or want to collaborate? Send us a message!
                        </p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Card style={{ backgroundColor: "var(--espresso)", color: "var(--sand)", borderRadius: "1rem", padding: "2rem" }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className="font-poppins">Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your name" 
                                        required 
                                        style={{ borderRadius: "0.5rem", border: "1px solid var(--sand)" }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="font-poppins">Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        required 
                                        style={{ borderRadius: "0.5rem", border: "1px solid var(--sand)" }}
                                    />
                                </Form.Group>    
                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label className="font-poppins">Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={6} 
                                        placeholder="Enter your message" 
                                        required 
                                        style={{ borderRadius: "0.5rem", border: "1px solid var(--sand)" }}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <Button 
                                        type="submit" 
                                        style={{ 
                                            backgroundColor: "var(--sand)", 
                                            color: "var(--espresso)", 
                                            border: "1px solid var(--espresso)", 
                                            fontFamily: "var(--font-averia)",
                                            padding: "0.5rem 2rem"
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Form> 
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection;