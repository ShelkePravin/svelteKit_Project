<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    let name = "";
    let email = "";
    let message = "";
  
    function submitForm() {
      alert(`Thank you, ${name}! Your message has been sent.`);
      name = "";
      email = "";
      message = "";
    }
  </script>
  
  <section class="contact-section">
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us!</p>
      
      <form on:submit|preventDefault={submitForm} class="contact-form">
        <input type="text" bind:value={name} placeholder="Your Name" required />
        <input type="email" bind:value={email} placeholder="Your Email" required />
        <textarea bind:value={message} placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
  
      <div class="social-links">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </section>
  
  
  <style>
    .contact-section {
      padding: 4rem 2rem;
      text-align: center;
      background-color: #f5f5f5;
    }
  
    .contact-container {
      max-width: 600px;
      margin: auto;
    }
  
    .contact-container h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #222;
    }
  
    .contact-container p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #555;
    }
  
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
  
    .contact-form textarea {
      height: 150px;
      resize: none;
    }
  
    .contact-form button {
      background: #ffcc00;
      color: #333;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
  
    .contact-form button:hover {
      background: #e6b800;
    }
  
    .social-links {
      margin-top: 2rem;
    }
  
    .social-links h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  
    .social-links a {
      margin: 0 10px;
      font-size: 1.5rem;
      color: #333;
      transition: color 0.3s ease;
    }
  
    .social-links a:hover {
      color: #ffcc00;
    }
  </style>
  