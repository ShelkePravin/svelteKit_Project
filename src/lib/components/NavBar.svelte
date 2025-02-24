<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from "svelte";


  const dispatch = createEventDispatcher();

function toggleDarkMode() {
  dispatch("toggleDark");
}
  
</script>

<nav>
  <div class="navbar-container">
    <div class="logo">
      <a href="/"><img src="/images/logo.png" alt="Tech Conference Logo" /></a>
    </div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/speakers">Speakers</a></li>
      <li><a href="/schedule">Schedule</a></li>
      <li><a href="/sponsors">Sponsors</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
    <!-- <button class="dark-mode-toggle" on:click={toggleDarkMode}>
      🌙 Dark / ☀️ Light
    </button> -->
  </div>
</nav>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

  nav {
    background-color: #e8e2e2;
    padding: 1rem;
  }
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo img {
    height: 20px;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }
  .nav-links a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
  }
  .nav-links a:hover {
    color: #ffcc00;
  }
  .search-bar {
    display: flex;
    align-items: center;
    background: white;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-bar input {
    border: none;
    outline: none;
    padding: 0.5rem;
  }
  .search-bar i {
    color: #333;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
</style>