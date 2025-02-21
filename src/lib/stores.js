import { writable } from 'svelte/store';

export const pages = writable([
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
]);