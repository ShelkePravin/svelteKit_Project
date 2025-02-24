<script>
  import { onMount } from "svelte";
  import NavBar from '../lib/components/NavBar.svelte';
    import Footer from '../lib/components/Footer.svelte';

  let isDarkMode = false;

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDarkMode = true;
      document.documentElement.classList.add("dark");
    }
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
</script>

<NavBar on:toggleDarkMode={toggleDarkMode} />
<slot />
<Footer />
