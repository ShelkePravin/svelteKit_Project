<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // import "$lib/styles/global.css";
  
    const schedule = [
      {
        date: "March 15, 2025",
        time: "09:00 AM - 10:30 AM",
        topic: "The Future of AI & Robotics",
        speaker: "Dr. Jane Smith",
        image: "/images/speaker1.jpeg"
      },
      {
        date: "March 15, 2025",
        time: "11:00 AM - 12:30 PM",
        topic: "Cybersecurity in a Digital Age",
        speaker: "John Doe",
        image: "/images/speaker2.jpg"
      },
      {
        date: "March 15, 2025",
        time: "02:00 PM - 03:30 PM",
        topic: "Blockchain and Web3 Innovations",
        speaker: "Lisa Brown",
        image: "/images/speaker3.webp"
      },
      {
        date: "March 16, 2025",
        time: "10:00 AM - 11:30 AM",
        topic: "Cloud Computing Trends",
        speaker: "Michael Lee",
        image: "/images/speaker4.webp"
      },
      {
        date: "March 16, 2025",
        time: "01:00 PM - 02:30 PM",
        topic: "Big Data & AI in Business",
        speaker: "Sophia Wilson",
        image: "/images/speaker5.webp"
      }
    ];
  </script>

<head>
  <link rel="stylesheet" href="/styles/global.css" />
</head>
  
  
  <section class="schedule-section">
    <h1>Conference Schedule</h1>
    <div class="schedule-container">
      {#each schedule as session}
        <div class="schedule-card">
          <div class="schedule-details">
            <p class="date">{session.date}</p>
            <p class="time">{session.time}</p>
            <h3 class="topic">{session.topic}</h3>
            <div class="speaker-info">
              <img src={session.image} alt={session.speaker} />
              <p class="speaker-name">{session.speaker}</p>
            </div>
          </div>
          <button class="book-btn">Book Now</button>
        </div>
      {/each}
    </div>
  </section>
  
  
  <style>
    
  </style>
  