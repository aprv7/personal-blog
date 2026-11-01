"use client";
import { useEffect, useRef, useState } from "react";

// Profile image (replace with your own image in /public/profile.jpg)
const PROFILE_IMG = "/photo.JPG";

const ABOUT_TEXT = `Hi, I'm Apoorva!\nI'm a developer passionate about tech, hardware, and photography.\nWelcome to my corner of the internet.`;

function pixelateFilter() {
  // CSS filter for pixelated grayscale effect
  return {
    width: 160,
    height: 160,
    border: "2px solid #00FF41",
    background: "#000",
    display: "block",
    margin: "0 auto",
    borderRadius: 8,
    boxShadow: "0 0 16px #00FF4188",
  };
}

function AsciiArtBox({ children }) {
  // ASCII art style border
  return (
    <pre
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
    // eslint-disable-next-line
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
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <AsciiArtBox>
          <img src={PROFILE_IMG} alt="Profile" style={pixelateFilter()} />
        </AsciiArtBox>
        <TypingText text={ABOUT_TEXT} />
      </div>
      <div style={{ textAlign: "center", marginBottom: 24, color: "#00FF41", fontFamily: "inherit", fontSize: 18 }}>
        {"> VISITOR_COUNT: ["}
        {visitorCount === null ? "..." : visitorCount}
        {"]"}
      </div>
    </div>
  );
}
