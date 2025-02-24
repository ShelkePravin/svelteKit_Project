<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // import "$lib/styles/global.css";
  
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

<head>
  <link rel="stylesheet" href="/styles/global.css" />
</head>
  
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
    
  </style>
  