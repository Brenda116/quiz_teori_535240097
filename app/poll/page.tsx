"use client";
import FashionPoll from "../../components/fashionpoll";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

export default function PollPage() {
  const router = useRouter();

  return (
    <main style={{ padding: "2rem", backgroundColor: "var(--sand)" }}>
      <h1
        className="font-grandstander mb-4 text-center"
        style={{ color: "var(--espresso)" }}
      >
        Fashion Mini Poll 🤍✨
      </h1>

      <FashionPoll />

      <div className="text-center mt-4">
        <Button
          variant="outline-dark"
          onClick={() => router.push("/")}
          style={{
            padding: "0.5rem 2rem",
            borderColor: "var(--espresso)",
            fontFamily: "var(--font-averia)",
            borderRadius: "0.5rem",
          }}
        >
          Back to Home
        </Button>
      </div>
    </main>
  );
}