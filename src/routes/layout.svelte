<script>
    import { pages } from './stores';
</script>

<nav>
    {#each $pages as page}
        <a href={page.path}>{page.name}</a>
    {/each}
</nav>

<slot />

<style>
    nav {
        display: flex;
        gap: 1rem;
        background: #333;
        padding: 1rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>