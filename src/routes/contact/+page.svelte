<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // import "$lib/styles/global.css";
  
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

<head>
  <link rel="stylesheet" href="/styles/global.css" />
</head>
  
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
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        
      </div>
    </div>
  </section>
  
  
  <style>
    
  </style>
  