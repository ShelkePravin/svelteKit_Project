<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    const speakers = [
      {
        name: "Dr. Jane Smith",
        title: "AI & Robotics Expert",
        bio: "Dr. Smith is a leading researcher in artificial intelligence and robotics with over 20 years of experience.",
        image: "/images/speaker1.jpeg"
      },
      {
        name: "John Doe",
        title: "Cybersecurity Specialist",
        bio: "John has worked in the cybersecurity industry, helping companies stay safe from digital threats.",
        image: "/images/speaker2.jpg"
      },
      {
        name: "Lisa Brown",
        title: "Blockchain Innovator",
        bio: "Lisa has been at the forefront of blockchain technology, developing innovative decentralized applications.",
        image: "/images/speaker3.webp"
      },
      {
        name: "Michael Lee",
        title: "Cloud Computing Architect",
        bio: "Michael has designed scalable cloud solutions for Fortune 500 companies worldwide.",
        image: "/images/speaker4.webp"
      },
      {
        name: "Sophia Wilson",
        title: "Data Science Expert",
        bio: "Sophia specializes in big data analytics and AI-driven business intelligence.",
        image: "/images/speaker5.webp"
      }
    ];
  </script>
  
  <section class="speakers-section">
    <h1>Meet Our Speakers</h1>
    <div class="speakers-grid">
      {#each speakers as speaker}
        <div class="speaker-card">
          <img src={speaker.image} alt={speaker.name} />
          <h3>{speaker.name}</h3>
          <p class="title">{speaker.title}</p>
          <p class="bio">{speaker.bio}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .speakers-section {
      text-align: center;
      padding: 4rem 2rem;
      background-color: #f5f5f5;
    }
  
    .speakers-section h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #333;
    }
  
    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: auto;
    }
  
    .speaker-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease-in-out;
    }
  
    .speaker-card:hover {
      transform: translateY(-5px);
    }
  
    .speaker-card img {
      width: 100%;
      max-width: 200px;
      /* border-radius: 50%; */
      margin-bottom: 1rem;
    }
  
    .speaker-card h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #222;
    }
  
    .speaker-card .title {
      font-weight: bold;
      color: #666;
      margin-bottom: 0.5rem;
    }
  
    .speaker-card .bio {
      font-size: 0.9rem;
      color: #555;
      padding: 0 1rem;
    }
  </style>
  