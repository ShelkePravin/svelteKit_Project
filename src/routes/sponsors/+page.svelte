<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // import "$lib/styles/global.css";
  
    const sponsors = [
      { name: "Google", logo: "/images/logo1.webp", website: "https://www.google.com" },
      { name: "Microsoft", logo: "/images/logo3.webp", website: "https://www.microsoft.com" },
      { name: "Amazon", logo: "/images/logo4.webp", website: "https://www.amazon.com" },
      { name: "Tesla", logo: "/images/logo5.webp", website: "https://www.tesla.com" },
      { name: "IBM", logo: "/images/logo6.webp", website: "https://www.ibm.com" },
      { name: "Meta", logo: "/images/logo2.webp", website: "https://www.meta.com" },
    ];
  </script>

<head>
  <link rel="stylesheet" href="/styles/global.css" />
</head>
  
  
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
    
  </style>
  