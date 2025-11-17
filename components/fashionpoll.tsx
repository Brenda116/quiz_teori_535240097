"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

export default function FashionPoll() {
  const [answer, setAnswer] = useState("");
  const [answersList, setAnswersList] = useState<string[]>([]);
  const router = useRouter();

  const addAnswer = () => {
    if (answer.trim() !== "") {
      setAnswersList([...answersList, answer.trim()]);
      setAnswer("");
    }
  };

  const deleteAnswer = (index: number) => {
    setAnswersList(answersList.filter((_, i) => i !== index));
  };

  const goToDetail = (color: string) => {
    router.push(`/poll/${encodeURIComponent(color)}`);
  };

  return (
    <section
      style={{
        backgroundColor: "var(--sand)",
        color: "var(--espresso)",
        padding: "2rem",
        borderRadius: "1rem",
        margin: "2rem 0",
      }}
    >
      <h2 className="font-grandstander mb-3">Fashion Mini Poll 🤍✨</h2>
      <p className="font-averia mb-4">
        Which color scheme do you prefer for Winter 2025? Click a color to see
        outfits for Winter 2025.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your favorite color"
          style={{
            flex: 1,
            padding: "0.5rem 1rem",
            border: "1px solid var(--espresso)",
            borderRadius: "0.5rem",
            fontFamily: "var(--font-poppins)",
          }}
        />
        <Button
          onClick={addAnswer}
          style={{
            backgroundColor: "var(--espresso)",
            border: "1px solid var(--espresso)",
            color: "var(--sand)",
            fontFamily: "var(--font-averia)",
          }}
        >
          Add
        </Button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {answersList.map((item, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
              backgroundColor: "rgba(42, 33, 28, 0.1)",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
            }}
          >
            <span
              className="font-poppins"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => goToDetail(item)}
            >
              {item}
            </span>
            <Button
              onClick={() => deleteAnswer(idx)}
              size="sm"
              style={{
                backgroundColor: "var(--espresso)",
                border: "1px solid var(--espresso)",
                color: "var(--sand)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}