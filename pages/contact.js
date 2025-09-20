import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Fill out the form below or reach us at:
      </p>
      <ul>
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>Email:</strong> info@photocopyshop.com</li>
        <li><strong>Location:</strong> Main Street, City, Country</li>
      </ul>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <label>
          Name:<br />
          <input type="text" name="name" required style={{width:'100%',padding:'8px',marginBottom:'10px'}} />
        </label>
        <br />
        <label>
          Email:<br />
          <input type="email" name="email" required style={{width:'100%',padding:'8px',marginBottom:'10px'}} />
        </label>
        <br />
        <label>
          Message:<br />
          <textarea name="message" rows={5} required style={{width:'100%',padding:'8px',marginBottom:'10px'}} />
        </label>
        <br />
        <button type="submit" style={{padding:'10px 20px',background:'#0052cc',color:'#fff',border:'none',borderRadius:'4px'}}>Send</button>
        {submitted && <p style={{color:'green',marginTop:'10px'}}>Thank you for contacting us! We'll be in touch soon.</p>}
      </form>
    </Layout>
  );
}