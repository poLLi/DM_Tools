<template>
    <div>
        <app-navbar />
        <Nuxt />
        <app-footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
    components: {
        appNavbar: Navbar,
        appFooter: Footer
    }
};
</script>
