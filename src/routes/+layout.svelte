<script>
    let pages = [
        { name: "Home", path: "/" },
        { name: "Speakers", path: "/speakers" },
        { name: "Schedule", path: "/schedule" },
        { name: "Sponsors", path: "/sponsors" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];
    
    let darkMode = localStorage.getItem("darkMode") === "true";
    
    function toggleTheme() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle('dark-mode', darkMode);
        localStorage.setItem("darkMode", darkMode.toString());
    }

    if (darkMode) {
        document.documentElement.classList.add('dark-mode');
    }
</script>

<button class="theme-toggle" on:click={toggleTheme}>
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

<footer class="footer">
    <div class="footer-container">
        <div class="footer-left">
            <img src="/images/logo.png" alt="TechConf Logo" class="footer-logo" />
            <p>Tech Conference 2025 - Innovating the Future</p>
        </div>
        <div class="footer-middle">
            <nav>
                {#each pages as page}
                    <a href={page.path}>{page.name}</a>
                {/each}
            </nav>
        </div>
        <div class="footer-right">
            <!-- <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096676!2d144.9537363153191!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0xf4c5c5e4d9a1f1f1!2sConference%20Venue!5e0!3m2!1sen!2sus!4v1612345678901" 
                width="250" height="150" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe> -->
        </div>
    </div>
</footer>

<style>
    :root {
        --bg-color: white;
        --text-color: black;
    }
    body.dark-mode {
        --bg-color: #121212;
        --text-color: white;
    }
    body {
        background: var(--bg-color);
        color: var(--text-color);
        transition: background 0.3s, color 0.3s;
    }
    .theme-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        background: var(--text-color);
        color: var(--bg-color);
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .footer {
        background: #333;
        color: white;
        padding: 2rem 0;
    }
    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .footer-left {
        flex: 1;
    }
    .footer-logo {
        width: 100px;
        margin-bottom: 10px;
    }
    .footer-middle {
        flex: 1;
        text-align: center;
    }
    .footer-middle nav {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    .footer-middle a {
        color: white;
        text-decoration: none;
    }
    .footer-middle a:hover {
        text-decoration: underline;
    }
    .footer-right {
        flex: 1;
        text-align: right;
    }
</style>
