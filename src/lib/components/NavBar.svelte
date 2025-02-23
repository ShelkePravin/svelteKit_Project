<script>
  import { onMount } from 'svelte';
</script>

<nav>
  <div class="navbar-container">
    <div class="logo">
      <a href="/"><img src="/logo.png" alt="Tech Conference Logo" /></a>
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
  </div>
</nav>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

  nav {
    background-color: #333;
    padding: 1rem;
  }
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo img {
    height: 40px;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
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