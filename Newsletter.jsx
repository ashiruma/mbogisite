import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to newsletter backend or service like Mailchimp
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Subscribe to our Newsletter</h2>
      {submitted ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <button type="submit" style={{ width: "100%" }}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;