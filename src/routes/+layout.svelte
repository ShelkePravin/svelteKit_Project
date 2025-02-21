<script>
    import { pages } from '../lib/stores';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    let searchQuery = '';
</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<nav>
    <div class="navbar">
        <div class="logo">TechConf</div>
        <div class="nav-links">
            {#each $pages as page}
                <a href={page.path}>{page.name}</a>
            {/each}
        </div>
        <div class="search-bar">
            <input type="text" bind:value={searchQuery} placeholder="Search..." />
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
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
</style>
