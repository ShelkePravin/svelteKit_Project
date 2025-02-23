
<scrip>
    let sponsors = [
        { name: "TechCorp", logo: "/images/sponsor1.png", link: "https://techcorp.com" },
        { name: "InnovateX", logo: "/images/sponsor2.png", link: "https://innovatex.com" },
        { name: "FutureSoft", logo: "/images/sponsor3.png", link: "https://futuresoft.com" },
        { name: "NextGen AI", logo: "/images/sponsor4.png", link: "https://nextgenai.com" }
    ];

    let pages = [
        { name: "Home", path: "/" },
        { name: "Speakers", path: "/speakers" },
        { name: "Schedule", path: "schedule" },
        { name: "Sponsors", path: "/sponsors" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];
</script>

<section class="sponsors">
    <h2>Our Sponsors</h2>
    <div class="sponsor-list">
        {#each sponsors as sponsor}
            <a href={sponsor.link} target="_blank" class="sponsor-card">
                <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo" />
                <p>{sponsor.name}</p>
            </a>
        {/each}
    </div>
</section>


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
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096676!2d144.9537363153191!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0xf4c5c5e4d9a1f1f1!2sConference%20Venue!5e0!3m2!1sen!2sus!4v1612345678901" 
                width="250" height="150" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>
</footer>

<style>
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


<style>
    .sponsors {
        text-align: center;
        padding: 4rem 2rem;
        background: #f4f4f4;
    }
    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
    }
    .sponsor-card {
        background: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease-in-out;
        width: 200px;
    }
    .sponsor-card:hover {
        transform: scale(1.1);
    }
    .sponsor-logo {
        width: 100px;
        height: auto;
    }
    p {
        margin-top: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>
