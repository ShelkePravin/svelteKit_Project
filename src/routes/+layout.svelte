<script>
    import { pages } from '../lib/stores';
</script>

<nav>
    <div class="navbar">
        <div class="logo">TechConf</div>
        <div class="nav-links">
            {#each $pages as page}
                <a href={page.path}>{page.name}</a>
            {/each}
        </div>
    </div>
</nav>

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
    }
    .logo {
        font-size: 1.5rem;
        color: white;
        font-weight: bold;
    }
    .nav-links {
        display: flex;
        gap: 1rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
