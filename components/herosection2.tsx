'use client'

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation'

export function HeroSection2() {
  
  const router = useRouter();

  return (
    <section 
      id="hero" 
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        height: '100vh',
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* DIM */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.70)',
          zIndex: 1
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
        <h1 
          className="font-grandstander"
          style={{
            color: "var(--sand)",
            fontSize: '4.8rem',
            fontWeight: 300,
            letterSpacing: '0.03em',
            lineHeight: '1.1',
            whiteSpace: "nowrap"
          }}
        >
          Welcome to <span className="font-lora" style={{ fontStyle: "italic", letterSpacing: "2px" }}>Nostra Élise</span>
        </h1>

        <p 
          className="font-averia mt-3"
          style={{ 
            color: "var(--sand)",
            fontSize: '1.2rem',
            letterSpacing: '0.02em',
            lineHeight: '1.6',
            whiteSpace: "nowrap"
          }}
        >
          A space where we share curated fashion stories, personal style notes, and our favorite fashion magazines
        </p>

        <Button 
          variant="outline-light" 
          size="lg" 
          className="lookbook-btn mt-4"
          onClick={() => router.push('/lookbook')}
          style={{
            padding: '0.6rem 2.4rem',
            borderRadius: 0,
            borderWidth: '1px',
            borderColor: 'var(--sand)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.9rem'
          }}
        >
          See Our Favorite Looks
        </Button>
      </div>
    </section>
  )
}

export default HeroSection2;