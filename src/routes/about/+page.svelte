<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <section class="about-section">
    <div class="about-container">
      <h1>About Tech Conference 2025</h1>
      <p>
        Tech Conference 2025 is the premier event for technology enthusiasts, industry professionals, and innovators.
        Join us as we explore the latest advancements in AI, cybersecurity, blockchain, and more.
      </p>
      <div class="about-content">
        <div class="about-image">
          <img src="/images/about.jpg" alt="Conference Image" />
        </div>
        <div class="about-text">
          <h2>Why Attend?</h2>
          <ul>
            <li>🌍 Connect with industry leaders and professionals</li>
            <li>🧠 Gain insights from expert speakers and panel discussions</li>
            <li>🚀 Discover cutting-edge technologies and innovations</li>
            <li>💼 Expand your professional network</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .about-section {
      padding: 4rem 2rem;
      background-color: #f5f5f5;
      text-align: center;
    }
  
    .about-container h1 {
      font-size: 2.5rem;
      color: #222;
      margin-bottom: 1rem;
    }
  
    .about-container p {
      font-size: 1.2rem;
      color: #555;
      max-width: 800px;
      margin: auto;
    }
  
    .about-content {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
      gap: 2rem;
      flex-wrap: wrap;
    }
  
    .about-image img {
      max-width: 400px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .about-text {
      max-width: 500px;
      text-align: left;
    }
  
    .about-text h2 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 1rem;
    }
  
    .about-text ul {
      list-style: none;
      padding: 0;
    }
  
    .about-text li {
      font-size: 1.2rem;
      color: #555;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    @media (max-width: 768px) {
      .about-content {
        flex-direction: column;
        text-align: center;
      }
  
      .about-text {
        text-align: center;
      }
    }
  </style>
  