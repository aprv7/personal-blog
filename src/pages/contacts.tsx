export function ContactPage() {
    return (
        <div className="container" style={{ margin: '0 auto', padding: '48px 20px', fontFamily: 'Inter, system-ui' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
            <h1 style={{ margin: 0, fontSize: 20 }}>Contact</h1>
        </header>
    
        <section style={{ padding: 28, borderRadius: 12, background: 'rgba(0,0,0,0.04)', marginBottom: 28 }}>
            <h2 style={{ margin: 0 }}>Get in touch</h2>
            <p>If you have any questions or just want to say hi, feel free to reach out!</p>
    
            <form action="https://formspree.io/f/your-form-id" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 520 }}>
            <input type="text" name="name" placeholder="Your Name" required style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)' }} />
            <input type="email" name="email" placeholder="
            )
}