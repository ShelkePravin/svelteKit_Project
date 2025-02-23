<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    const sponsors = [
      { name: "Google", logo: "/images/logo1.webp", website: "https://www.google.com" },
      { name: "Microsoft", logo: "/images/logo3.webp", website: "https://www.microsoft.com" },
      { name: "Amazon", logo: "/images/logo4.webp", website: "https://www.amazon.com" },
      { name: "Tesla", logo: "/images/logo5.webp", website: "https://www.tesla.com" },
      { name: "IBM", logo: "/images/logo6.webp", website: "https://www.ibm.com" },
      { name: "Meta", logo: "/images/logo2.webp", website: "https://www.meta.com" },
    ];
  </script>
  
  
  <section class="sponsors-section">
    <h1>Our Sponsors</h1>
    <p>We are proud to be supported by these leading companies</p>
    
    <div class="sponsors-grid">
      {#each sponsors as sponsor}
        <a href={sponsor.website} target="_blank" class="sponsor-card">
          <img src={sponsor.logo} alt={sponsor.name} />
          <h3>{sponsor.name}</h3>
        </a>
      {/each}
    </div>
  </section>
  
  <style>
    .sponsors-section {
      text-align: center;
      padding: 4rem 2rem;
      background-color: #f5f5f5;
    }
  
    .sponsors-section h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #222;
    }
  
    .sponsors-section p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #555;
    }
  
    .sponsors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      max-width: 1000px;
      margin: auto;
    }
  
    .sponsor-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease-in-out;
      text-decoration: none;
      color: black;
    }
  
    .sponsor-card:hover {
      transform: translateY(-5px);
    }
  
    .sponsor-card img {
      max-width: 120px;
      margin-bottom: 1rem;
    }
  
    .sponsor-card h3 {
      font-size: 1.2rem;
      margin: 0;
    }
  
    @media (max-width: 768px) {
      .sponsors-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }
    }
  </style>
  