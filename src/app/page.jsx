import { useEffect, useState } from "react";

// Profile image (replace with your own image in /public/profile.jpg)
const PROFILE_IMG = "/photo.JPG";

const ABOUT_TEXT = `Hi, I'm Apoorva!\nI'm a developer passionate about tech, hardware, and photography.\nWelcome to my corner of the internet.`;

function AsciiArtBox({ children }) {
  // ASCII art style border
  return (
    <pre
      className="ascii-art-box"
      style={{
        color: "#00FF41",
        background: "#000",
        padding: 8,
        border: "2px dashed #00FF41",
        borderRadius: 8,
        textAlign: "center",
        display: "inline-block",
        margin: "0 auto 1.5rem auto",
      }}
    >
      {children}
    </pre>
  );
}

function TypingText({ text, speed = 50 }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
    if (!text) return;
    let cancelled = false;
    function tick(i) {
      if (cancelled) return;
      setIndex(i);
      if (i < text.length) {
        setTimeout(() => tick(i + 1), text.charAt(i) === "\n" ? speed * 10 : speed);
      }
    }
    tick(0);
    return () => { cancelled = true; };
  }, [text, speed]);
  return (
    <pre style={{ color: "#00FF41", background: "none", fontSize: 20, minHeight: 120 }}>{text.slice(0, index)}|</pre>
  );
}

function useVisitorCount() {
  const [count, setCount] = useState(null);
  useEffect(() => {
    // Try countapi.xyz first
    fetch("https://api.countapi.xyz/hit/apoorva-blog/visits")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === "number") setCount(data.value);
        else throw new Error("No value");
      })
      .catch(() => {
        // Fallback: localStorage
        try {
          let local = parseInt(localStorage.getItem("visitor_count") || "0", 10);
          local++;
          setCount(local);
          localStorage.setItem("visitor_count", local);
        } catch {
          setCount("?");
        }
      });
  }, []);
  return count;
}

export default function Home() {
  const visitorCount = useVisitorCount();
  return (
    <div className="home-page">
    <div className="home-intro">
        <AsciiArtBox>
        <img className="profile-image" src={PROFILE_IMG} alt="Profile" />
        </AsciiArtBox>
        <TypingText text={ABOUT_TEXT} />
      </div>
    </div>
  );
}
