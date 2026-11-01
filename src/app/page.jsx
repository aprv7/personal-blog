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
  return <pre className="typing-text">{text.slice(0, index)}|</pre>;
}

export default function Home() {
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
