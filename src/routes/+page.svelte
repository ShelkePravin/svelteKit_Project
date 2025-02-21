<script>
    export let title = "Welcome to Tech Conference 2025";
</script>

<section class="hero">
    <div class="banner-content">
        <h1>Welcome to Tech Conference 2025</h1>
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
</style>