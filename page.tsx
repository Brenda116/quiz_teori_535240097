// app/page.tsx
import Link from "next/link";
import { Container } from "react-bootstrap";
import { prisma } from "@/lib/prisma";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import HeroSection2 from "../components/herosection2";
import ArticlesSection from "../components/articlessection";
import FashionPoll from "../components/fashionpoll";
import LookSection from "../components/looksection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
import BlogPosts from "@/components/blogpost";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-light text-dark">
      <Navbar />

      <main style={{ backgroundColor: "var(--sand)" }}>
        <HeroSection2 />
        <section id="about" className="py-5" style={{ background: "var(--sand)" }}>
          {/* About section */}
        </section>

        <ArticlesSection />
        <HeroSection />
        <FashionPoll />

        {/* BLOG POSTS SECTION */}
        <section className="py-5">
          <Container>
            <h1>Blog Posts</h1>
            <Link href="/create">Create Post</Link>
            <BlogPosts posts={posts} />
          </Container>
        </section>

        <LookSection />
        <section id="contact" className="py-5">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}