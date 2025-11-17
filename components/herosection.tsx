"use client"
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {

    const router = useRouter();

    const slides: Slide[] = [
        {
            title: "Crimson Reverie",
            subtitle: "the red softened the air, filling the moment with quiet warmth and gentle boldness.",
            imageUrl: "/images/banner_01.JPG",
        },
        {
            title: "Rue in Rouge",
            subtitle: "the atmosphere glowed with a calm fire, carrying a blend of confidence and serenity.",
            imageUrl: "/images/banner_02.JPG",
        },
        {
            title: "A Scarlet Silhouette",
            subtitle: "a scene where the color breathes slowly—warm, brave, and delicately intense.",
            imageUrl: "/images/banner_03.jpg",
        },
    ];

    return (
        <div 
            className="hero-wrapper mt-super" 
            style={{
                position: "relative",
                height: "130vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--sand)",
            }}
        >
            <Carousel fade interval={4000}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        {/* IMAGE */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                height: "105vh",
                            }}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${slide.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundImage: `url(${slide.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundImage: `url(${slide.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>

                        <Carousel.Caption style={{ marginBottom: "60px" }}>
                            <h1
                                className="display-4 fw-semi-bold font-lora"
                                style={{ fontStyle: "italic" }}
                            >
                                {slide.title}
                            </h1>

                            <p className="lead font-poppins" style={{ fontStyle: "italic" }}>
                                {slide.subtitle}
                            </p>
                        </Carousel.Caption>

                        <div
                            style={{
                                position: "absolute",
                                bottom: "40px",
                                left: "0",
                                right: "0",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                className="see-more-btn"
                                style={{
                                    padding: "12px 40px",
                                    borderRadius: "12px",
                                    border: "1px solid var(--sand)",
                                    backgroundColor: "rgba(255,255,255,0.35)",
                                    color: "var(--espresso)",
                                    fontFamily: "var(--font-averia)",
                                    fontSize: "1.1rem",
                                    backdropFilter: "blur(5px)",
                                }}
                                onClick={() => router.push("/lookbook")}
                            >
                                See More
                            </button>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroSection;