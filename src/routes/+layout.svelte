<script>
    import NavBar from '../lib/components/NavBar.svelte';
    import Footer from '../lib/components/Footer.svelte';
  </script>

<svelte:head>
  <link rel="stylesheet" href="/styles/global.css" />
</svelte:head>
  
  <NavBar />
  <slot />
  <Footer />