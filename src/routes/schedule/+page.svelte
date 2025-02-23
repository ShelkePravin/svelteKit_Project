<script>
    let searchQuery = './stores';
</script>


<section class="featured-speakers">
    <h2>Keynote Speakers</h2>
    <div class="speakers-grid">
        <div class="speaker-card">
            <img src="/images/speaker1.jpg" alt="Dr. John Doe">
            <h3>Dr. John Doe</h3>
            <p>AI Researcher</p>
        </div>
        <div class="speaker-card">
            <img src="/images/speaker2.jpg" alt="Jane Smith">
            <h3>Jane Smith</h3>
            <p>Cybersecurity Expert</p>
        </div>
        <div class="speaker-card">
            <img src="/images/speaker3.jpg" alt="Alex Johnson">
            <h3>Alex Johnson</h3>
            <p>Blockchain Developer</p>
        </div>
    </div>
</section>

<section class="schedule">
    <h2>Conference Schedule</h2>
    <table class="schedule-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Topic</th>
                <th>Speaker</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>March 10, 2025</td>
                <td>09:00 AM - 10:00 AM</td>
                <td>Future of AI in Business</td>
                <td>Dr. John Doe</td>
            </tr>
            <tr>
                <td>March 10, 2025</td>
                <td>10:30 AM - 11:30 AM</td>
                <td>Cybersecurity Trends</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>March 10, 2025</td>
                <td>01:00 PM - 02:00 PM</td>
                <td>Blockchain in Finance</td>
                <td>Alex Johnson</td>
            </tr>
        </tbody>
    </table>
</section>

<slot />

<style>
    nav {
        background: #333;
        padding: 1rem;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .logo {
        font-size: 1.5rem;
        color: white;
        font-weight: bold;
    }
    .nav-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-grow: 1;
    }
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .search-bar {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .search-bar input {
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
    }
    .search-bar button {
        padding: 0.5rem;
        background: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .search-bar button:hover {
        background: #ddd;
    }
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
    .featured-speakers, .schedule {
        text-align: center;
        padding: 4rem 2rem;
        background: #f4f4f4;
    }
    .schedule-table {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border-collapse: collapse;
    }
    .schedule-table th, .schedule-table td {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
    }
    .schedule-table th {
        background: #0073e6;
        color: white;
    }
</style>
