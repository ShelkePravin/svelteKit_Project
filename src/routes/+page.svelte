<!-- <script>
    export let title = "Welcome to Tech Conference 2025";
</script>

<section class="hero">
    <div class="banner-content">
        <h1>{title}</h1>
        <p>Join us for an exciting event filled with innovation and networking.</p>
    </div>
</section>

<section class="about">
    <h2>About the Conference</h2>
    <p>Tech Conference 2025 brings together the best minds in the industry to discuss emerging technologies, trends, and opportunities.</p>
    <img src="/images/about.jpg" alt="About Tech Conference" class="section-image" />
</section>

<section class="speakers">
    <h2>Featured Speakers</h2>
    <p>Meet industry leaders who will be sharing their insights.</p>
    <div class="cards">
        <div class="card"><img src="/images/speaker1.jpg" alt="Speaker 1" /><p>Dr. John Doe</p></div>
        <div class="card"><img src="/images/speaker2.jpg" alt="Speaker 2" /><p>Jane Smith</p></div>
    </div>
</section>

<section class="schedule">
    <h2>Event Schedule</h2>
    <p>Stay updated with the latest sessions and keynotes.</p>
    <img src="/images/schedule.jpg" alt="Event Schedule" class="section-image" />
</section>

<section class="sponsors">
    <h2>Our Sponsors</h2>
    <p>We thank our amazing sponsors for making this event possible.</p>
    <div class="cards">
        <div class="card"><img src="/images/sponsor1.png" alt="Sponsor 1" /></div>
        <div class="card"><img src="/images/sponsor2.png" alt="Sponsor 2" /></div>
    </div>
</section>

<section class="contact">
    <h2>Contact Us</h2>
    <p>Have questions? Get in touch with us.</p>
    <img src="/images/contact.jpg" alt="Contact Us" class="section-image" />
</section>

<style>
    .hero {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(to right, #6a11cb, #2575fc);
        color: white;
        font-size: 1.5rem;
    }
    .hero {
        background: url('/images/banner.jpg') no-repeat center center/cover;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        position: relative; 
    }
    .banner-content {
        background: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 10px;
    }
    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    .hero p {
        font-size: 1.2rem;
    }
    .about, .speakers, .schedule, .sponsors, .contact {
        padding: 4rem 2rem;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto;
    }
    .section-image {
        width: 100%;
        max-width: 600px;
        margin-top: 1rem;
    }
    .cards {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
    .card {
        background: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .card img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .about {
        background: #f9f9f9;
    }
    .speakers {
        background: #e3f2fd;
    }
    .schedule {
        background: #f3e5f5;
    }
    .sponsors {
        background: #e8f5e9;
    }
    .contact {
        background: #ffebee;
    }
</style> -->


<script>
    import { pages } from '../lib/stores';
    let searchQuery = '';
</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<header class="banner">
    <div class="banner-content">
        <h1>Tech Conference 2025</h1>
        <p>Innovating the Future</p>
        <button class="register-btn">Register Now</button>
    </div>
</header>

<section class="featured-speakers">
    <h2>Keynote Speakers</h2>
    <div class="speakers-grid">
        <div class="speaker-card">
            <img src="../images/speaker1.jpeg" alt="Dr. John Doe">
            <h3>Dr. John Doe</h3>
            <p>AI Researcher</p>
        </div>
        <div class="speaker-card">
            <img src="../images/speaker2.jpg" alt="Jane Smith">
            <h3>Jane Smith</h3>
            <p>Cybersecurity Expert</p>
        </div>
        <div class="speaker-card">
            <img src="../images/speaker3.webp" alt="Alex Johnson">
            <h3>Alex Johnson</h3>
            <p>Blockchain Developer</p>
        </div>
    </div>
</section>

<slot />

<style>
    
    .banner {
        background: url('/images/banner.jpg') no-repeat center center/cover;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        position: relative;
    }
    .banner-content {
        background: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 10px;
    }
    .banner h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    .banner p {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    .register-btn {
        background: #ff9800;
        color: white;
        padding: 10px 20px;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .register-btn:hover {
        background: #e68900;
    }
    .featured-speakers {
        text-align: center;
        padding: 4rem 2rem;
        background: #f4f4f4;
    }
    .speakers-grid {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
    .speaker-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .speaker-card img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .speaker-card h3{
        font-size: 1.5rem;
    }
</style>
