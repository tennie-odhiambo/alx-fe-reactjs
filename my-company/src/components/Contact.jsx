import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ECF0F1' }}>
      <h1 style={{ color: '#2C3E50' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '15%', border: '2px solid #BDC3C7'  }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0',  padding: '10px', width: '15%', border: '2px solid #BDC3C7', height: '10px'  }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '15%', border: '2px solid #BDC3C7', height: '50px'  }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;