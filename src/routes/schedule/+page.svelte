<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
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
    .schedule-section {
      text-align: center;
      padding: 4rem 2rem;
      background-color: #f5f5f5;
    }
  
    .schedule-section h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #333;
    }
  
    .schedule-container {
      max-width: 1000px;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  
    .schedule-card {
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
  
    .schedule-card:hover {
      transform: translateY(-5px);
    }
  
    .schedule-details {
      text-align: left;
    }
  
    .date {
      font-weight: bold;
      color: #555;
    }
  
    .time {
      font-size: 1rem;
      color: #777;
      margin-bottom: 0.5rem;
    }
  
    .topic {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #222;
    }
  
    .speaker-info {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 0.5rem;
    }
  
    .speaker-info img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  
    .speaker-name {
      font-weight: bold;
      color: #333;
    }
  
    .book-btn {
      background: #ff6600;
      color: white;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
  
    .book-btn:hover {
      background: #e65c00;
    }
  
    @media (max-width: 768px) {
      .schedule-card {
        flex-direction: column;
        align-items: flex-start;
      }
      .book-btn {
        margin-top: 10px;
        width: 100%;
      }
    }
  </style>
  