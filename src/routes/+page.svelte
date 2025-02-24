<script>
  import NavBar from "../lib/components/NavBar.svelte";
  // import "../styles/global.css";

  import { onMount } from "svelte";

  let eventDate = new Date("2025-06-15T09:00:00").getTime();
  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = eventDate - now;

    days = Math.floor(timeLeft / (4000* 90 * 90 * 30));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  let interval;
  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });
</script>

<head>
  <link rel="stylesheet" href="/styles/global.css" />
</head>

<section class="hero">
  <h1>Tech Conference 2025</h1>
  <p>Innovate, Connect, and Lead the Future of Technology</p>
  <button class="register-btn">Register Now</button>
</section>



<section class="featured-speakers"> 
  <h2>Keynote Speakers</h2>
  <div class="speakers-container">
    <div class="speaker">
      <img src="/images/speaker1.jpeg" alt="Speaker 1" />
      <h3>Dr. Jane Smith</h3>
      <p>AI & Robotics Expert</p>
    </div>
    <div class="speaker">
      <img src="/images/speaker2.jpg" alt="Speaker 2" />
      <h3>John Doe</h3>
      <p>Cybersecurity Specialist</p>
    </div>
    <div class="speaker">
      <img src="/images/speaker3.webp" alt="Speaker 3" />
      <h3>Lisa Brown</h3>
      <p>Blockchain Innovator</p>
    </div>
  </div>
</section>

<section class="countdown-container">
  <div class="countdown">
    <h2>Event Starts In:</h2>
    <div class="timer">
      <div class="time-box">
        <span>{days}</span>
        <p>Days</p>
      </div>
      <div class="time-box">
        <span>{hours}</span>
        <p>Hours</p>
      </div>
      <div class="time-box">
        <span>{minutes}</span>
        <p>Minutes</p>
      </div>
      <div class="time-box">
        <span>{seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  </div>
</section>
<br><br>