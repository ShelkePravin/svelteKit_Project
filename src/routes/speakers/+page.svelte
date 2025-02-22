<script>
        let searchQuery = './stores';
</script>

<section class="speakers-section">
    <h2>Meet Our Speakers</h2>
    <div class="speakers-grid">
        <div class="speaker-card">
            <img src="../images/speaker1.jpeg" alt="Dr. John Doe">
            <h3>Dr. John Doe</h3>
            <p>AI Researcher</p>
            <p class="bio">Dr. John Doe is a pioneer in artificial intelligence and has contributed to groundbreaking research in deep learning and machine ethics.</p>
        </div>
        <div class="speaker-card">
            <img src="../images/speaker2.jp g" alt="Jane Smith">
            <h3>Jane Smith</h3>
            <p>Cybersecurity Expert</p>
            <p class="bio">Jane Smith has over 15 years of experience in cybersecurity, helping organizations safeguard their data from digital threats.</p>
        </div>
        <div class="speaker-card">
            <img src="../images/speaker3.webp" alt="Alex Johnson">
            <h3>Alex Johnson</h3>
            <p>Blockchain Developer</p>
            <p class="bio">Alex Johnson is a blockchain specialist known for developing secure decentralized applications and advocating for Web3 technology.</p>
        </div>
        <div class="speaker-card">
            <img src="/images/speaker4.jpg" alt="Emily Davis">
            <h3>Emily Davis</h3>
            <p>Data Scientist</p>
            <p class="bio">Emily Davis is a renowned data scientist who specializes in big data analytics and predictive modeling.</p>
        </div>
        <div class="speaker-card">
            <img src="/images/speaker5.jpg" alt="Michael Brown">
            <h3>Michael Brown</h3>
            <p>Cloud Architect</p>
            <p class="bio">Michael Brown has played a key role in designing scalable cloud architectures for multinational companies.</p>
        </div>
    </div>
</section>

<slot />

<style>
    h2{
        font-size: 2rem;
    }
    .speakers-section {
        text-align: center;
        padding: 4rem 2rem;
        background: #f4f4f4;
    }
    .speakers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .speaker-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .speaker-card img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    .speaker-card h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .speaker-card p {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    .bio {
        font-size: 1rem;
        color: #666;
    }
</style>
