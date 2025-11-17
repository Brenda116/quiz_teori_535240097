"use client";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function ArticlesSection() {
  const articles = [
    {
        title: "Autumn Whispers",
        img: "images/article1.jpg",
        desc:
        "The warm amber leaves and soft golden light create a serene autumnal landscape. Each moment feels like a gentle embrace, evoking calmness and introspection while highlighting the understated beauty of fall fashion.",
        author: "Isabella Laurent",
        published: "October 12, 2023",
        link: "#",
    },
    {
        title: "Desert Horizons",
        img: "images/article2.jpg",
        desc:
        "Sun-baked plains and rugged textures capture the spirit of the Wild West. Dusty hues and layered fabrics tell a story of adventure, freedom, and a rugged romanticism, perfectly blending contemporary style with classic cowboy aesthetics.",
        author: "Lucas Bennett",
        published: "March 8, 2024",
        link: "#",
    },
    {
        title: "Neon Futures",
        img: "images/article3.jpg",
        desc:
        "Electric lights, reflective surfaces, and bold silhouettes form a vision of fashion in a near-future metropolis. Every detail pulses with energy, merging avant-garde creativity with sleek urban minimalism, a true ode to innovation and style.",
        author: "Sofia Chen",
        published: "July 21, 2023",
        link: "#",
    },
  ];

  return (
    <section style={{ background: "var(--sand)" }}>
    <Container className="articles-section">
      <h2 className="section-title text-center mb-5 font-grandstander">
        .𖥔 ݁ ˖๋ ࣭ ⭑ Articles .𖥔 ݁ ˖๋ ࣭ ⭑
      </h2>

      <Row className="g-4">
        {articles.map((a, idx) => (
          <Col md={4} className="text-center" key={idx}>
            <div className="article-card">
                <Image src={a.img} alt={a.title} fluid className="rounded" />

                <div className="article-overlay">
                    <p className="overlay-desc">{a.desc}</p>
                    <Button href={a.link} className="px-3 py-1 rounded-4 btn-article">
                        Read More
                    </Button>
                </div>
            </div>
            <h4 className="fw-semibold mt-3 font-averia">{a.title}</h4>
            <p className="mb-1 small-text font-poppins">
                Written by {a.author}
            </p>
            <p className="smaller-text font-poppins">
                Published on {a.published}
            </p>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button href="/articles" className="px-4 py-2 rounded-5 btn-readmore">
          Read More Articles
        </Button>
      </div>
    </Container>
    </section>
  );
}

export default ArticlesSection;