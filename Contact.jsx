import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Send to backend or email service
    setSent(true);
  };

  if (sent) return <p>Thank you for contacting us! We'll be in touch.</p>;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Your Name"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        type="email"
        placeholder="Your Email"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        placeholder="Your Message"
        style={{ width: "100%", marginBottom: "1rem" }}
        rows={5}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;