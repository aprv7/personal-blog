import React from "react";
import Link from "next/link";

// Dummy data for demonstration; replace with real data fetching in production
const DUMMY_POST = {
  title: "Retro Terminal Blog Post",
  date: "2026-05-01",
  tags: ["retro", "terminal", "aesthetic"],
  content: `
# Welcome to the Retro Terminal Blog

This is a sample blog post written in **Markdown**.

- All lists
- Are styled

> Blockquotes look like this.

## Code Example

```
console.log('Hello, world!');
```

You can use *italics* and **bold** text.
`,
};

function AsciiMetaBox({ title, date, tags }) {
  // Build ASCII box
  const tagStr = tags && tags.length ? `| Tags: ${tags.join(", ")}\n` : "";
  const lines = [
    "+------------------------------------------+",
    `| Title: ${title}`.padEnd(42) + "|",
    `| Date: ${date}`.padEnd(42) + "|",
    tagStr ? tagStr.padEnd(42) + "|" : null,
    "+------------------------------------------+",
  ].filter(Boolean);
  return (
    <pre style={{ color: "#00FF41", background: "#000", fontSize: 16, marginBottom: 24, textAlign: "left", borderRadius: 8 }}>{lines.join("\n")}</pre>
  );
}

function TerminalMarkdown({ content }) {
  // Very basic markdown to terminal-style HTML
  // For real use, replace with a markdown parser and custom renderer
  let html = content
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*?)\*/gim, '<i>$1</i>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/```([\s\S]*?)```/gim, '<pre class="code-block">$1</pre>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/<li>(.*?)<\/li>/gim, '<ul><li>$1</li></ul>')
    .replace(/\n/g, '<br />');
  // Remove duplicate <ul>
  html = html.replace(/(<\/ul><ul>)+/g, '');
  return (
    <div
      className="terminal-markdown"
      style={{ color: "#00FF41", fontFamily: "inherit", fontSize: 18 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function BlogPostPage({ params }) {
  // In real app, fetch post by params.slug
  const post = DUMMY_POST;
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <AsciiMetaBox title={post.title} date={post.date} tags={post.tags} />
      <TerminalMarkdown content={post.content} />
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Link href="/blogs" legacyBehavior>
          <a className="nav-link" style={{ border: "1px solid #00FF41", color: "#00FF41", background: "#000", padding: "0.5rem 1.5rem", borderRadius: 4, display: "inline-block", marginTop: 24 }}>
            [ &lt;-- Return to previous directory ]
          </a>
        </Link>
      </div>
      <style jsx global>{`
        .terminal-markdown h1, .terminal-markdown h2, .terminal-markdown h3 {
          color: #00FF41;
          font-family: inherit;
          border-left: 2px solid #00FF41;
          padding-left: 0.5em;
          margin: 1.5em 0 0.5em 0;
        }
        .terminal-markdown ul {
          margin-left: 2em;
        }
        .terminal-markdown li {
          list-style: "» ";
          margin-bottom: 0.2em;
        }
        .terminal-markdown b {
          color: #00FF41;
          font-weight: bold;
        }
        .terminal-markdown i {
          color: #00FF41;
          font-style: italic;
        }
        .terminal-markdown code {
          background: #111111;
          color: #00FF41;
          border: 1px solid #00FF41;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.95em;
        }
        .terminal-markdown pre.code-block {
          background: #111111;
          color: #00FF41;
          border: 2px solid #00FF41;
          border-radius: 8px;
          padding: 1em;
          margin: 1.5em 0;
          font-size: 1em;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
