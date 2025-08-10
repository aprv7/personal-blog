import React, { useState } from 'react';

const BlogHome: React.FC = () => {
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter an email');
      return;
    }
    alert(`Thanks — you're subscribed (demo).`);
    setEmail('');
  };

  return (
    <div className="container" style={{  margin: '0 auto', padding: '48px 20px', fontFamily: 'Inter, system-ui' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 40 }}>aprv7</h1>
          <p style={{ margin: 0, fontSize: 13, color: '#555' }}>tech. comics. life.</p>
        </div>
        <nav style={{ display: 'flex', gap: 18 }}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ padding: 28, borderRadius: 12, background: 'rgba(0,0,0,0.04)', marginBottom: 28 }}>
        <h2 style={{ margin: 0 }}>Nerd note-taking</h2>
        <p>Blogs about learning tech, navigating through life and just existing</p>

        
      </section>

      <main>
        <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
        </section>
      </main>

      <footer style={{ marginTop: 36, fontSize: 13, color: '#555', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>© {year} Apoorva Raj</div>
        <div>Built with minimalism · <a href="#contact">Say hi</a></div>
      </footer>
    </div>
  );
};

export default BlogHome;
