<script>
    import NavBar from '../lib/components/NavBar.svelte';
  </script>
  
  <section class="hero">
    <h1>Tech Conference 2025</h1>
    <p>Innovate, Connect, and Lead the Future of Technology</p>
    <button class="register-btn">Register Now</button>
  </section>
  
  <section class="featured-speakers">
    <h2>Keynote Speakers</h2>
    <div class="speakers-container">
      <div class="speaker">
        <img src="/images/speaker1.jpeg" alt="Speaker 1">
        <h3>Dr. Jane Smith</h3>
        <p>AI & Robotics Expert</p>
      </div>
      <div class="speaker">
        <img src="/images/speaker2.jpg" alt="Speaker 2">
        <h3>John Doe</h3>
        <p>Cybersecurity Specialist</p>
      </div>
      <div class="speaker">
        <img src="/images/speaker3.webp" alt="Speaker 3">
        <h3>Lisa Brown</h3>
        <p>Blockchain Innovator</p>
      </div>
    </div>
  </section>
  
  <style>
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: url('/images/banner.jpg') center/cover no-repeat;
      color: white;
    }
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .register-btn {
      background: #ffcc00;
      color: #333;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .register-btn:hover {
      background: #e6b800;
    }
    .featured-speakers {
      padding: 4rem 2rem;
      text-align: center;
    }
    .speakers-container {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .speaker {
      background: white;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 200px;
    }
    .speaker img {
      width: 100%;
      border-radius: 10px;
    }
    .speaker h3 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    .speaker p {
      color: #666;
      font-size: 1rem;
    }
  </style>
  